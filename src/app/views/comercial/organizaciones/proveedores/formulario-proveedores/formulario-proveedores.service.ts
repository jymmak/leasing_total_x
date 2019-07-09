import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVICIO_MODULO_COMERCIAL } from 'src/config/services';
@Injectable({
  providedIn: 'root'
})
export class FormularioProveedoresService {

  constructor(private _http: HttpClient) {
  }

  guardarProveedores(data) {
    console.log(data);

    return this._http.post(SERVICIO_MODULO_COMERCIAL.organizaciones.proveedores.nuevo, data);
  }
  editarProveedores(data) {
    console.log(data);

    return this._http.put(SERVICIO_MODULO_COMERCIAL.organizaciones.proveedores.nuevo, data);
  }

  listarProvincias(departamentoId: number = 0) {
    return this._http.get(SERVICIO_MODULO_COMERCIAL.util.listarProvincias + departamentoId);
  }

  listarDistritos(provinciaId: number = 0) {
    return this._http.get(SERVICIO_MODULO_COMERCIAL.util.listarDistritos + provinciaId);
  }

  listarDepartamanto() {
    return this._http.get(SERVICIO_MODULO_COMERCIAL.util.listarDepartamentos);
  }

  listarTipoBien() {
    return this._http.get(SERVICIO_MODULO_COMERCIAL.util.listarBienNiveles);
  }

  consultarProveedor(data) {
    return this._http.get(SERVICIO_MODULO_COMERCIAL.organizaciones.proveedores.consultar + data);
  }



}
