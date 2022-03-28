import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent{
  operador1:number;
  operador2:number;
  @Output() resultadoSuma = new EventEmitter<number>();
  //metodo de suma
  operacion():void{
    let resultado = this.operador1 + this.operador2;
    this.resultadoSuma.emit(resultado);
  }
}
