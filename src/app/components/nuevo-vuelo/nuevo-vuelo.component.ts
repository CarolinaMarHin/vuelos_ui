import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Vuelo } from 'src/app/models/vuelo';

@Component({
  selector: 'app-nuevo-vuelo',
  templateUrl: './nuevo-vuelo.component.html',
  styleUrls: ['./nuevo-vuelo.component.css']
})
export class NuevoVueloComponent implements OnInit {
  
  public vuelo:Vuelo={
    idVuelo:null,
    origen:"",
    destino:"",
    fechaLlegada:null,
    fechaSalida:null
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit(flightFormFlight:NgForm){
    console.log(flightFormFlight.value);
  }
}
