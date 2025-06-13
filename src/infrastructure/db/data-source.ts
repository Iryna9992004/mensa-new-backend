import 'reflect-metadata';
import { DataSource } from 'typeorm';

import { config } from '../../shared/config/config';
import { UserEntity } from '../../domain/user/user.entity';
import { Migration1749815661974 } from '../migrations/1749815661974-migration';

export const AppDataSource = new DataSource({
  type: config.db.type as never,
  host: config.db.host,
  port: config.db.port,
  username: config.db.username,
  password: config.db.password,
  database: config.db.database,
  synchronize: false,
  logging: false,
  entities: [UserEntity],
  migrations: [Migration1749815661974],
  subscribers: [],
});
