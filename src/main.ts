require('dotenv').config();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

const logger = new Logger('Main');

const rabbitmqUrl = process.env.RABBITMQ_URL;

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [`amqp://${rabbitmqUrl}`],
      noAck: false,
      queue: 'micro-legend'
    },

  });

  await app.listen();
}
bootstrap();
