import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SERVICIO_MODULO_COMERCIAL } from 'src/config/services';
@Injectable()
export class NuevoService {
    constructor(private _http: HttpClient) {
    }
    consultaRuc(ruc) {
        return this._http.get(SERVICIO_MODULO_COMERCIAL.organizaciones.clientes.consulta_ruc + ruc);
    }
    listarEmpresaTamanio() {
        return this._http.get(SERVICIO_MODULO_COMERCIAL.util.listarEmpresaTamanio);
    }
    listarProvincias(departamentoId: number = 0) {
        return this._http.get(SERVICIO_MODULO_COMERCIAL.util.listarProvincias + departamentoId);
    }
    listarDistrito(provinciaId: number = 0) {
        return this._http.get(SERVICIO_MODULO_COMERCIAL.util.listarDistritos + provinciaId);
    }
    listarEmpresaRegimenes() {
        return this._http.get(SERVICIO_MODULO_COMERCIAL.util.listarEmpresaRegimenes);
    }
    listarEmpresaIncluidoLista() {
        return this._http.get(SERVICIO_MODULO_COMERCIAL.util.listarEmpresaIncluidoLista);
    }
    listarCanal() {
        return this._http.get(SERVICIO_MODULO_COMERCIAL.util.listarCanal);
    }
    listarCampania() {
        return this._http.get(SERVICIO_MODULO_COMERCIAL.util.listarCampania);
    }
    listarProveedores(data) {
        return this._http.post(SERVICIO_MODULO_COMERCIAL.organizaciones.proveedores.listar, data);
    }
    listarEjecutivos(data) {
        return this._http.post(SERVICIO_MODULO_COMERCIAL.organizaciones.asignacionCartera.listarEjecutivos, data);
    }
    nuevo(data) {
        return this._http.post(SERVICIO_MODULO_COMERCIAL.organizaciones.clientes.nuevo, data);
    }
    editar(data) {
        return this._http.put(SERVICIO_MODULO_COMERCIAL.organizaciones.clientes.nuevo, data);
    }
    detalle(clienteId) {
        return this._http.get(SERVICIO_MODULO_COMERCIAL.organizaciones.clientes.detalle + clienteId);
    }
    ver(clienteId) {
        return this._http.get(SERVICIO_MODULO_COMERCIAL.organizaciones.clientes.editar + clienteId);
    }
    
}
