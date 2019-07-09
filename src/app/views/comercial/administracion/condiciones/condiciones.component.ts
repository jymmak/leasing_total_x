import { Component, OnInit} from '@angular/core';
import { ToastPlugin } from "../../../../plugins/toast.plugin";
import { Router } from '@angular/router';
import { RUTAS_COMERCIAL_ADMINISTRACION } from 'src/config/rutas-modulos/rutas-comercial';


@Component({
    selector: 'page-condiciones',
    templateUrl: 'condiciones.template.html',
    providers: [
        ToastPlugin
    ]
})
export class CondicionesComponent implements OnInit{
    // Cabecera de cada Vista
    public links: Array<any>;
    public listaCondicion: Array<any>;
   
   
    constructor(private router: Router, private _toast: ToastPlugin) {
        this.links = [
            { titulo: 'Manteniento de Condiciones de Financiamiento' },

        ];
    }
    ngOnInit() {
		this.listaCondicion = [
			{
				id: 1,
				perfil: "Gerente Comercial",
				teaMin: "8%",
				teaMax: "22%",
				plazoMin: 24,
				plazoMax: 60,
				inicialMin: "0%",
				inicialMax: '50 %',
				graciaMin: 0,
				graciaMax: 5
			},

			{
				id: 2,
				perfil: " Comercial Controlled",
				teaMin: "8%",
				teaMax: "22%",
				plazoMin: 24,
				plazoMax: 60,
				inicialMin: "0%",
				inicialMax: '50 %',
				graciaMin: 0,
				graciaMax: 5
			},

			{
				id: 3,
                perfil: "Oficial Senior ",
				teaMin: "8%",
				teaMax: "22%",
				plazoMin: 24,
				plazoMax: 60,
				inicialMin: "0%",
				inicialMax: '50 %',
				graciaMin: 0,
				graciaMax: 5
			},

			{
				id: 4,
                perfil: "Oficial Junior ",
				teaMin: "8%",
				teaMax: "22%",
				plazoMin: 24,
				plazoMax: 60,
				inicialMin: "0%",
				inicialMax: '50 %',
				graciaMin: 0,
				graciaMax: 5
			},


		];
	}
    nuevaCondicion(){
        let nuevaCondicion = RUTAS_COMERCIAL_ADMINISTRACION.administracion.init;
        this.router.navigate([nuevaCondicion + '/' + RUTAS_COMERCIAL_ADMINISTRACION.administracion.condiciones.condicion + '/' + RUTAS_COMERCIAL_ADMINISTRACION.administracion.condiciones.nuevo]);
        

    }
}
