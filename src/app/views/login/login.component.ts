import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from "./login.service";
import { ModulosService } from '../modulos/modulos.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'login',
    templateUrl: 'login.template.html',
    providers: [
        LoginService,
        ModulosService
    ]
})

export class loginComponent implements OnInit {
    public formLogin: FormGroup;
    public msjLogin: any;
    constructor(
        private _router: Router,
        private _loginService: LoginService,
        private _modulosService: ModulosService
    ) {
        this.msjLogin = "";
    }
    ngOnInit() {
        this.initForm();
    }
    initForm() {
        this.formLogin = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required, Validators.minLength(6)])
        });

    }
    // agregandoColor() {
    //     if () {

    //     } else {

    //     }
    // }

    login() {
        let data: any = {
            usuario: this.formLogin.get('email').value,
            password: this.formLogin.get('password').value
        };
        this._loginService.login(data).subscribe(
            response => {
                let listas: Array<any> = this._modulosService.menu();
                localStorage.setItem('lista', JSON.stringify(listas[0]));
                this._loginService.dataUser(response);
                // this.lsitMenu(response['modulos'][0].id);

                this._router.navigate(['/comercial/dashboard']);
            },
            error => {
                this.msjLogin = error.error.msg;
                console.log(error);
            },
            () => {
            }
        );
    }
    // lsitMenu(modulo_id) {
    //     this._modulosService.listMenu(modulo_id).subscribe(
    //         response => {
    //             // this._modulosService.dataMenu(response, modulo_id);
    //         },
    //         error => {
    //             console.log(error.error);
    //         }
    //     );

    // }
}
