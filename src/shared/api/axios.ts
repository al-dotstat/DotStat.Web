import axios from "axios";
import usersController from "./usersController";

declare module "axios" {
  export interface AxiosInstance {
    setAuth: (token: string, refreshToken: string) => void;
    removeAuth: () => void;
    getToken: () => string | null;
    getRefreshToken: () => string | null;
    downloadStaticFile: (fileName: string) => void;
  }
}

let isRefreshing = false;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let failedQueue: any[] = [];

const processQueue = (error: Error | null, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

export const apiClient = axios.create({
  withCredentials: true,
  baseURL: process.env.NEXT_PUBLIC_API_URL + "api",
});

apiClient.downloadStaticFile = (fileName) => {
  axios
    .get(process.env.NEXT_PUBLIC_API_URL + "StaticFiles/" + fileName, {
      responseType: "blob",
    })
    .then((response) => {
      if (response.status === 200) {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", fileName);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      } else {
        console.error("Error: Received non-200 status code");
      }
    })
    .catch((error) => {
      console.error("Error downloading the image:", error);
    });
};

apiClient.setAuth = (token: string, refreshToken: string) => {
  apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  localStorage.setItem("token", token);
  localStorage.setItem("refreshToken", refreshToken);
};

apiClient.removeAuth = () => {
  apiClient.defaults.headers.common["Authorization"] = null;

  localStorage.removeItem("token");
  localStorage.removeItem("refreshToken");
};

apiClient.getToken = () => localStorage.getItem("token");
apiClient.getRefreshToken = () => localStorage.getItem("refreshToken");

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        try {
          const token = await new Promise(function (resolve, reject) {
            failedQueue.push({ resolve, reject });
          });
          originalRequest.headers["Authorization"] = "Bearer " + token;
          return await apiClient(originalRequest);
        } catch (err) {
          return await Promise.reject(err);
        }
      }

      originalRequest._retry = true;
      isRefreshing = true;

      return new Promise(function (resolve, reject) {
        if (!apiClient.getRefreshToken()) {
          processQueue(error, null);
          isRefreshing = false;
          reject(error);
          return;
        }
        usersController
          .refreshToken({ refreshToken: apiClient.getRefreshToken()! })
          .then((data) => {
            apiClient.setAuth(data.token, data.refreshToken);
            originalRequest.headers["Authorization"] = "Bearer " + data.token;
            processQueue(null, data.token);
            resolve(apiClient(originalRequest));
          })
          .catch((err) => {
            processQueue(err, null);
            reject(error);
          })
          .finally(() => {
            isRefreshing = false;
          });
      });
    }

    return Promise.reject(error);
  }
);
