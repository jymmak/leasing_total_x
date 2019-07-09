import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import swal from 'sweetalert2';
import { ToastPlugin } from "../../../../plugins/toast.plugin";
import { Router } from '@angular/router';
declare var $: any;

@Component({
	selector: 'check-list',
	templateUrl: 'checklist.template.html',
	providers: [
		ToastPlugin
	]
})
export class CheckListComponent implements OnInit {

	// Cabecera de cada Vista
	public links: Array<any>;
	public Expediente: Array<any>;
	public selectItem: any;
	public documentosFinancieros: any;
	public documentosLegales: any;
	public static: boolean = true;
	public editar: boolean = false;

	
	constructor(private router: Router, private _toast: ToastPlugin) {
		this.links = [
			{ titulo: 'Detalle de Checklist Comercial' },

		];
		this.selectItem = {};
		
	}
	ngOnInit(): void {
		this.documentosFinancieros = "Documentos Financieros";
		this.documentosLegales = "Documentos Legales";
		this.Expediente = [
			{
				id: 1,
				exped: 'PDT 2019',
				priori: 'P',
				expedLegal: 'Documentos',
				prioriLegal: 'P',

			},
			{
				id: 2,
				exped: 'PDT 2019',
				priori: 'P',
				expedLegal: 'Copia Literal',
				prioriLegal: 'P',

			},
			{
				id: 3,
				exped: 'PDT 2019',
				priori: 'NP',
				expedLegal: 'Ficha RUC',
				prioriLegal: 'NP',

			},
			{
				id: 4,
				exped: 'PDT 2019',
				priori: 'NP',
				expedLegal: 'Copia Literal',
				prioriLegal: 'NP',

			},
			{
				id: 5,
				exped: 'PDT 2019',
				priori: 'NP',
				expedLegal: 'Ficha RUC',
				prioriLegal: 'NP',

			},


		];
	}

	applyFilter(filterValue: string) {

	}
	editarDetalle() {
		this.static = false;
		this.editar = true;

	}
	cancelar() {
		this.static = true;
		this.editar = false;
       
	}
	guardar() {
        swal({
            title: '¿Está seguro de guardar el detalle de checklist?',
            text: "",
            showCancelButton: true,
            reverseButtons: true,
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar',
            allowOutsideClick: false,
            allowEscapeKey: false,
            focusConfirm: false,
            focusCancel: false
        }).then((result) => {
            if (result.value) {
				this.static = true;
				this.editar = false;
			
            }
        });
    }

}
