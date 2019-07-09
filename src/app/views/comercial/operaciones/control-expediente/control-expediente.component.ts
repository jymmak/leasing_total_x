import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastPlugin } from "../../../../plugins/toast.plugin";
declare var $: any;



@Component({
	selector: 'control-expediente',
	templateUrl: 'control-expediente.template.html',
	providers: [
		ToastPlugin
	]

})
export class ControlExpedienteComponent implements OnInit  {
	// Cabecera de cada Vista
	public links: Array<any>;
	public controlExpediente: Array<any>;
	public selectItem: any;
	
	constructor(private router: Router, private _toast: ToastPlugin) {
		this.selectItem = {};
		this.links = [
			{ titulo:'  Expediente' },
		];

	}

	ngOnInit(): void {

		let calendario = document.getElementById("calendario-principal");
		calendario.remove();
		
		this.controlExpediente = [
			{
				id: 1,
				numExpediente: '20180021',
				vafTotal: " $210,500.00",
				analista: 'Tatiana Rivas',
				fechaRecepcion: '18/10/2018 10:30am',
				fechaAsignacion: '18/10/2018  11:00am',
				tiempoAsignacion: '0.5 Horas',
				fechaEvaluacion: '19/10/2018  11:00am',
				tiempoEvaluacion: "8 Horas",
				fechaCierreEvaluacion: '19/10/2018  9:30am',
				tiempoCierreEvaluacion: "3 Horas",
			},
			{
				id: 2,
				numExpediente: '20180021',
				vafTotal: " $110,500.00",
				analista: 'Valeria Urteaga',
				fechaRecepcion: '18/10/2018 10:30am',
				fechaAsignacion: '18/10/2018  11:00am',
				tiempoAsignacion: '0.5 Horas',
				fechaEvaluacion: '19/10/2018  11:00am',
				tiempoEvaluacion: "8 Horas",
				fechaCierreEvaluacion: '19/10/2018  9:30am',
				tiempoCierreEvaluacion: "3 Horas",
			},
			{
				id: 3,
				numExpediente: '20180021',
				vafTotal: " $210,500.00",
				analista: 'Valeria Urteaga',
				fechaRecepcion: '18/10/2018 10:30am',
				fechaAsignacion: '18/10/2018  11:00am',
				tiempoAsignacion: '0.5 Horas',
				fechaEvaluacion: '19/10/2018  11:00am',
				tiempoEvaluacion: "8 Horas",
				fechaCierreEvaluacion: '19/10/2018  9:30am',
				tiempoCierreEvaluacion: "3 Horas",
			},
			{
				id: 4,
				numExpediente: '20180021',
				vafTotal: " $210,500.00",
				analista: 'Valeria Urteaga',
				fechaRecepcion: '18/10/2018 10:30am',
				fechaAsignacion: '18/10/2018  11:00am',
				tiempoAsignacion: '0.5 Horas',
				fechaEvaluacion: '19/10/2018  11:00am',
				tiempoEvaluacion: "8 Horas",
				fechaCierreEvaluacion: '19/10/2018  9:30am',
				tiempoCierreEvaluacion: "3 Horas",
			},

		];
	}

	select(item) {
		this.selectItem = item;
	}



}
