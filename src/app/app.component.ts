import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  idiomaSelect:string = 'es';

  constructor(public translate: TranslateService){
    this.translate.addLangs(['es', 'en']);
    this.translate.setDefaultLang('es');
    this.translate.use(this.idiomaSelect.toLowerCase());
  }

  changeLan(event){
   const value = event.target.value;
   this.idiomaSelect = value;
   this.translate.use(this.idiomaSelect.toLowerCase());
  }

  ngOnInit(): void {
    
  }
}
