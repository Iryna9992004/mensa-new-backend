import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './shared/config/config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: config.db.type as never,
      host: config.db.host,
      port: config.db.port,
      username: config.db.username,
      password: config.db.password,
      database: config.db.database,
      entities: [],
      synchronize: false,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
