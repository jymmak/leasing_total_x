import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { ToastPlugin } from "../../../../plugins/toast.plugin";
declare var $: any;



@Component({
	selector: 'proyeccion-de-cierre',
	templateUrl: 'proyeccion-de-cierre.template.html',
	providers: [
		ToastPlugin
	]

})
export class CierreComponent implements OnInit, AfterViewInit {
	// Cabecera de cada Vista
	public links: Array<any>;
	public Expediente: Array<any>;
	public lstSucursalesOne: Array<any>;
	public lstSucursalesTwo: Array<any>;
	public lstSucursalesHeaderOne: Array<any>;
	public lstSucursalesHeader: Array<any>;
	public selectItem: any;
	public percentage: any;
	public percentage2: any;
	public listaBannel: any;
	public proyeccion: boolean = false;

	constructor(private router: Router, private _toast: ToastPlugin) {
		this.selectItem = {};
		this.listaBannel = {};
		this.links = [
			{ titulo: 'Proyección de Cierre' },
		];

	}

	ngAfterViewInit() {
		let calendario = document.getElementById("calendario-principal");
		calendario.remove();
		
		
		console.log("datepicker");
		$('#datepicker').datepicker({
			todayHighlight: true,
			format: "mm-yyyy",
			viewMode: "month",
			minViewMode: "month"
		});
		let elem = document.getElementsByClassName('multi-select Activo')
		console.log(elem);

	}

	ngOnInit() {
		this.listaBannel = {
			fecha: '10/10/2018',
			estimadoAsegurable: '$2,500,530',
			Operacion: '28'

		}

		this.percentage = [
			{ id: 1, value: 'ge', text: "100%" },
			{ id: 2, value: 'ge', text: "75%" },
			{ id: 2, value: 'ge', text: "50%" },
			{ id: 2, value: 'ge', text: "25%" },
			{ id: 2, value: 'ge', text: "5%" },

		];
		this.percentage2 = [
			{ id: 1, value: 'ge', text: "0%" },
			{ id: 2, value: 'ge', text: "25%" },
			{ id: 2, value: 'ge', text: "50%" },
			{ id: 2, value: 'ge', text: "75%" },
			{ id: 2, value: 'ge', text: "100%" },

		];

		this.Expediente = [
			{
				id: 1,
				total: 'Total',
				nOp1: "82",
				cerradas: " $12,200,100",
				nOp2: '31',
				enCierre: '$12,200,100',
				nOp3: '31',
				porAprovar: '$12,200,100',
				nOp4: '31',
				enEvaluacion: '$12,200,100',
				nOp5: '31',
				proyeccionCierre: '$12,200,100',
			},


		];

		this.lstSucursalesOne = [
			{
				id: 1,
				lima: 'j. Rosada',
				nOp1: '6',
				cerradas: '$5,200,100',
				nOp2: '6',
				enCierre: '$5,200,100',
				nOp3: '6',
				porAprovar: '$5,200,100',
				nOp4: '6',
				enEvaluacion: '$5,200,100',
				nOp5: '6',
				proyeccionCierre: '$5,200,100',

			},
			{
				id: 2,
				lima: 'A Dri',
				nOp1: '5',
				cerradas: '$1,700,100',
				nOp2: '5',
				enCierre: '$1,700,100',
				nOp3: '5',
				porAprovar: '$1,700,100',
				nOp4: '5',
				enEvaluacion: '$1,700,100',
				nOp5: '5',
				proyeccionCierre:  '$1,700,100',

			},
			{
				id: 3,
				lima: 'M. Recavar',
				nOp1: '6',
				cerradas: '$8,100',
				nOp2: '6',
				enCierre: '$8,100',
				nOp3: '6',
				porAprovar: '$8,100',
				nOp4: '6',
				enEvaluacion: '$8,100',
				nOp5: '6',
				proyeccionCierre:  '$8,100',

			},
			{
				id: 4,
				lima: 'P. Soto',
				nOp1: '9',
				cerradas: '$500,100',
				nOp2: '9',
				enCierre: '$500,100',
				nOp3: '9',
				porAprovar: '$500,100',
				nOp4: '9',
				enEvaluacion: '$500,100',
				nOp5: '9',
				proyeccionCierre:'$500,100',


			},


		];

		this.lstSucursalesHeaderOne = [
			{
				id: 1,
				sucursales: 'Lima',
				nOp1: '56',
				cerradas: '$9,700,100',
				nOp2: '56',
				enCierre: '$9,700,100',
				nOp3: '56',
				porAprovar: ' $9,700,100',
				nOp4: '56',
				enEvaluacion: ' $9,700,100',
				nOp5: '56',
				proyeccionCierre: ' $9,700,100',

			},
		];

		this.lstSucursalesHeader = [
			{
				id: 2,
				sucursales: 'Piura',
				nOp1: '3',
				cerradas: '$350,100',
				nOp2: '3',
				enCierre: '$350,100',
				nOp3: '3',
				porAprovar: '$350,100',
				nOp4: '3',
				enEvaluacion: '$350,100',
				nOp5: '3',
				proyeccionCierre:  '$350,100',
			},

		];

		this.lstSucursalesTwo = [
			{
				id: 1,
				lima: 'C. Muñoz',
				nOp1: '3',
				cerradas: '$350,100',
				nOp2: '3',
				enCierre:  '$350,100',
				nOp3: '3',
				porAprovar:  '$350,100',
				nOp4: '3',
				enEvaluacion:  '$350,100',
				nOp5: '56',
				proyeccionCierre: '$350,100',

			},
		];

	}


	select(item) {

		this.selectItem = item;

	}

	selectedContactos(event){
		console.log(event);
		this.proyeccion = true
		
	}
}

