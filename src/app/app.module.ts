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
import { HomeComponent } from './components/home/home.components';

@NgModule({
  declarations: [
    AppComponent,
    NuevoPasajeroComponent,
    NuevoVueloComponent,
    VerPasajeroComponent,
    MenuComponent,
    HomeComponent
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
