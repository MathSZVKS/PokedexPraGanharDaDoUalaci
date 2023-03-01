import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { HttpClientModule} from '@angular/common/http'
import { PokemonService } from './services/pokemon.service';
import { PokemonImageComponent } from './pokemon-image/pokemon-image.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonCardComponent,
    PokemonImageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
