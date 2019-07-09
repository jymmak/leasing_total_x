import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SERVICIO_MODULO_COMERCIAL } from 'src/config/services';
@Injectable()
export class ClienteService {
  constructor(private _http: HttpClient) {
  }
  listarClientes(data) {
    return this._http.post(SERVICIO_MODULO_COMERCIAL.organizaciones.clientes.listar, data);
  }
  eliminar(clienteId) {
    return this._http.delete(SERVICIO_MODULO_COMERCIAL.organizaciones.clientes.eliminar + clienteId);
  }
}
