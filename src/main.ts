import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from './shared/config/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(config.common.port ?? 3000, () => {
    console.log(`Server started on port ${config.common.port}`);
  });
}
bootstrap();
