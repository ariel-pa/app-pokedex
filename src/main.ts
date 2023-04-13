import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

 //permite agregar el prefijo api/v2 a localhost:3000/ 
  app.setGlobalPrefix('api/v2');  

  await app.listen(3000);
  console.log('http://localhost:3000');
  
}
bootstrap();
