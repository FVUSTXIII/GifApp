import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private _historial : string[] = [];
  private _api_key   : string = "MwifK5TXXR8wQO3waZ6jOfrbNzi7eShv";
  private _service_url : string = "https://api.giphy.com/v1/gifs";
  public resultados :  Gif [] = [];

  constructor( private _http : HttpClient ) {
    this._historial = JSON.parse(localStorage.getItem("historial")!) || [];
    /*if ( localStorage.getItem("historial") ) {
      this._historial = JSON.parse(localStorage.getItem("hisorial")!);
    }*/
  }
  get historial () {
    return [...this._historial];
  }

  buscarGifs( query : string = '' ) {
    query = query.trim().toLocaleLowerCase();
    if ( !this._historial.includes( query ) ) {
      this._historial.unshift( query );
      this._historial = this._historial.splice(0, 10);
      
    }
    console.log(this._historial)
    const params = new HttpParams()
                      .set('api_key', this._api_key)
                      .set('limit', '10')
                      .set('q', query );
    this._http.get<SearchGifsResponse>(`${ this._service_url }/search`, { params : params})
              .subscribe( (resp : SearchGifsResponse)  => {
                console.log(resp.data);
                this.resultados = resp.data;
              });
    localStorage.setItem("historial", JSON.stringify(this._historial));
  }
}
