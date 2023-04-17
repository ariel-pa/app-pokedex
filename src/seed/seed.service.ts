import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import axios, { AxiosInstance } from "axios";
import { Model } from 'mongoose';
import { AxiosAdapter } from 'src/common/httpAdapters/axios.adapter';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { PokemonService } from 'src/pokemon/pokemon.service';
import { PokedexResponse } from './interfaces/poke-response.interace';

@Injectable()
export class SeedService {

  constructor(
    private readonly pokemonService: PokemonService,
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,

    //implementacion de patron adaptador creado      
    private readonly http: AxiosAdapter,
    ){}


  async executeSeed() {

    await this.pokemonModel.deleteMany({});

    const data = await this.http.get<PokedexResponse>('https://pokeapi.co/api/v2/pokemon?limit=650');

    const pokemonToInsert: {name: string, no: number}[] = [];

    //Optener no de la url con tipo de dato number
    data.results.forEach(({name, url})=> {

      const segments = url.split('/');
      const no = +segments[segments.length -2];

      pokemonToInsert.push({name, no})
      // this.pokemonService.create({name, no});
    })

    //Se exportar MongooseModule en pokemon.module.ts par utilizar aquí y la insercion sea de golpe.
    await this.pokemonModel.insertMany(pokemonToInsert);

    return 'Seed Executed';
  }
}
