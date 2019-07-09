import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVICIO_MODULO_COMERCIAL } from 'src/config/services';

@Injectable({
  providedIn: 'root'
})
export class SucursalContactoService {

  constructor(private _http: HttpClient) {
  }

  listar(data) {
    return this._http.post(SERVICIO_MODULO_COMERCIAL.organizaciones.proveedores_contactos.listar, data);
  }

  eliminar(data) {
    return this._http.delete(SERVICIO_MODULO_COMERCIAL.organizaciones.proveedores_contactos.eliminar + data);
  }

}
