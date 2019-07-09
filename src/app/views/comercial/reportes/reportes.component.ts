import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastPlugin } from "../../../plugins/toast.plugin";
import { RUTAS_COMERCIAL_CRM, RUTAS_COMERCIAL_REPORTES } from 'src/config/rutas-modulos/rutas-comercial';


@Component({
    selector: 'page-reportes',
    templateUrl: 'reportes.template.html',
    providers: [
        ToastPlugin
    ]
})
export class ReportesComponent implements AfterViewInit {

    // Cabecera de cada Vista
    public links: Array<any>;
    ngAfterViewInit() {


    }
    constructor(private router: Router, private _toast: ToastPlugin) {
        this.links = [
            { titulo: 'Generación de Reportes Comerciales' },

        ];



    }


    Ejecutar(){
        let nuevaCondicion = RUTAS_COMERCIAL_REPORTES.reportes.init;
		this.router.navigate([nuevaCondicion + '/' +  RUTAS_COMERCIAL_REPORTES.reportes.ejecutar]);


    }



}
