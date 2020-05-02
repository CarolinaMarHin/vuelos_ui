import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { HttpClient } from '@angular/common/http';
import { Pasajero } from 'src/app/models/pasajero';

@Component({
  selector: 'app-ver-pasajero',
  templateUrl: './ver-pasajero.component.html',
  styleUrls: ['./ver-pasajero.component.css']
})
export class VerPasajeroComponent implements OnInit {

  pasajeros = [];

  constructor(private http: HttpClient, private route: ActivatedRoute, private router : Router){
    this.http.get('http://localhost:8090/pasajerosvuelo?idVuelo=' + this.route.snapshot.paramMap.get("id")).toPromise().then(data => {
      let index = 0;
      for(let pasajero in data){
        this.pasajeros.push(data[index]);
        index ++;
      }
    });
  }
  
  ngOnInit() { 
  }

  eliminarPasajero(idPasajero:number){
    this.http.delete<Pasajero>('http://localhost:8090/eliminarpasajero/' + idPasajero).subscribe(
      res => {
        console.log(res);
      }
    );
    window.location.reload();
  }

}
