export type RefreshToken = {
  token: string;
  ip?: string;
  device?: string;
  expiredDateTime: Date;
};

export type User = {
  id: number;
  firstName: string;
  lastName?: string;
  middleName?: string;
  email: string;
};
