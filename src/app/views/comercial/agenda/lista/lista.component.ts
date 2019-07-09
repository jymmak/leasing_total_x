import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastPlugin } from "../../../../plugins/toast.plugin";
import swal from 'sweetalert2';
import { RUTAS_COMERCIAL_AGENDA } from 'src/config/rutas-modulos/rutas-comercial';
import { AgendaComponent } from '../agenda.component';
// import { RUTAS_COMERCIAL_COTIZACIONES } from 'src/config/rutas-modulos/rutas-comercial';
declare var $: any;

@Component({
	selector: 'lista',
	templateUrl: 'lista.template.html',

	providers: [
		ToastPlugin
	]
})
export class ListaComponent implements AfterViewInit, OnInit{
	public selectItem: any;
	public listaTareas: Array<any>;
	public links: Array<any>;
	constructor(private router: Router) {
		this.selectItem = {};
		this.links = [
			{ titulo: 'Lista de Tareas' },
		];

	}
	ngAfterViewInit() {
		$('[data-toggle="tooltip"]').tooltip();
	}
	ngOnDestroy() {
		$('[data-toggle="tooltip"]').tooltip('dispose');
	}
	ngOnInit() {



		this.listaTareas = [
			{
				id: 1,
				categoria: "Visita",
				asunto: "Visita a Transportes Móvil",
				empresa: "Transportes Móvil",
				fechaHora: "25/10/2018 10:30 -11:00 am",
				prioridad: "Alta",
			},

			{
				id: 2,
				categoria: "Llamada",
				asunto: "Llamar a Grupo Pana",
				empresa: "Grupo Pana",
				fechaHora: "25/10/2018 12:30 -1:00 pm",
				prioridad: "Media",
			},

			{
				id: 3,
				categoria: "Correo",
				asunto: "Enviar Correo",
				empresa: "Transportes Móvil",
				fechaHora: "25/10/2018 10:30 -11:00 am",
				prioridad: "Baja",
			},

			{
				id: 4,
				categoria: "Reunión",
				asunto: "Reunión con el Sr. José Mendez",
				empresa: "Grupo Pana",
				fechaHora: "25/10/2018 10:30 -11:00 am",
				prioridad: "Media",
			},

			{
				id: 5,
				categoria: "Evento",
				asunto: "Fiesta de Inaguración",
				empresa: "Transportes Móvil",
				fechaHora: "25/10/2018 10:30 -11:00 am",
				prioridad: "Alta",
			},

			{
				id: 6,
				categoria: "Llamada",
				asunto: "Llamar a Grupo Pana",
				empresa: "TGrupo Pana",
				fechaHora: "25/10/2018 12:30 -1:00 pm",
				prioridad: "Media",
			},

			{
				id: 7,
				categoria: "Reunión",
				asunto: "Reunión con Sra Andrea Gutierrez",
				empresa: "Transportes Móvil",
				fechaHora: "25/10/2018 10:30 -11:00 am",
				prioridad: "Alta",
			},

			{
				id: 8,
				categoria: "Visita",
				asunto: "Visita a Grupo Pana",
				empresa: "Grupo Pana",
				fechaHora: "25/10/2018 12:30 -1:00 pm",
				prioridad: "Alta",
			},

			{
				id: 9,
				categoria: "Visita",
				asunto: "Visita a Transportes Móvil",
				empresa: "Transportes Móvil",
				fechaHora: "25/10/2018 10:30 -11:00 am",
				prioridad: "Alta",
			},
			{
				id: 10,
				categoria: "Correo",
				asunto: "Enviar Correo",
				empresa: "Grupo Pana",
				fechaHora: "25/10/2018 12:30 -1:00 pm",
				prioridad: "Media",
			},

		];
	}


