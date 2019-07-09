import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastPlugin } from "../../../../plugins/toast.plugin";
import { RUTAS_COMERCIAL_ADMINISTRACION, RUTAS_COMERCIAL_CRM } from 'src/config/rutas-modulos/rutas-comercial';
declare var $: any;



@Component({
	selector: 'page-contactos',
	templateUrl: 'contactos.template.html',
	providers: [
		ToastPlugin
	]

})
export class ContactosComponent implements OnInit {
	// Cabecera de cada Vista
	public links: Array<any>;
	public listaContactos: Array<any>;
	public empresa: Array<any>;
	constructor(private router: Router, private _toast: ToastPlugin) {

		this.links = [
			{ titulo: 'Contactos' },
		];

	}
	ngOnInit() {
		this.listaContactos = [
			{
				id: 1,
				nombres: "Jorge luis",
				apellidos: "Perez Nova",
				empresas: "Transporte Perez",
				email: "jorgeperez@transporteperez.com",
				telefono: 42345545,
				celular: '912 293 294',
				fechaNacimiento: '04/05/58',

			},

			{
				id: 2,
				nombres: "Abel Alexis",
				apellidos: "Perez Díaz",
				empresas: "Transporte Perez",
				email: "jorgeperez@transporteperez.com",
				telefono: 42345545,
				celular: "923 451 123",
				fechaNacimiento: '01/02/98',
			},

			{
				id: 3,
				nombres: "Luis Jorge",
				apellidos: "Perez Nova",
				empresas: "Transporte Perez",
				email: "jorgeperez@transporteperez.com",
				telefono: 42345545,
				celular: "912 293 294",
				fechaNacimiento: '01/02/98',
			},




		];
		this.empresa = [
			{ id: '0', value: 'cliente', text: 'cliente' },
			{ id: '1', value: 'cliente', text: 'cliente' }
		]
	}
	nuevaCondicion() {
		let nuevaCondicion = RUTAS_COMERCIAL_CRM.crm.init;
		this.router.navigate([nuevaCondicion + '/' +  RUTAS_COMERCIAL_CRM.crm.contactos.nuevo]);

	}
}
