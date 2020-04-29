import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { NuevoPasajeroComponent } from 'src/app/components/nuevo-pasajero/nuevo-pasajero.component';
import { NuevoVueloComponent } from 'src/app/components/nuevo-vuelo/nuevo-vuelo.component';
import { VerPasajeroComponent } from 'src/app/components/ver-pasajero/ver-pasajero.component';
import { HomeComponent } from 'src/app/components/home/home.components';
import { MenuComponent } from './components/menu/menu.component';


const routes: Routes = [
    { path: '', component: MenuComponent },
    { path: 'nuevopasajero', component: NuevoPasajeroComponent },
    { path: 'nuevovuelo', component: NuevoVueloComponent },
    { path: 'verpasajerosvuelo', component: VerPasajeroComponent },
    { path: '**', component: MenuComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
