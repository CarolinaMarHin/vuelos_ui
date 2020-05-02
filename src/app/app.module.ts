import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { NuevoPasajeroComponent } from './components/nuevo-pasajero/nuevo-pasajero.component';
import { NuevoVueloComponent } from './components/nuevo-vuelo/nuevo-vuelo.component';

import { HttpClientModule, HttpClient} from '@angular/common/http';
import { VerPasajeroComponent } from './components/ver-pasajero/ver-pasajero.component';
import { MenuComponent } from './components/menu/menu.component'

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    NuevoPasajeroComponent,
    NuevoVueloComponent,
    VerPasajeroComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
