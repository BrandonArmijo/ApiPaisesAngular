import {Component, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent{


  termino: string = '';

  buscar(){
// eslint-disable-next-line no-console
    console.log('Hola mundo');
  }

}
