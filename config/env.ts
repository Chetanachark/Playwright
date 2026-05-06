import * as dotenv from 'dotenv';

const env = process.env.TEST_ENV || 'dev';

dotenv.config({ path: `.env.${env}` });

export const envConfig = {
  baseURL: process.env.BASE_URL!,
  username: process.env.TEST_USERNAME!,
  password: process.env.TEST_PASSWORD!,
};