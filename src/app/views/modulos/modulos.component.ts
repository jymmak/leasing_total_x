import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModulosService } from "./modulos.service";
declare var $: any;

@Component({
    selector: 'modulos',
    templateUrl: 'modulos.template.html',
    providers: [
        ModulosService
    ]
})
export class ModulosComponent implements OnInit, AfterViewInit {
    // Cabecera de cada Vista
    public links: Array<any>;
    public href: string = "";
    constructor(private router: Router, private _modulosService: ModulosService) {
        this.links = [
            { titulo: 'Módulos' },

        ];
    }
    ngOnInit() {
        console.log(JSON.parse(localStorage.getItem('usuario')));
        // this.href = this.router.url;
        // console.log(this.router.url);
        console.log("lista menu");

    }
    main() {
        // this.router.navigate(['/comercial/dashboard']),
        //     this.router.navigate(['/mantenimiento/adm-cotizacion'])

    }
    validaPerfil(perfil: any = "") {
        let usuario: any = JSON.parse(localStorage.getItem('usuario'));
        if (usuario.perfil === 'administrador') {
            return true;
        }
        if (usuario.perfil === perfil) {
            return true;
        }

        return false;

    }
    modulos(id) {
        let listas: Array<any> = this._modulosService.menu();
        let lista: any = {};
        listas.forEach((value, index) => {
            if (value.id === id) {
                lista = value;
            }
        });
        console.log(lista, id);
        localStorage.setItem('lista', JSON.stringify(lista));
        this.router.navigate(['/' + lista.url + '/dashboard']);
    }

    ngAfterViewInit() {

        $('.related-news').slimscroll({
            height: '450px',
            width: '100%',
            railVisible: true,
            alwaysVisible: true,
            wheelStep: 10
          });
    }
}