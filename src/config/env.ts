const getEnvVariable = (key: string) => {
  const value = import.meta.env[key] ?? undefined;
  if (value === undefined) {
    throw new Error(`Environment variable ${key} not found in .env!`);
  }
  return value;
};

export const env = {
  apiUrl: getEnvVariable("VITE_API_URL"),
};
