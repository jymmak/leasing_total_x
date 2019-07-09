import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SERVICIO_SEGURIDAD } from '../../../config/services';
@Injectable()
export class LoginService {
  constructor(private _http: HttpClient) {
  }
  logout() {
    localStorage.clear();
  }
  isLogin() {
    console.log(this.getdataUser());
    if (this.getdataUser() != null && this.getdataUser().access_token) {
      return true;
    }
    return false;
  }
  login(data) {
    data.tipo_acceso = "web";
    return this._http.post(SERVICIO_SEGURIDAD.login, data);
  }
  dataUser(data) {
    data.access_token = btoa(btoa(btoa(data.access_token))) ;
    localStorage.setItem('data_user', JSON.stringify(data));
  }
  getdataUser() {
    return JSON.parse(localStorage.getItem('data_user'));
  }



}
