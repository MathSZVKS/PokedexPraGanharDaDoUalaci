import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular-pokedex';
  url = 'https://media.discordapp.net/attachments/1019237103764250676/1080299040375312444/1200px-International_Pok_C3_A9mon_logo.svg.png';
  class = 'pokemonTitle';
}
