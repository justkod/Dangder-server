import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { graphqlUploadExpress } from 'graphql-upload';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(graphqlUploadExpress()); // graphql upload 이용하기위한 추가
  app.useStaticAssets(join(__dirname, '..', 'frontend')); // socket test 를 위한 추가
  // Cors 추가
  app.enableCors({
    origin: ['https://dangder.shop', 'http://localhost:3000'],
    credentials: true,
  });
  await app.listen(3000);
}
bootstrap();
