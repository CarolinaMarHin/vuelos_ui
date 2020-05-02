import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Vuelo } from 'src/app/models/vuelo';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  flights = [];

  constructor(private http: HttpClient, private router: Router){
    this.http.get('http://localhost:8090/listavuelos').toPromise().then(data => {
      let index = 0;
      for(let flight in data){
        this.flights.push(data[index]);
        index ++;
      }
    });
  }

  ngOnInit() {
  }

  eliminarVuelo(idVuelo:number){
    this.http.delete<Vuelo>('http://localhost:8090/eliminarvuelo/' + idVuelo).subscribe(
      res => {
        console.log(res);
      }
    );
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }
}
