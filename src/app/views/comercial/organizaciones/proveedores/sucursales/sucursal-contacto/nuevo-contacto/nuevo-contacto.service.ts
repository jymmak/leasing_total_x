import { Injectable } from '@angular/core';
import { SERVICIO_MODULO_COMERCIAL } from 'src/config/services';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NuevoContactoService {
  constructor(private _http: HttpClient) { }
  
  guardar(data) {
    return this._http.post(SERVICIO_MODULO_COMERCIAL.organizaciones.proveedores_contactos.nuevo, data);
  }
  editar(data) {
    return this._http.put(SERVICIO_MODULO_COMERCIAL.organizaciones.proveedores_contactos.editar, data);
  }
  consultar(data) {
    return this._http.get(SERVICIO_MODULO_COMERCIAL.organizaciones.proveedores_contactos.consultar + data);
  }
}
