import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { portNumber } from './config/keys';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(portNumber);
}
bootstrap();
