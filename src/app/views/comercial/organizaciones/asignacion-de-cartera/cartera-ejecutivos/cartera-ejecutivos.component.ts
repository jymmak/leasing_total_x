import { Component, Input, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';
import { Router } from '@angular/router';
import { ToastPlugin } from 'src/app/plugins/toast.plugin';
declare var $: any;



@Component({
    selector: 'cartera-ejecutivos',
    templateUrl: 'cartera-ejecutivos.template.html',
    providers: [
        ToastPlugin
    ]
})
export class CarteraEjecutivosComponent implements OnInit {


    // Cabecera de cada Vista
    public links: Array<any>;
    public listaProveedores: Array<any>;
    public listaClientes: Array<any>;
    public proveedoresEjecutivos:string;



    constructor(private router: Router, private _toast: ToastPlugin) {
        this.links = [
            { titulo: 'Asignacion de Cartera' },

        ];

    }

    ngOnInit() {
        this.proveedoresEjecutivos = "Ejecutivos";
        this.listaProveedores = [
            {
                id: 1,
                proveedor: "Grupo Pana",

            },
            {
                id: 2,
                proveedor: "Toyota",
            },
            {
                id: 3,
                proveedor: "Grupo Pana",
            },
            {
                id: 4,
                proveedor: "Toyota",
            },
            {
                id: 5,
                proveedor: "Grupo Pana",
            },
            {
                id: 6,
                proveedor: "Toyota",
            },
            {
                id: 7,
                proveedor: "Grupo Pana",
            },
            {
                id: 8,
                proveedor: "Toyota",
            },
            {
                id: 9,
                proveedor: "Grupo Pana",
            },
            {
                id: 10,
                proveedor: "Toyota",
            },
            {
                id: 11,
                proveedor: "Grupo Pana",
            },
            {
                id: 12,
                proveedor: "Toyota",
            },

        ]
        this.listaClientes = [
            {
                id: 1,
                proveedor: "Grupo Pana",

            },
            {
                id: 2,
                proveedor: "Toyota",
            },
            {
                id: 3,
                proveedor: "Grupo Pana",
            },
            {
                id: 4,
                proveedor: "Toyota",
            },
            {
                id: 5,
                proveedor: "Grupo Pana",
            },
            {
                id: 6,
                proveedor: "Toyota",
            },
            {
                id: 7,
                proveedor: "Grupo Pana",
            },
            {
                id: 8,
                proveedor: "Toyota",
            },
            {
                id: 9,
                proveedor: "Grupo Pana",
            },
            {
                id: 10,
                proveedor: "Toyota",
            },
            {
                id: 11,
                proveedor: "Grupo Pana",
            },
            {
                id: 12,
                proveedor: "Toyota",
            },
        ]


    }


}
