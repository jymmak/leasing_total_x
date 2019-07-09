import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SERVICIO_MODULO_COMERCIAL } from 'src/config/services';
@Injectable()
export class ClienteFormularioContactoService {
    constructor(private _http: HttpClient) {
    }
    listarCanalContacto() {
        return this._http.get(SERVICIO_MODULO_COMERCIAL.util.listarCanalContacto);
    }
    nuevo(data) {
        return this._http.post(SERVICIO_MODULO_COMERCIAL.organizaciones.cliente_contactos.nuevo, data);
    }
    editar(data) {
        return this._http.put(SERVICIO_MODULO_COMERCIAL.organizaciones.cliente_contactos.nuevo, data);
    }
    ver(clienteId) {
        return this._http.get(SERVICIO_MODULO_COMERCIAL.organizaciones.cliente_contactos.editar + clienteId);
    }
}
