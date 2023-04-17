import { Module } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pokemon, pokemonSchema } from './entities/pokemon.entity';

@Module({
  controllers: [PokemonController],
  providers: [PokemonService],
  imports: [
    //Craer el schema en la base de datos
    MongooseModule.forFeature([
      {
        name: Pokemon.name,
        schema: pokemonSchema,
      }
    ])
  ],
  exports: [PokemonService, MongooseModule],
})
export class PokemonModule {}
