function required(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing env variable: ${name}`);
  }
  return value;
}

export const envConfig = {
  baseURL: required("BASE_URL"),
  username: required("TEST_USERNAME"),
  password: required("TEST_PASSWORD"),
};