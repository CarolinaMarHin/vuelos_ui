import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { NuevoPasajeroComponent } from 'src/app/components/nuevo-pasajero/nuevo-pasajero.component';
import { NuevoVueloComponent } from 'src/app/components/nuevo-vuelo/nuevo-vuelo.component';


const routes: Routes = [
    { path: 'nuevopasajero', component: NuevoPasajeroComponent },
    { path: 'nuevovuelo', component: NuevoVueloComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
