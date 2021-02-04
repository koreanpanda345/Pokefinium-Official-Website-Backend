import{ config} from "dotenv";
config();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import serverless from 'serverless-http';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api');
  app.enableCors({
	  origin: ['http://localhost:3000'],
	  credentials: true
  });

  await app.listen(3001);
}
bootstrap();

