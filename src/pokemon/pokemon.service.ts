import { Injectable } from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class PokemonService {
  constructor(private readonly httpService: HttpService) {}

  async findAll() {
    try {
      const response = await firstValueFrom(
        this.httpService.get('https://pokeapi.co/api/v2/pokemon')
      );
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch Pokémon: ${error.message}`);
    }
  }

  
}
