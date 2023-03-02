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
  subLendarios = Array();
  lendarios = Array();

  numDexSubLendarios = ['145','146','243','244','381','480','481','482','485','380','379','378','377','245','281','480','481','482','485','486','488','638','639','640','641','642','645','772','773','785','786','787','788','793','794','795','796','797','798','799','803','805','806','891','892','894','895','896','897','905','1003','1002','1001','1004'];
  numDexLendario = ['150','249','250','382','383','384','483','484','487','643','644','646','716','717','718','789','790','791','792','800','888','889','890','898','1007','1008'];
  

  constructor(
    public pokemonService: PokemonService,
    private toastr: ToastrService){  
  }

  ngOnInit(){
    this.searchSubLendarios();
    this.searchLendarios();
  }

  searchSubLendarios(){
    this.numDexSubLendarios.forEach((SubLendarioNumDex) => {
      this.pokemonService.getPokemonByName(SubLendarioNumDex).subscribe(
        (dados) => {
          this.subLendarios.push(dados);
        }
      )
    });
  }

  searchLendarios(){
    this.numDexLendario.forEach((LendarioNumDex) => {
      this.pokemonService.getPokemonByName(LendarioNumDex).subscribe(
        (dados) => {
          this.lendarios.push(dados);
        }
      )
    });
  }

  alterarAbaAtiva(aba: any){
    this.abaAtiva = aba;
    console.log(this.abaAtiva);
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
