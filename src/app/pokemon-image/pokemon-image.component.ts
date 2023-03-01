import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-image',
  templateUrl: './pokemon-image.component.html',
  styleUrls: ['./pokemon-image.component.sass']
})
export class PokemonImageComponent {
  @Input() url: any;
  @Input() class: any;
}
