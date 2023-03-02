import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass'],
  providers: [PokemonService]
})
export class PokemonListComponent {
  pokemonFinded: any;
  simpleSearch = true;
  abaAtiva = 'pesquisar';
  lendarios: any;

  constructor(
    public pokemonService: PokemonService,
    private toastr: ToastrService){  
  }

  ngOnInit(){
    this.pokemonService.getPokemonByName('151').subscribe(
      (dados) => {
        this.lendarios = dados;
        console.log(this.lendarios);
      }
    )
  }

  alterarAbaAtiva(aba: any){
    this.abaAtiva = aba;
  }

  searching(search: string){
    this.pokemonService.getPokemonByName(search).subscribe(
      (dados) => {
        this.pokemonFinded = dados;
        this.toastr.success('Pokémon encontrado','Sucesso', {positionClass: 'toast-bottom-right'});
        this.simpleSearch = false;
        console.log(this.pokemonFinded);
      },
      (error) => {
        this.toastr.error('Pokémon não encontrado', 'Erro', {positionClass: 'toast-bottom-right'});
        this.simpleSearch = true;
      }
    )
  }

  alterLimit(qtd: any){
    this.pokemonService.getPokemonByLimit(qtd);
  }

  reloadPokemons(){
    this.simpleSearch = true;
  }
}
