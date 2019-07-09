import { Component, ViewChild, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { ContactobuscadorComponent } from './buscador/buscador.component';
import { RUTAS_COMERCIAL_ORGANIZACIONES } from 'src/config/rutas-modulos/rutas-comercial';
import { ClienteContactoService } from './contacto.service';
declare var $: any;

export interface ClienteData {
	id: number;
	position: number;
	ruc: string;
	razon_social: string;
	tipo_persona: string;
	segmento: string;
	calificacion: string;
	asignado: string;
}
@Component({
	selector: 'contacto',
	templateUrl: 'contacto.template.html',
	providers: [
		ClienteContactoService
	]
})


export class ContactoComponent implements OnInit {


	public links: Array<any>;
	public spinner: boolean;
	public listaContacto: Array<any>;
	public informacion: boolean;
	public contactoEditar: Array<any>;
	public selectItem: any;
	public loading: boolean;
	public contactos: Array<any>;
	public numfilas: number;
	public buscar: any;
	public pagina: number;
	public idcliente: number;
	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private _clienteContactoService: ClienteContactoService
	) {
		this.spinner = false;
		this.links = [
			{ titulo: 'Contactos', link: "/comercial/organizaciones/clientes/contacto" }
		];
		this.selectItem = {};
		this.loading = true;
		this.idcliente = 0;
		this.buscar = "";
		this.numfilas = 10;
		this.activatedRoute.params.subscribe(params => {
			if (params.id) {
				this.idcliente = Number(params.id);
			}
		});
	}
	ngOnInit(): void {
		this.listarContactos();
	}

	listarContactos(scrolling: boolean = false) {
		this.loading = true;
		if (!scrolling) {
			this.contactos = [];
			this.pagina = 1;
		} else {
			this.pagina++;
		}
		let data = {
			idcliente: this.idcliente,
			nombres: this.buscar,
			pagina: this.pagina,
			numfilas: this.numfilas
		};
		this._clienteContactoService.listarContactos(data).subscribe(
			response => {
				response['data'].forEach(element => {
					this.contactos.push(element);
				});
				// this.clientes = response['cliente'];
			},
			error => {

			},
			() => {
				this.loading = false;
			}
		);
	}
	formularioContact() {
		let clientes = RUTAS_COMERCIAL_ORGANIZACIONES.clientes;
		this.router.navigate([clientes.init + '/' + this.idcliente + '/' + clientes.contacto.nuevo]);
	}
	editarContacto() {
		let clientes = RUTAS_COMERCIAL_ORGANIZACIONES.clientes;
		this.router.navigate([clientes.init + '/' + this.idcliente + '/' + clientes.contacto.init + '/' + this.selectItem.id + '/' + clientes.contacto.editar]);
	}
	detalleContacto() {
		let clientes = RUTAS_COMERCIAL_ORGANIZACIONES.clientes;
		this.router.navigate([clientes.init + '/' + this.idcliente + '/' + clientes.contacto.init + '/' + this.selectItem.id + '/' + clientes.contacto.detalle]);
	}

	select(item) {
		this.selectItem = item;
	}
	cancelarContacto() {
		this.router.navigate(['/comercial/organizaciones/clientes']);

	}
	eliminar() {
		swal({
			title: '¿Estás seguro de eliminar el cliente?',
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
				this._clienteContactoService.eliminar(this.selectItem.id).subscribe(
					response => {
						this.listarContactos();
					},
					error => {

					}
				);
			}
		});
	}
}
