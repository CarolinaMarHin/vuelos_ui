import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pasajero } from 'src/app/models/pasajero';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { 
    let idPas: string = this.route.snapshot.paramMap.get("id");
    let nom: string = this.route.snapshot.paramMap.get("nombre");
    let ape: string = this.route.snapshot.paramMap.get("apellido");
    let edad: string = this.route.snapshot.paramMap.get("edad");
    let cor: string = this.route.snapshot.paramMap.get("correo");

    this.pasajero.idPasajero = Number(idPas);
    this.pasajero.nombre = nom;
    this.pasajero.apellido = ape;
    this.pasajero.edad = edad;
    this.pasajero.correo = cor;

  }

  ngOnInit() {
  }

  onSubmit(){
    
  }

}
