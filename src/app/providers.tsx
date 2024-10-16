"use client";

import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { PropsWithChildren, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const [queryClient] = useState(
    new QueryClient({
      queryCache: new QueryCache({
        onError: (err) => {
          if (axios.isAxiosError(err)) {
            if (err.response?.status === 401) router.push("/auth");
            else if (err.response && err.response?.status >= 500)
              toast.error("Сервер не смог обработать запрос");
          } else {
            toast.error("Не удалось выполнить запрос");
          }
        },
      }),
      defaultOptions: {
        queries: {
          staleTime: 1000 * 60 * 5,
          retry: (count, error) => {
            if (count >= 3) return false;
            if (!axios.isAxiosError(error) || !error.response) return true;

            return (
              error.response.status !== 401 && error.response.status !== 404
            );
          },
        },
        mutations: {
          retry: 3,
        },
      },
    })
  );

  return (
    <>
      <Toaster position="top-right" />
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </>
  );
};

export default Providers;
