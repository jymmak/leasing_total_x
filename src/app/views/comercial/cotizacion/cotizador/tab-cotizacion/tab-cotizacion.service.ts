import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SERVICIO_MODULO_COMERCIAL } from 'src/config/services';
@Injectable()
export class TabCotizacionService {
    constructor(private _http: HttpClient) {
    }
    listarMoneda() {
        return this._http.get(SERVICIO_MODULO_COMERCIAL.util.listarMoneda);
    }
    listarTipoOperacion() {
        return this._http.get(SERVICIO_MODULO_COMERCIAL.util.listarTipoOperacion);
    }
}
