import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVICIO_MODULO_COMERCIAL } from 'src/config/services';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {
  constructor(private _http: HttpClient) {
  }
  listarProveedores(data) {
    return this._http.post(SERVICIO_MODULO_COMERCIAL.organizaciones.proveedores.listar, data);
  }
  
  eliminar(clienteId) {
    return this._http.delete(SERVICIO_MODULO_COMERCIAL.organizaciones.proveedores.eliminar + clienteId);
  }
}
