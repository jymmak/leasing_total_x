import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteDetalleComponent } from './detalle/detalle.component';
import { ClientebuscadorComponent } from './buscador/buscador.component';
import { FormularioCliente1Component } from './formulario-cliente/formulario-cliente1/formulario-cliente1.component';
import { RUTAS_COMERCIAL_ORGANIZACIONES } from 'src/config/rutas-modulos/rutas-comercial';
import { ClienteService } from './cliente.service';
import swal from 'sweetalert2';
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
	selector: 'page-cliente',
	templateUrl: 'clientes.template.html',
	providers: [
		ClienteService
	]
})
export class ClienteViewComponent implements OnInit {
	@ViewChild(ClientebuscadorComponent) _clientebuscador;
	public links: Array<any>;
	public clientes: Array<any>;
	public informacion: boolean;
	public clienteEliminar: Array<any>;
	public clienteEditar: Array<any>;
	public selectItem: any;
	public mostrarAvanzada: boolean;
	public numfilas: number;
	public buscar: any;
	public pagina: number;
	public loading: boolean;
	constructor(
		private router: Router,
		private _clienteService: ClienteService
	) {
		this.mostrarAvanzada = false;
		this.clientes = [];
		this.links = [
			{ titulo: 'Clientes', link: "" }
		];
		this.selectItem = {};
		this.numfilas = 15;
		this.buscar = "";
		this.pagina = 1;
		this.loading = false;
	}
	ngOnInit(): void {
		this.listarClientes();
	}
	listarClientes(scrolling: boolean = false) {
		this.loading = true;
		if (!scrolling) {
			this.clientes = [];
			this.pagina = 1;
		} else {
			this.pagina++;
		}
		let data = {
			ruc_razons: this.buscar,
			pagina: this.pagina,
			numfilas: this.numfilas
		};
		this._clienteService.listarClientes(data).subscribe(
			response => {
				response['cliente'].forEach(element => {
					this.clientes.push(element);
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
	buscador() {
		this._clientebuscador.init();
	}

	nuevoCliente() {
		this.router.navigate([RUTAS_COMERCIAL_ORGANIZACIONES.clientes.nuevo]);
	}
	editarCliente() {
		let clientes = RUTAS_COMERCIAL_ORGANIZACIONES.clientes;
		this.router.navigate([clientes.init + '/' + this.selectItem.id + '/' + clientes.editar]);
	}
	eliminarCliente(item) {
	}
	contactoCliente() {
		let clientes = RUTAS_COMERCIAL_ORGANIZACIONES.clientes;
		this.router.navigate([clientes.init + '/' + this.selectItem.id + '/' + clientes.contacto.init]);
		// this.router.navigate([RUTAS_COMERCIAL_ORGANIZACIONES.clientes.contacto.init]);
	}

	BibLioCliente() {
		let clientes = RUTAS_COMERCIAL_ORGANIZACIONES.clientes;
		this.router.navigate([clientes.init + '/' + this.selectItem.id + '/' + clientes.biblioteca.init]);
	}
	detalle() {
		let clientes = RUTAS_COMERCIAL_ORGANIZACIONES.clientes;
		this.router.navigate([clientes.init + '/' + this.selectItem.id + '/' + clientes.detalle]);
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
				this._clienteService.eliminar(this.selectItem.id).subscribe(
					response => {
						this.listarClientes();
					},
					error => {

					}
				);
			}
		});
	}
}
