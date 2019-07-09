import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Http, Response, Headers } from "@angular/http";
@Injectable()
export class ConsultaRucService {
    public headers;

    constructor(private _http: HttpClient) {
        this.headers = new HttpHeaders({
            'Content-type': 'application/json',
            'Authorization': 'Bearer IxCU6yo9Tx9zhTdoWEjdbUKTLeygCfXxgLqWpaD0'
        });
    }

    consultaSunat(ruc: any) {
        let data = {
            ruc: ruc
        };
        return this._http.post('https://tecactus.com/api/sunat/query/ruc', data, { headers: this.headers });
    }
}
