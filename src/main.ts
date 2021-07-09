import { PORT } from './utility';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.enableCors({});
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  await app.listen(PORT);
}
bootstrap();
