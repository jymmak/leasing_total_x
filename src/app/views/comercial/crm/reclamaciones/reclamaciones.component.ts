import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ToastPlugin } from "../../../../plugins/toast.plugin";
import { RUTAS_COMERCIAL_CRM } from 'src/config/rutas-modulos/rutas-comercial';
import swal from 'sweetalert2';

declare var $: any;



@Component({
	selector: 'page-reclamaciones',
	templateUrl: 'reclamaciones.template.html',
	providers: [
		ToastPlugin
	]

})
export class ReclamacionesComponent implements OnInit, AfterViewInit, OnDestroy {
	// Cabecera de cada Vista
	public links: Array<any>;
	public pdf: Array<any>;
	public selectItem: any;
	public lstReclamaciones: Array<any>;
	constructor(private router: Router, private _toast: ToastPlugin) {
		this.selectItem = {};
		this.pdf = []
		this.links = [
			{ titulo: 'Lista de Reclamaciones' },
		];

	}

	ngAfterViewInit() {
		$('[data-toggle="tooltip"]').tooltip();
	}
	ngOnDestroy() {
		$('[data-toggle="tooltip"]').tooltip('dispose');
	}

	ngOnInit() {

		this.lstReclamaciones = [
			{
				id: 1,
				fechaReg: '15/08/18',
				numReclamcion: 'REC-2334352',
				reclamante: 'Pedro Perez',
				organizacion: 'Transporte',
				tipo: 'Reclamo',
				motivo: 'Reclamo',
				FechaPlani: 'Error Monto de Cobro',
				estado: 'En Evaluación',
			},
			{
				id: 2,
				fechaReg: '15/08/18',
				numReclamcion: 'REC - 2334364',
				reclamante: 'Jorge Vera',
				organizacion: 'Transportes S',
				tipo: 'Queja',
				motivo: 'Mala Intención',
				FechaPlani: '14/10/18',
				estado: 'Pendiente',
			},
			{
				id: 3,
				fechaReg: '15/08/18',
				numReclamcion: 'REC - 2334352',
				reclamante: 'Pedro Perez',
				organizacion: 'Transportes M',
				tipo: 'Reclamo',
				motivo: 'Error Monto de Cobro',
				FechaPlani: '16/07/18',
				estado: 'En Evaluación',
			},
			{
				id: 4,
				fechaReg: '15/08/18',
				numReclamcion: 'REC-2334352',
				reclamante: 'Pedro Perez',
				organizacion: 'Transporte',
				tipo: 'Reclamo',
				motivo: 'Reclamo',
				FechaPlani: 'Error Monto de Cobro',
				estado: 'En Evaluación',
			},
			{
				id: 5,
				fechaReg: '15/08/18',
				numReclamcion: 'REC - 2334364',
				reclamante: 'Jorge Vera',
				organizacion: 'Transportes S',
				tipo: 'Queja',
				motivo: 'Mala Intención',
				FechaPlani: '14/10/18',
				estado: 'Pendiente',
			},
			{
				id: 6,
				fechaReg: '15/08/18',
				numReclamcion: 'REC-2334352',
				reclamante: 'Pedro Perez',
				organizacion: 'Transporte',
				tipo: 'Reclamo',
				motivo: 'Reclamo',
				FechaPlani: 'Error Monto de Cobro',
				estado: 'En Evaluación',
			},
			{
				id: 7,
				fechaReg: '15/08/18',
				numReclamcion: 'REC - 2334364',
				reclamante: 'Jorge Vera',
				organizacion: 'Transportes S',
				tipo: 'Queja',
				motivo: 'Mala Intención',
				FechaPlani: '14/10/18',
				estado: 'Pendiente',
			},
			{
				id: 8,
				fechaReg: '15/08/18',
				numReclamcion: 'REC-2334352',
				reclamante: 'Pedro Perez',
				organizacion: 'Transporte',
				tipo: 'Reclamo',
				motivo: 'Reclamo',
				FechaPlani: 'Error Monto de Cobro',
				estado: 'En Evaluación',
			},
			{
				id: 9,
				fechaReg: '15/08/18',
				numReclamcion: 'REC - 2334364',
				reclamante: 'Jorge Vera',
				organizacion: 'Transportes S',
				tipo: 'Queja',
				motivo: 'Mala Intención',
				FechaPlani: '14/10/18',
				estado: 'Pendiente',
			},
			{
				id: 10,
				fechaReg: '15/08/18',
				numReclamcion: 'REC-2334352',
				reclamante: 'Pedro Perez',
				organizacion: 'Transporte',
				tipo: 'Reclamo',
				motivo: 'Reclamo',
				FechaPlani: 'Error Monto de Cobro',
				estado: 'En Evaluación',
			},
			{
				id: 11,
				fechaReg: '15/08/18',
				numReclamcion: 'REC - 2334364',
				reclamante: 'Jorge Vera',
				organizacion: 'Transportes S',
				tipo: 'Queja',
				motivo: 'Mala Intención',
				FechaPlani: '14/10/18',
				estado: 'Pendiente',
			},
		]
	}

	busquedaGeneral(filterValue: string) {

	}


	select(item) {

		this.selectItem = item;
		console.log(this.selectItem);


	}

	nuevaReclamacion() {
		let nuevaCondicion = RUTAS_COMERCIAL_CRM.crm.init;
		this.router.navigate([nuevaCondicion + '/' + RUTAS_COMERCIAL_CRM.crm.Reclamciones.nuevo]);

	}

	Responder(event) {
		let responder = ['responder'];

		
		let nuevaCondicion = RUTAS_COMERCIAL_CRM.crm.init;
		this.router.navigate([nuevaCondicion + '/' + this.selectItem.id +'/' + RUTAS_COMERCIAL_CRM.crm.Reclamciones.responder],
			{ queryParams: responder, skipLocationChange: true });

	}

	verPdf(event) {

		this.pdf.push(event);

		let nuevaCondicion = RUTAS_COMERCIAL_CRM.crm.init;
		console.log(nuevaCondicion +  '/' + this.selectItem.id +'/' + RUTAS_COMERCIAL_CRM.crm.Reclamciones.pdf);
		
		this.router.navigate([nuevaCondicion + '/' + this.selectItem.id +'/' + RUTAS_COMERCIAL_CRM.crm.Reclamciones.pdf]
			, { queryParams: this.pdf});

		
	}

	editar() {
		let nuevaCondicion = RUTAS_COMERCIAL_CRM.crm.init;
		this.router.navigate([nuevaCondicion + '/' + RUTAS_COMERCIAL_CRM.crm.Reclamciones.nuevo]);

	}


}
