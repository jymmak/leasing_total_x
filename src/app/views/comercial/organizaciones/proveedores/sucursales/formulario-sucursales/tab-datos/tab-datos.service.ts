import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVICIO_MODULO_COMERCIAL } from 'src/config/services';

@Injectable({
  providedIn: 'root'
})
export class TabDatosService {

  constructor(private _http: HttpClient) {
  }



}
