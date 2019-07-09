import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { SucursalContactoService } from './sucursal-contacto.service';
import { ToastPlugin } from 'src/app/plugins/toast.plugin';
import { RUTAS_COMERCIAL_ORGANIZACIONES } from 'src/config/rutas-modulos/rutas-comercial';
import { AgmMap, AgmMarker } from '@agm/core';


@Component({
	selector: 'sucursal-contacto',
	templateUrl: 'sucursal-contacto.template.html',
	providers: [
		ToastPlugin
	]
})
export class SucursalContactoComponent implements OnInit {
	public links: Array<any>;
	public selectItem: any;
	public Contacto: Array<any>;
	public loading: boolean;
	public idContacto: number;
	public idProveedor: number;
	public pagina: number;
	public numfilas: number;
	constructor(private router: Router,
		private activatedRoute: ActivatedRoute,
		private _contactoService: SucursalContactoService) {

		this.links = [
			{ titulo: 'Contactos', link: "/comercial/organizaciones/proveedores/sucursales" }
		];
		this.selectItem = {};
		this.idContacto = 0;
		this.idProveedor = 0;
		this.pagina = 1;
		this.numfilas = 10;
		// validar la url
		this.activatedRoute.params.subscribe(params => {
			console.log(params);
			
			this.idContacto = Number(params.id);
			this.idProveedor = Number(params.sucurrsal);

			if (params.id) {
				this.idContacto = parseInt(params.id, 10);
				this.idProveedor = parseInt(params.sucurrsal, 10);
				this.listarContactos()

			}

		});
	}



	listarContactos( scrolling: boolean = false) {
		this.loading = true;
		if (!scrolling) {
			this.Contacto = [];
			this.pagina = 1;
		} else {
			this.pagina++;
		}
		let data = {
			pagina: this.pagina,
			numfilas: this.numfilas,
			idsucursal: this.idProveedor,
			paginado: true,
			contacto: "",
		};
		this._contactoService.listar(data).subscribe(
			response => {
				response['contacto'].forEach(element => {
					this.Contacto.push(element);
				});
				this.Contacto = response['contacto'];
			},
			error => {

			},
			() => {
				this.loading = false;
			}
		);
	}
	ngOnInit() {


	}

	select(item) {
		this.selectItem = item;
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
				this._contactoService.eliminar(this.selectItem.id).subscribe(
					response => {
						console.log(response);

						this.listarContactos();
					},
					error => {

					}
				);
			}
		});
	}

	editarContacto() {
		let proveedores = RUTAS_COMERCIAL_ORGANIZACIONES.proveedores;
		this.router.navigate([proveedores.init + '/' + this.idContacto + '/' + proveedores.contacto.init + '/' + this.idProveedor + '/' + proveedores.contacto.init + '/' + this.selectItem.id + '/' + proveedores.contacto.editar]);

	}
	nuevoContacto() {
		let proveedores = RUTAS_COMERCIAL_ORGANIZACIONES.proveedores;
		this.router.navigate([proveedores.init + '/' + this.idContacto + '/' + proveedores.contacto.init + '/' + this.idProveedor + '/' + proveedores.contacto.nuevo ]);
		console.log(proveedores.init + '/' + this.idContacto + '/' + proveedores.contacto.nuevo + '/' + this.idProveedor);

	}

	atras() {
		console.log(this.idProveedor);

		let proveedores = RUTAS_COMERCIAL_ORGANIZACIONES.proveedores;
		this.router.navigate([proveedores.init + '/' + this.idContacto + '/' + proveedores.sucursales.init]);

	}
}
