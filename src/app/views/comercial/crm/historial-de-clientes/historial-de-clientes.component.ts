import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ToastPlugin } from "../../../../plugins/toast.plugin";
declare var $: any;



@Component({
	selector: 'historial-de-clientes',
	templateUrl: 'historial-de-clientes.template.html',
	providers: [
		ToastPlugin
	]

})
export class HistorialClientesComponent implements OnInit {
	// Cabecera de cada Vista
	public links: Array<any>;
	public clientes: Array<any>;
	public listaHistorial: Array<any>;
	constructor(private router: Router, private _toast: ToastPlugin) {

		this.links = [
			{ titulo: 'Historial de Clientes' },
		];

	}
	ngOnInit() {

		this.listaHistorial = [
			{
				id: 1,
				fecha: '10/10/18',
				proceso: 'comercial',
				actividad: 'Visita a Gerencia',
				contacto: 'Jorge Perez',
				empresa: 'Transporte Perez',
				documento: '',
				estado: 'Porgramada'
			},
			{
				id: 2,
				fecha: '05/10/18',
				proceso: 'comercial',
				actividad: 'Llamada a Gerencia',
				contacto: 'Jorge Perez',
				empresa: 'Transporte Perez',
				documento: 'IVV_13491',
				estado: 'Finalizada'
			},
			{
				id: 3,
				fecha: '10/10/18',
				proceso: 'comercial',
				actividad: 'Carta Cobranza',
				contacto: 'Abel Perez',
				empresa: 'Transporte Perez',
				documento: 'CC_134134',
				estado: 'Finalizada'
			},
			{
				id: 4,
				fecha: '02/03/18',
				proceso: 'Cobranza',
				actividad: 'Visita a Cobranzas',
				contacto: 'Abel Perez',
				empresa: 'Transporte Perez',
				documento: 'IVC_134134',
				estado: 'Finalizada'
			}
		]
		this.clientes = [
			{
				id: '0',
				value: 'cliente',
				text: 'cliente'
			},
			{
				id: '1',
				value: 'cliente',
				text: 'cliente'
			}
		]
	}


}
