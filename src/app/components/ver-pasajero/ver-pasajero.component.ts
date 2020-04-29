import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ver-pasajero',
  templateUrl: './ver-pasajero.component.html',
  styleUrls: ['./ver-pasajero.component.css']
})
export class VerPasajeroComponent implements OnInit {

  pasajeros = [];

  constructor(private http: HttpClient){
    this.http.get('http://localhost:8090/pasajerosvuelo?idVuelo=' + '3').toPromise().then(data => {
      let index = 0;
      for(let pasajero in data){
        this.pasajeros.push(data[index]);
        index ++;
      }
    });
  }

  ngOnInit() {
  }

}
