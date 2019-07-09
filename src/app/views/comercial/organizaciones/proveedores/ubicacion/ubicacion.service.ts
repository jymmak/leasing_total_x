import { Injectable } from '@angular/core';
import { SERVICIO_MODULO_COMERCIAL } from 'src/config/services';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {

  constructor(private _http: HttpClient) {
  }


  consultar(data) {
    return this._http.get(SERVICIO_MODULO_COMERCIAL.organizaciones.proveedores_sucursales.consultar + data);
  }
}
