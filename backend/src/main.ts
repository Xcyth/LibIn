import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.API_PORT || 3001;

  const config = new DocumentBuilder()
    .setTitle('Library API')
    .setDescription('The Library API description')
    .setVersion('1.0')
    .addTag('library')
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);
  const url = await app.getUrl();
  Logger.log(`Application is running on: ${url}`, 'NestApplication');
}
bootstrap();