	eliminar() {
		swal({
			title: '¿Está seguro de eliminar la cotización?',
			text: "",
			showCancelButton: true,
			reverseButtons: true,
			cancelButtonClass: "mat-raised-button mat-primary",
			confirmButtonClass: "mat-raised-button mat-primary",
			confirmButtonText: 'Aceptar',
			cancelButtonText: 'Cancelar',
			allowOutsideClick: false,
			allowEscapeKey: false,
			focusConfirm: false,
			focusCancel: false
		}).then((result) => {
			if (result.value) {
				this.selectItem = {};
			}
		});
	}
	editar(){
		this.router.navigate([RUTAS_COMERCIAL_AGENDA.agenda.init + '/' +this.selectItem.id+ '/' + RUTAS_COMERCIAL_AGENDA.agenda.editar]);
	}

	verPdf() {
		let agenda = RUTAS_COMERCIAL_AGENDA.agenda;

		this.router.navigate([agenda.lista +'/'+   this.selectItem.id+'/'+ agenda.informe]);

	}
	calendar() {
		this.router.navigate([RUTAS_COMERCIAL_AGENDA.agenda.init]);
	}
	btnNuevo() {
		this.router.navigate([RUTAS_COMERCIAL_AGENDA.agenda.agregarActividad]);
	}
	scrolled() {
		let id = this.listaTareas.length;
		let listado = [
			{
				id: id + 1,
				categoria: "Visita",
				asunto: "Visita a Transportes Móvil",
				empresa: "Transportes Móvil",
				fechaHora: "25/10/2018 10:30 -11:00 am",
				prioridad: "Alta",
			},

			{
				id: id + 2,
				categoria: "Llamada",
				asunto: "Llamar a Grupo Pana",
				empresa: "Grupo Pana",
				fechaHora: "25/10/2018 12:30 -1:00 pm",
				prioridad: "Media",
			},

			{
				id: id + 3,
				categoria: "Correo",
				asunto: "Enviar Correo",
				empresa: "Transportes Móvil",
				fechaHora: "25/10/2018 10:30 -11:00 am",
				prioridad: "Baja",
			},

			{
				id: id + 4,
				categoria: "Reunión",
				asunto: "Reunión con el Sr. José Mendez",
				empresa: "Grupo Pana",
				fechaHora: "25/10/2018 10:30 -11:00 am",
				prioridad: "Media",
			},

			{
				id: id + 5,
				categoria: "Evento",
				asunto: "Fiesta de Inaguración",
				empresa: "Transportes Móvil",
				fechaHora: "25/10/2018 10:30 -11:00 am",
				prioridad: "Alta",
			},

			{
				id: id + 6,
				categoria: "Llamada",
				asunto: "Llamar a Grupo Pana",
				empresa: "TGrupo Pana",
				fechaHora: "25/10/2018 12:30 -1:00 pm",
				prioridad: "Media",
			},

			{
				id: id + 7,
				categoria: "Reunión",
				asunto: "Reunión con Sra Andrea Gutierrez",
				empresa: "Transportes Móvil",
				fechaHora: "25/10/2018 10:30 -11:00 am",
				prioridad: "Alta",
			},

			{
				id: id + 8,
				categoria: "Visita",
				asunto: "Visita a Grupo Pana",
				empresa: "Grupo Pana",
				fechaHora: "25/10/2018 12:30 -1:00 pm",
				prioridad: "Alta",
			},

			{
				id: id + 9,
				categoria: "Visita",
				asunto: "Visita a Transportes Móvil",
				empresa: "Transportes Móvil",
				fechaHora: "25/10/2018 10:30 -11:00 am",
				prioridad: "Alta",
			},
			{
				id: id + 10,
				categoria: "Correo",
				asunto: "Enviar Correo",
				empresa: "Grupo Pana",
				fechaHora: "25/10/2018 12:30 -1:00 pm",
				prioridad: "Media",
			},

		];
		if (id <= 100) {
			listado.forEach(element => {
				this.listaTareas.push(element);

			});

		}
	}

}

