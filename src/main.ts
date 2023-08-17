import { NestApplication, NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { jwtAuth } from './auth/jwtAuth.guard';
import { ConfigService } from '@nestjs/config';
import { join } from 'path';
import { ResponseFormatInterceptor } from './middlewares/response-format.middleware';

async function bootstrap() {

  const app = await NestFactory.create<NestApplication>(AppModule);

  await app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  const reflector = app.get(Reflector);
  app.useGlobalGuards(new jwtAuth(reflector));
  app.useGlobalInterceptors(new ResponseFormatInterceptor());
  const configService = app.get(ConfigService);
  app.useStaticAssets(join(__dirname + '/src/uploads'));

  const port = configService.get('port');
  await app.listen(port);
}
bootstrap();
