const getEnv = (key: string, defaultValue?: string) => {
  const value = process.env[key];

  if (value === undefined) {
    throw new Error(`Missing environment variable ${key}`);
  }

  return value;
};

export const PORT = getEnv("PORT");
export const MONGODB_URI = getEnv("MONGODB_URI");
export const NODE_ENV = getEnv("NODE_ENV");
export const REFRESH_TOKEN_SECRET = getEnv("REFRESH_TOKEN_SECRET");
export const ACCESS_TOKEN_SECRET = getEnv("ACCESS_TOKEN_SECRET")

