import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PokemonModule } from './pokemon/pokemon.module';

@Module({
  imports: [

    //comunicacion de index.html en public
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../', 'public'),
    }),
    
    //conexion con mongo db
    MongooseModule.forRoot('mongodb://localhost:27017/nest-pokemon'),
    
    PokemonModule,

  ],

  controllers: [],
  providers: [],
})
export class AppModule {}
