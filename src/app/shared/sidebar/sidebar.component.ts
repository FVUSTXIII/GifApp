import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  {
  constructor ( private _gifs_service : GifsService ) { }
  showHistory () : string[] {
    return [... this._gifs_service.historial];
  }

  buscar ( termino : string ) : void{
    this._gifs_service.buscarGifs(termino);
  }

}
