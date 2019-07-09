import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastPlugin } from "../../../../plugins/toast.plugin";
import { RUTAS_COMERCIAL_OPERACIONES } from 'src/config/rutas-modulos/rutas-comercial';
declare var $: any;



@Component({
	selector: 'page-expediente',
	templateUrl: 'expediente.template.html',
	providers: [
		ToastPlugin
	]

})
export class ExpedienteComponent implements OnInit {
	// Cabecera de cada Vista
	public links: Array<any>;
	public Expediente: Array<any>;
	public selectItem: any;
	public expedienteId: any;
	constructor(private router: Router, private _toast: ToastPlugin, private activatedRoute: ActivatedRoute) {

		this.links = [
			{ titulo: 'Expedientes' },
		];
		this.selectItem = {};

		this.activatedRoute.params.subscribe(params => {
			this.expedienteId = params.codigo;
			});
	}
	ngOnInit(): void {
		this.Expediente = [
			{
				id: 1,
				numExpediente: '20180021',
				cliente: "Ferromotriz S.A.C",
				vafTotal: " $210,500.00",
				estado: 'Generado',
				ubicacion: 'Comercial',
				fApertura: '18/10/2018',
				ultimaAct: "28/10/2018",
				actualizadoPor: "Angel Mendoza",
			},
			{
				id: 2,
				numExpediente: '20180021',
				cliente: "Transilla S.A.C",
				vafTotal: " $110,500.00",
				estado: 'Por Asignar',
				ubicacion: 'Riesgos',
				fApertura: '18/10/2018',
				ultimaAct: "28/10/2018",
				actualizadoPor: "Angel Mendoza",
			},
			{
				id: 3,
				numExpediente: '20180021',
				cliente: "Transporte San Felipe",
				vafTotal: " $95,000.00",
				estado: 'En Evaluacion',
				ubicacion: 'Riesgos',
				fApertura: '18/10/2018',
				ultimaAct: "28/10/2018",
				actualizadoPor: "Angel Mendoza",
			},
			{
				id: 4,
				numExpediente: '20180021',
				cliente: "Transporte Mendez S.A",
				vafTotal: " $63,500.00",
				estado: 'Desistido',
				ubicacion: 'Comercial',
				fApertura: '18/10/2018',
				ultimaAct: "28/10/2018",
				actualizadoPor: "Angel Mendoza",
			},

		];
	}


	select(item) {
		this.selectItem = item;
	}

	trakingExpediente() {
		this.router.navigate([
			RUTAS_COMERCIAL_OPERACIONES.expedientes.trakingExpediente
		]);
	}

	 detallesExpediente() {
	 	this.router.navigate([RUTAS_COMERCIAL_OPERACIONES.expediente +'/'+this.selectItem.numExpediente +'/'+RUTAS_COMERCIAL_OPERACIONES.expedientes.detalle ]);

	}
	DocumentosExpedintes(item) {
		// this.router.navigate([RUTAS_COMERCIAL_OPERACIONES.expediente + '/' + this.expedienteId +'/' + RUTAS_COMERCIAL_OPERACIONES.expedientes.documentos + '1']);	

		this.router.navigate([RUTAS_COMERCIAL_OPERACIONES.expediente + '/' + this.expedienteId +'/' + RUTAS_COMERCIAL_OPERACIONES.expedientes.documentos]);

	  }
}
