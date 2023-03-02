import { Component, Input } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass']
})
export class PokemonCardComponent {
  pokemonFinded: any;
  pokemonDescrition: any;
  description: any;
  carregarMaisInformacoes = false;
  modalAberta = false;
  modal = document.getElementById("myModal");
  btn = document.getElementById("myBtn");
  span = document.getElementsByClassName("close")[0];

  @Input() pokemon = '';
  @Input() tipo: any;
  @Input() numberOfDex = 0;
  @Input() simpleSearch: any;
  @Input() abilities: any;
  @Input() baseExperience: any;
  @Input() height: any;
  @Input() moves: any;
  @Input() stats: any;

  constructor(
  public pokemonService: PokemonService
  ){ }
  
  getImagePokemon(){
    const formated = this.leadingZero(this.numberOfDex);
    return 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/' + formated +'.png';
  }

  leadingZero(str: string | number, size = 3): string{
    let s = String(str);

    while (s.length < (size || 2)){
      s = '0' + s;
    }

    return s;
  }

  maisInformacoes(pokemon = ''){
    this.pokemonService.getPokemonByName(pokemon).subscribe(
      (dados) => {
        this.pokemonFinded = dados;
        this.carregarMaisInformacoes = true;
        this.modalAberta = true;
        console.log(this.pokemonFinded);
        
      }
    )

    this.pokemonService.getPokemonDescritionByName(pokemon).subscribe(
      (dados) => {
        this.pokemonDescrition = dados;
        this.description = this.pokemonDescrition['flavor_text_entries']['0']['flavor_text'];
        console.log(this.pokemonDescrition);
      }
    )
  }

  voltar(){
    this.modalAberta = false;
    this.carregarMaisInformacoes = false
  }

}
