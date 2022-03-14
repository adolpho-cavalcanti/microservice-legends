import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

const logger = new Logger('Main');

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://user:Ti5Ls2ahgaJ0@3.89.120.123:5672/legendsCards'],
      noAck: false,
      queue: 'micro-legend'
    },

  });

  await app.listen();
}
bootstrap();
