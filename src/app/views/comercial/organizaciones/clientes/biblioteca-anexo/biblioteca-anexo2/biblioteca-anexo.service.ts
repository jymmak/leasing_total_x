import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SERVICIO_MODULO_COMERCIAL } from 'src/config/services';
import { LoginService } from 'src/app/views/login/login.service';
@Injectable()
export class BibliotecaanexoService {
    constructor(private _http: HttpClient, private loginService: LoginService) {
    }
    listarBibliotecas(data) {
        return this._http.post(SERVICIO_MODULO_COMERCIAL.organizaciones.cliente_bibliotecas.listar, data);
    }
    uploadFile(formData) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response)
                    }
                }
            }
            xhr.open('POST', SERVICIO_MODULO_COMERCIAL.organizaciones.cliente_bibliotecas.nuevo, true);
            xhr.setRequestHeader('Authorization', 'Bearer ' + atob(atob(atob(this.loginService.getdataUser().access_token))));
            xhr.send(formData);
        });
    }
    listarTipoDocumento() {
        return this._http.get(SERVICIO_MODULO_COMERCIAL.util.listarTipoDocumento);

    }
}
