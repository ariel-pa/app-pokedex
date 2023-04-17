import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //validator
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,

      //Convierte en numero
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      }
    })
  )

 //permite agregar el prefijo api/v2 a localhost:3000/ 
  app.setGlobalPrefix('api/v2');  

  await app.listen(3000);
  console.log('http://localhost:3000');
  
}
bootstrap();
