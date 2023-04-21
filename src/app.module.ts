import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { PokemonModule } from './pokemon/pokemon.module';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { EnvConfiguration } from './config/app.config';
import { JoiValidationSchema } from './config/joi.validation';


@Module({
  imports: [

    //para uso de variables de entorno
    ConfigModule.forRoot({
      load: [EnvConfiguration],
      validationSchema: JoiValidationSchema,
    }),

    //comunicacion de index.html en public
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../', 'public'),
    }),
    
    //conexion con mongo db
    MongooseModule.forRoot(process.env.MONGODB ),
    
    PokemonModule,
    
    CommonModule,
    
    SeedModule,

  ],

  controllers: [],
  providers: [],
})
export class AppModule {

  constructor(){
    //ver todas las veriables por defecto y creados
    // console.log(process.env);
    
  }
}
