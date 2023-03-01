import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons = [];

  constructor(
    private httpClient: HttpClient) {
    this.loadPokemons();
  }

  async loadPokemons() {
    await this.httpClient.get<any>('https://pokeapi.co/api/v2/pokemon?limit=151').subscribe(
      (data) => {
        this.pokemons = data.results;
      }
    )
  }

  getPokemonByName(pokemon: string){
    return this.httpClient.get<any>('https://pokeapi.co/api/v2/pokemon/' + pokemon);
  }

  getPokemonByLimit(limit = 151){
    this.httpClient.get<any>('https://pokeapi.co/api/v2/pokemon?limit=' + limit).subscribe(
      (data) => {
        this.pokemons = data.results;
      }
    );
  }

  getPokemonDescritionByName(pokemon: string){
    return this.httpClient.get<any>('https://pokeapi.co/api/v2/pokemon-species/' + pokemon);
  }
}
