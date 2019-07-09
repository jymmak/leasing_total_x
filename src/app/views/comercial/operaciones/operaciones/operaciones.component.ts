import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastPlugin } from "../../../../plugins/toast.plugin";
import { RUTAS_COMERCIAL_OPERACIONES } from 'src/config/rutas-modulos/rutas-comercial';
declare var $: any;



@Component({
	selector: 'page-operaciones',
	templateUrl: 'operaciones.template.html',
	providers: [
		ToastPlugin
	]

})
export class ListaOperacionesComponent implements OnInit {
	// Cabecera de cada Vista
	public active: boolean;
	public links: Array<any>;
	public lstOperaciones: Array<any>;
	public selectItem: any;
	public mostrarAvanzada: boolean = false;
	public expedienteId: any;

	constructor(private router: Router, private _toast: ToastPlugin, private activatedRoute: ActivatedRoute) {
		this.active = false;
		this.links = [
			{ titulo: 'Operaciones' },
		];
		this.selectItem = {};
		this.activatedRoute.params.subscribe(params => {
			this.expedienteId = params.codigo;
		});
	}




	ngOnInit() {
		this.lstOperaciones = [
			{
				id: 1,
				fecha: '19/09/2018',
				operacion: 'Ope - 2404',
				cliente: 'Transcont EIRL',
				estado: ' Cotizada',
				intancia: 'Comercial',
				cantidad: '1 ',
				bien: 'Volquete ',
				vaf: '$ 118,500.23',
				tea: '14%',

			},
			{
				id: 2,
				fecha: '19/09/2018',
				operacion: 'Ope - 2405',
				cliente: 'Eminent SAC',
				estado: 'En Evaluacion',
				intancia: 'Riesgos Admin',
				cantidad: '1 ',
				bien: 'Remolcador ',
				vaf: '$ 111,200.23',
				tea: '13%',

			},
			{
				id: 3,
				fecha: '19/09/2018',
				operacion: 'Ope - 2406',
				cliente: 'Transcont EIRL',
				estado: ' Cotizada',
				intancia: 'Comercial',
				cantidad: '1 ',
				bien: 'Volquete ',
				vaf: '$ 118,500.23',
				tea: '14%',

			},
			{
				id: 4,
				fecha: '19/09/2018',
				operacion: 'Ope - 2405',
				cliente: 'Eminent SAC',
				estado: 'En Evaluacion',
				intancia: 'Riesgos Admin',
				cantidad: '1 ',
				bien: 'Remolcador ',
				vaf: '$ 111,200.23',
				tea: '13%',

			},
			{
				id: 5,
				fecha: '19/09/2018',
				operacion: 'Ope - 2408',
				cliente: 'Transcont EIRL',
				estado: ' Cotizada',
				intancia: 'Comercial',
				cantidad: '1 ',
				bien: 'Volquete ',
				vaf: '$ 118,500.23',
				tea: '14%',

			},
			{
				id: 6,
				fecha: '19/09/2018',
				operacion: 'Ope - 2409',
				cliente: 'Eminent SAC',
				estado: ' Cotizada',
				intancia: 'Comercial',
				cantidad: '1 ',
				bien: 'Volquete ',
				vaf: '$ 118,500.23',
				tea: '14%',

			},
			{
				id: 7,
				fecha: '19/09/2018',
				operacion: 'Ope - 2405',
				cliente: 'Eminent SAC',
				estado: 'En Evaluacion',
				intancia: 'Riesgos Admin',
				cantidad: '1 ',
				bien: 'Remolcador ',
				vaf: '$ 111,200.23',
				tea: '13%',

			},
			{
				id: 8,
				fecha: '19/09/2018',
				operacion: 'Ope - 2412',
				cliente: 'Transcont EIRL',
				estado: ' Cotizada',
				intancia: 'Comercial',
				cantidad: '1 ',
				bien: 'Volquete ',
				vaf: '$ 118,500.23',
				tea: '14%',

			},
			{
				id: 9,
				fecha: '19/09/2018',
				operacion: 'Ope - 2405',
				cliente: 'Eminent SAC',
				estado: 'En Evaluacion',
				intancia: 'Riesgos Admin',
				cantidad: '1 ',
				bien: 'Remolcador ',
				vaf: '$ 111,200.23',
				tea: '13%',

			},

		]

	}

	select(item) {
		this.selectItem = item;
	}


	detallesOperaciones() {
		console.log(RUTAS_COMERCIAL_OPERACIONES.Operaciones.init + '/' + RUTAS_COMERCIAL_OPERACIONES.Operaciones.detalles);

		this.router.navigate([RUTAS_COMERCIAL_OPERACIONES.Operaciones.init + '/' + RUTAS_COMERCIAL_OPERACIONES.Operaciones.detalles]);

	}
}
