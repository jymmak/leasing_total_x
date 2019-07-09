
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVICIO_MODULO_COMERCIAL } from 'src/config/services';
@Injectable()
export class TabBienesNuevoService {
    constructor(private _http: HttpClient) {
    }
    listarNiveles() {
        return this._http.get(SERVICIO_MODULO_COMERCIAL.util.listarBienNiveles);
    }
    listarSubNiveles(nivelId: number) {
        let data: any = {
            idnivel: nivelId
        }
        return this._http.post(SERVICIO_MODULO_COMERCIAL.util.listarBienSubNiveles, data);
    }
    listarBienTipos(nivelId: number, subNivelId: number) {
        let data: any = {
            nivel: nivelId,
            idsubnivel: subNivelId,
            tipo_busqueda: "TIPO_n"
        }
        return this._http.post(SERVICIO_MODULO_COMERCIAL.util.listarBienTipos, data);
    }
    listarBienClases(tipoId: number) {
        let data: any = {
            idbientipo: tipoId,
        }
        return this._http.post(SERVICIO_MODULO_COMERCIAL.util.listarBienClases, data);
    }
    listarBienMarcas(data) {
        return this._http.post(SERVICIO_MODULO_COMERCIAL.util.listarBienMarcas, data);
    }
    listModelos(MarcaId) {
    }
    listTeas() {
    }
    listPlazos() {
    }
    listIniciales() {
    }

}
