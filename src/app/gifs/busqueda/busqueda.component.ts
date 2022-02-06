import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent  {
  @ViewChild('txtBuscar') txtBuscar! : ElementRef <HTMLInputElement>;
  constructor ( private _gifs_service : GifsService ) {  }
  buscar (  ) : void {

    const valor = this.txtBuscar.nativeElement.value;
    this._gifs_service.buscarGifs( valor );
    console.log( valor );
    this.txtBuscar.nativeElement.value = '';

  }

}
