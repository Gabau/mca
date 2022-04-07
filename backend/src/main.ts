import { NestFactory } from '@nestjs/core';
import { portNumber } from './config/keys';
import { UsersModule } from './users/users.module';

async function bootstrap() {
  const app = await NestFactory.create(UsersModule);
  await app.listen(portNumber);
}
bootstrap();
