import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVICIO_MODULO_COMERCIAL } from 'src/config/services';

@Injectable({
  providedIn: 'root'
})
export class SucursalesService {

  constructor(private _http: HttpClient) {
  }

  listaSucursales(data) {
    return this._http.post(SERVICIO_MODULO_COMERCIAL.organizaciones.proveedores_sucursales.listar, data);
  }

  eliminar(data) {
    return this._http.delete(SERVICIO_MODULO_COMERCIAL.organizaciones.proveedores_sucursales.eliminar + data);
  }
}
