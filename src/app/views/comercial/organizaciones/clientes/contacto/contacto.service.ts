import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVICIO_MODULO_COMERCIAL } from 'src/config/services';
@Injectable()
export class ClienteContactoService {
    constructor(private _http: HttpClient) {
    }
    listarContactos(data) {
        return this._http.post(SERVICIO_MODULO_COMERCIAL.organizaciones.cliente_contactos.listar, data);
    }
    eliminar(contactoId) {
        return this._http.delete(SERVICIO_MODULO_COMERCIAL.organizaciones.cliente_contactos.eliminar + contactoId);
    }
}
