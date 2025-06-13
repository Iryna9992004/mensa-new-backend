import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './User';

import 'dotenv';
import { config } from '../../shared/config/config';

export const AppDataSource = new DataSource({
  type: config.db.type as never,
  host: config.db.host,
  port: config.db.port,
  username: config.db.username,
  password: config.db.password,
  database: config.db.database,
  synchronize: false,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
});
