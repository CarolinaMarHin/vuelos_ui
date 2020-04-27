import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pasajero } from 'src/app/models/pasajero';

@Component({
  selector: 'app-nuevo-pasajero',
  templateUrl: './nuevo-pasajero.component.html',
  styleUrls: ['./nuevo-pasajero.component.css']
})
export class NuevoPasajeroComponent implements OnInit {

  public pasajero:Pasajero={
    idPasajero:null,
    nombre:"",
    apellido:"",
    correo:"",
    edad:""
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit(flightFormPassenger:NgForm){
    console.log(flightFormPassenger.value);
  }

}
