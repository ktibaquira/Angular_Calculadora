import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora';
  
  ResultadoPadre:number;
  
  procesarResultado(resultados:number){
    this.ResultadoPadre=resultados;
  }
  

}
