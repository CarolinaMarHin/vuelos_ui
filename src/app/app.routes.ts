import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoPasajeroComponent } from 'src/app/components/nuevo-pasajero/nuevo-pasajero.component';
import { NuevoVueloComponent } from 'src/app/components/nuevo-vuelo/nuevo-vuelo.component';
import { VerPasajeroComponent } from 'src/app/components/ver-pasajero/ver-pasajero.component';
import { MenuComponent } from './components/menu/menu.component';


const routes: Routes = [
    { path: '', component: MenuComponent },
    { path: 'nuevopasajero', component: NuevoPasajeroComponent },
    { path: 'editarpasajero/:id/:nombre/:apellido/:edad/:correo', component: NuevoPasajeroComponent },
    { path: 'nuevovuelo', component: NuevoVueloComponent },
    { path: 'editarvuelo/:id/:origen/:destino/:fechasalida/:fechallegada', component: NuevoVueloComponent },
    { path: 'verpasajerosvuelo/:id', component: VerPasajeroComponent },
    { path: '**', component: MenuComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
