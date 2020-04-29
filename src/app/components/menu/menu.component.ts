import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  flights = [];

  constructor(private http: HttpClient){
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

}
