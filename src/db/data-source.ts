import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './entity/User';

import { config } from '../shared/config/config';
import { Migration1749811370024 } from './migrations/1749811370024-migration';

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
  migrations: [Migration1749811370024],
  subscribers: [],
});
