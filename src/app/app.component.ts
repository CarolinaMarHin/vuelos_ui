import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Flights';
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

}
