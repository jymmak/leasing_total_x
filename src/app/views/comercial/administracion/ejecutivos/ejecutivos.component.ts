import {AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { ToastPlugin } from "../../../../plugins/toast.plugin";
import { Router } from '@angular/router';
declare var $: any;

@Component({
    selector: 'ejecutivos',
    templateUrl: 'ejecutivos.template.html',
    providers: [
        ToastPlugin
    ]
})
export class MantEjecutivosComponent  {
    // Cabecera de cada Vista
    public links: Array<any>;
    public listaEjecutivos: Array<any>;
   
    constructor(private router: Router, private _toast: ToastPlugin) {
        this.links = [
            { titulo: 'Mantenimiento de Ejecutivos' },

        ];
    }

    ngOnInit() {
        this.list();
        this.listaEjecutivos = [
			{
				Id: 1,
				Nombres: "Jorge Carlos",
				Apellidos: "Rosado Velarde",
				Cargo: "Gerente Comercial",
				Sucursal: "Lima",
				cuotaDiciembre: '$ 200,00'
			},

			{
				Id: 2,
				Nombres: "María Isabel",
				Apellidos: "Méndez Guitierrez",
				Cargo: "Oficial  Senior",
				Sucursal: "Lima",
				cuotaDiciembre: '$ 200,00'
				
			},

			{
				Id: 3,
				Nombres: "Pedro Miguel",
				Apellidos: "Soto Mejía",
				Cargo: "Oficial  Senior",
				Sucursal: "Arequipa",	
				cuotaDiciembre: '$ 200,00'			
			},


		

		];
	
	}
	
    list() {
      
    }

    applyFilter(filterValue: string) {
       
    }
   
	
	editarEjecutivo() {
		// user.ruc
		this.router.navigate(['/comercial/administracion/ejecutivos/editar-ejec']);
	}
}
