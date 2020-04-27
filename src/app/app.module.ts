import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { NuevoPasajeroComponent } from './components/nuevo-pasajero/nuevo-pasajero.component';
import { NuevoVueloComponent } from './components/nuevo-vuelo/nuevo-vuelo.component';

@NgModule({
  declarations: [
    AppComponent,
    NuevoPasajeroComponent,
    NuevoVueloComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
