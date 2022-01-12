import { Component} from '@angular/core';
import {PaisService} from "../../services/pais.service";
import {CountryDOS} from "../../interfaces/pais.interface";

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: CountryDOS[] = [];

  constructor(private paisService: PaisService) {
  }

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    // eslint-disable-next-line no-console
    console.log(this.termino);

    this.paisService.buscarCapital(termino)
      .subscribe((paises) => {
        // eslint-disable-next-line no-console
        console.log(paises);
        this.paises = paises;
      }, (err) => {
        this.hayError = true;
        this.paises = [];
      });

  }



}
