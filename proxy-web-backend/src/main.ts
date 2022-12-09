import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  dotenv.config();
  //allow * origin for cors
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Accept, Authorization, X-Requested-With, X-HTTP-Method-Override',
  });
  await app.listen(15000, () => {
    console.log('Proxy Web Backend is running on port 15000');
  });
}
bootstrap();
