import { Injectable } from '@angular/core';
import { SERVICIO_MODULO_COMERCIAL } from 'src/config/services';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NuevoSucursalService {


  constructor(private _http: HttpClient) {
  }

  guardar(data) {
    return this._http.post(SERVICIO_MODULO_COMERCIAL.organizaciones.proveedores_sucursales.nuevo, data);
  }
  editar(data) {
    return this._http.put(SERVICIO_MODULO_COMERCIAL.organizaciones.proveedores_sucursales.editar, data);
  }
  consultar(data) {
    return this._http.get(SERVICIO_MODULO_COMERCIAL.organizaciones.proveedores_sucursales.consultar + data);
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
