import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors'; // Optional, Nest has built-in CORS

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors({
    origin: 'http://localhost:3001', // Allow requests from your Next.js frontend
    methods: 'GET,POST,PUT,DELETE,OPTIONS', // Specify allowed HTTP methods
    credentials: true, // If your API supports credentials (cookies, authentication tokens)
  });

  await app.listen(3000);
}
bootstrap();
