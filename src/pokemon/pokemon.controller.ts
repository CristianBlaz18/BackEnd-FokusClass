import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Pokemon')
@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  

  @Get()
  @ApiOperation({
    summary: 'Listado de Instituciones',
    description:
      'al consultar esta API te devolvera el listado de todas las instituciones de ECORP; se utiliza el procedimiento almacenado sp_listar_area_academica()',
  })
  async findAll() {
    return this.pokemonService.findAll();
  }
}
