import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { NgForm, FormControl, Validators } from '@angular/forms';
import { Vuelo } from 'src/app/models/vuelo';

import { HttpClient } from '@angular/common/http';

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
    fechaLlegada:"",
    fechaSalida:""
  }

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { 
    let idVue: string = this.route.snapshot.paramMap.get("id");
    let ori: string = this.route.snapshot.paramMap.get("origen");
    let dest: string = this.route.snapshot.paramMap.get("destino");
    let fSalida: string = this.route.snapshot.paramMap.get("fechasalida");
    let fLlegada: string = this.route.snapshot.paramMap.get("fechallegada");

    this.vuelo.idVuelo = Number(idVue);
    this.vuelo.origen = ori;
    this.vuelo.destino = dest;
    this.vuelo.fechaSalida = fSalida;
    this.vuelo.fechaLlegada = fLlegada;

  }
  
  ngOnInit(){}
  
  onSubmit(){

    if(this.route.snapshot.paramMap.get("id") !== null){
      this.http.put<Vuelo>('http://localhost:8090/actualizarvuelo', this.vuelo).subscribe(
        res => {
          console.log(res);
        }
      );
      this.router.navigate(['/']).then(() => {
        window.location.reload();
      });
    }else{
      this.http.post<Vuelo>('http://localhost:8090/agregarvuelo', this.vuelo).subscribe(
        res => {
          console.log(res);
        }
      );
      this.router.navigate(['/']).then(() => {
        window.location.reload();
      });
    }
  }



}
