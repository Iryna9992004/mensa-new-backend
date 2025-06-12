import * as dotenv from 'dotenv';

dotenv.config();

interface Config {
  port: number;
  nodeEnv: string;
  db: {
    type: string;
    host: string;
    port: number;
    username: string;
    password: string;
    name: string;
  }
}

const config: Config = {
  port: Number(process.env.PORT) || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  db: {
    type: process.env.DB_TYPE || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5173,
    username: process.env.DB_USERNAME || 'test',
    password: process.env.DB_PASSWORD || "test",
    name: process.env.DB_NAME || "test",
  }
};

export default config;
