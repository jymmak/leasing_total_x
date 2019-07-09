import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SERVICIO_MODULO_COMERCIAL } from 'src/config/services';
@Injectable()
export class DetalleService {
    constructor(private _http: HttpClient) {
    }
    detalle(clienteId) {
        return this._http.get(SERVICIO_MODULO_COMERCIAL.organizaciones.clientes.detalle + clienteId);
    }
}
