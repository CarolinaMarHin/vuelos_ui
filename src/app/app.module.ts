import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { NuevoPasajeroComponent } from './components/nuevo-pasajero/nuevo-pasajero.component';
import { NuevoVueloComponent } from './components/nuevo-vuelo/nuevo-vuelo.component';

import { HttpClientModule} from '@angular/common/http';
import { VerPasajeroComponent } from './components/ver-pasajero/ver-pasajero.component';
import { MenuComponent } from './components/menu/menu.component'

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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
