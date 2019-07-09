import { Component, Input, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ToastPlugin } from "../../../../plugins/toast.plugin";
import { Router } from '@angular/router';


@Component({
    selector: 'page-administar-cartera',
    templateUrl: 'asignacion-de-cartera.template.html',
    providers: [
        ToastPlugin
    ]
})
export class CarteraComponent implements OnInit {
    // Cabecera de cada Vista
    public links: Array<any>;
    public provedoresEjecutivos: string;
    public provedoresAsignados: string;
    public provedoresSinAsignar: string;
    public ProvedoresSinAsignar: Array<any>;
    public lstProveedoresAsigandos: Array<any>;
    public lstContacto: any;
    public contactoPrincipal: string;
    public ProvedorAsignado: string;
    public EjecutivoAsignado: string;
    public tabAsignarProvedores: boolean = true
    public nombreContacto: string;
    public MarcaVehiculo: string;
    public EjecutivosPorAsignar: boolean = true;
    public EjecutivosPorAsignados: boolean = false;
    public selectEjecutivos: boolean = true;
    public selectProvedores: boolean = false;
    public cartera: boolean = true;
    @ViewChild('jpg') jpgGoogle: ElementRef;
    constructor(private router: Router, private _toast: ToastPlugin) {
        this.links = [
            { titulo: 'Asignacion de Cartera' },

        ];
    }
    ngAfterViewInit() {
        
    }
    ngOnInit() {

        this.lstProveedoresAsigandos = [
            {
                marca: 'Toyota',
            }
        ];
        this.provedoresSinAsignar = "Proveedores sin Asignar";
        this.provedoresAsignados = "ProveedoresAsignados a";
        this.provedoresEjecutivos = "Ejecutivos ";
        this.contactoPrincipal = "Grupo Pana";
        this.MarcaVehiculo = "Toyota";

        this.lstContacto = {
            contacto1: ' Andres Gutierrez',
            contacto2: ' Jose  Montoya',
            contacto3: ' Juan Galindo',
            contacto4: ' Mario Azcona',
            contacto5: ' Jose Aguilar',
            contacto6: ' Adriana Paredez',
            contacto7: ' Cristina Diaz',
            contacto8: ' Ana Mantellini',
            contacto9: ' Carlos Polos',
            contacto10: ' Hugo Miranda',

        };
    }


    VerProvedoresAsignados(event) {
        console.log(event);
        this.nombreContacto = event;
        this.EjecutivosPorAsignar = false;
        this.EjecutivosPorAsignados = true;
        this.selectEjecutivos = false;
        this.selectProvedores = true;
        this.cartera = false;
    }

    tableprovedoresAsignados() {
        this.EjecutivosPorAsignar = true;
        this.EjecutivosPorAsignados = false;
        this.selectEjecutivos = true;
        this.selectProvedores = false;
        this.cartera = true;
    }

    asignarProvedor(event) {
        console.log(event);
        this.ProvedorAsignado = event;
    }


    asignarContacto(event) {
        console.log(event.id);
        this.EjecutivoAsignado = event;
        if (this.EjecutivoAsignado !== "" && this.provedoresAsignados !== "") {
            $("#btnAplicar").removeAttr("disabled");
            $(".cronogramadisable").removeClass("cronogramadisable").addClass("cronogramaactive");

        } else {
            $(".btn-rounded").removeClass("btnAplicar");
        }
    }

    guardarEjecutivo() {
        //      this.EjecutivoAsignado;
        //     this.provedoresAsignados;
    }
    proveedores() {
        this.router.navigate(['/comercial/organizaciones/asignacion-de-cartera']);

    }
    asiganarCliente() {
        this.router.navigate(['/comercial/organizaciones/asignacion-de-cartera/asignar-cliente']);

    }

    carteraProveedores() {
        this.router.navigate(['/comercial/organizaciones/asignacion-de-cartera/cartera-proveedores']);


    }
    carteraClientes() {
        this.router.navigate(['/comercial/organizaciones/asignacion-de-cartera/cartera-cliente']);


    }


}
