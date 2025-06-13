interface ConfigI {
  common: {
    port: number;
  };
  db: {
    type: string;
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
  };
}

export const config: ConfigI = {
  common: {
    port: Number(process.env.PORT) || 3000,
  },
  db: {
    type: process.env.DB_TYPE || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5173,
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || '12233',
    database: process.env.DB_NAME || 'db',
  },
};
