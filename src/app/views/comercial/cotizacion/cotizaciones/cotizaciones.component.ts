import { AfterViewInit, Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { RUTAS_COMERCIAL_COTIZACIONES } from 'src/config/rutas-modulos/rutas-comercial';
declare var $: any;
@Component({
	selector: 'cotizaciones',
	templateUrl: 'cotizaciones.template.html',
	providers: [
	]
})
export class CotizacionesComponent implements OnInit, AfterViewInit, OnDestroy {
	public selectItem: any;
	public listaCotizacion: Array<any>;
	public links: Array<any>;
	public dataSelected: any;
	public buscarCotizacion: string;
	@Output() accionGuardar = new EventEmitter();
	@Output() Guardar = new EventEmitter();
	
	constructor(private router: Router) {
		this.selectItem = {};
		this.links = [
			{ titulo: 'Cotizaciones', link: "/comercial/cotizacion/cotizaciones" },
		];
		this.dataSelected = [
			{ id: 2, value: 'ac', text: "<div class='circulo yellow'></div> Aceptada" },
			{ id: 3, value: 'en', text: "<div class='circulo blue'></div> Enviada" },
		];
	}
	ngAfterViewInit() {
		$('[data-toggle="tooltip"]').tooltip();
	}
	ngOnDestroy() {
		$('[data-toggle="tooltip"]').tooltip('dispose');
	}
	ngOnInit() {
		this.listaCotizacion = [
			{
				id: 1,
				cotizacion: "COT-00401",
				Cliente: "Minera Robledo",
				Bien: "Camión",
				Marca: "Toyota",
				ValorFin: "$ 60,000.00",
				FechaEmision: "01/09/18",
				Dias: 35,
				ejecutivo: "José Pérez",
				Estado: "estado"
			},

			{
				id: 2,
				cotizacion: "COT-00402",
				Cliente: " Transportes Flores",
				Bien: "Camión",
				Marca: "BMW",
				ValorFin: "$ 120,000.00",
				FechaEmision: "01/09/18",
				Dias: 27,
				ejecutivo: "Andrés Coronado",
				Estado: "estado"
			},

			{
				id: 3,
				cotizacion: "COT-00403",
				Cliente: " Transportes Flores",
				Bien: "Camión",
				Marca: "BMW",
				ValorFin: "$ 120,000.00",
				FechaEmision: "01/09/18",
				Dias: 27,
				ejecutivo: "Andrés Coronado",
				Estado: "estado"
			},

			{
				id: 4,
				cotizacion: "COT-00404",
				Cliente: " Transportes Flores",
				Bien: "Camión",
				Marca: "BMW",
				ValorFin: "$ 120,000.00",
				FechaEmision: "01/09/18",
				Dias: 27,
				ejecutivo: "Andrés Coronado",
				Estado: "estado"
			},

			{
				id: 5,
				cotizacion: "COT-00405",
				Cliente: " Transportes Flores",
				Bien: "Camión",
				Marca: "BMW",
				ValorFin: "$ 120,000.00",
				FechaEmision: "01/09/18",
				Dias: 27,
				ejecutivo: "Andrés Coronado",
				Estado: "estado"
			},

			{
				id: 6,
				cotizacion: "COT-00406",
				Cliente: " Transportes Flores",
				Bien: "Camión",
				Marca: "BMW",
				ValorFin: "$ 120,000.00",
				FechaEmision: "01/09/18",
				Dias: 27,
				ejecutivo: "Andrés Coronado",
				Estado: "estado"
			},

			{
				id: 7,
				cotizacion: "COT-00407",
				Cliente: " Transportes Flores",
				Bien: "Camión",
				Marca: "BMW",
				ValorFin: "$ 120,000.00",
				FechaEmision: "01/09/18",
				Dias: 27,
				ejecutivo: "Andrés Coronado",
				Estado: "estado"
			},

			{
				id: 8,
				cotizacion: "COT-00408",
				Cliente: " Transportes Flores",
				Bien: "Camión",
				Marca: "BMW",
				ValorFin: "$ 120,000.00",
				FechaEmision: "01/09/18",
				Dias: 27,
				ejecutivo: "Andrés Coronado",
				Estado: "estado"
			},

			{
				id: 9,
				cotizacion: "COT-00409",
				Cliente: " Transportes Flores",
				Bien: "Camión",
				Marca: "BMW",
				ValorFin: "$ 120,000.00",
				FechaEmision: "01/09/18",
				Dias: 27,
				ejecutivo: "Andrés Coronado",
				Estado: "estado"
			},
			{
				id: 10,
				cotizacion: "COT-00410",
				Cliente: " Transportes Flores",
				Bien: "Camión",
				Marca: "BMW",
				ValorFin: "$ 120,000.00",
				FechaEmision: "01/09/18",
				Dias: 27,
				ejecutivo: "Andrés Coronado",
				Estado: "estado"
			},

		];
	}
	busquedaGeneral(filterValue: string) {

	}
	consulta() {
		this.router.navigate([RUTAS_COMERCIAL_COTIZACIONES.cotizaciones.nuevo]);
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
	editar() {
		let cotizacion = RUTAS_COMERCIAL_COTIZACIONES.cotizaciones;
		this.router.navigate([cotizacion.init + '/' + this.selectItem.cotizacion + '/' + cotizacion.editar]);
	}
	verPdf() {
		let cotizacion = RUTAS_COMERCIAL_COTIZACIONES.cotizaciones;
		this.router.navigate([cotizacion.init + '/' + this.selectItem.cotizacion + '/' + cotizacion.verPdf]);
	}
	enviarEmail() {
		let cotizacion = RUTAS_COMERCIAL_COTIZACIONES.cotizaciones;
		this.router.navigate([cotizacion.init + '/' + this.selectItem.cotizacion + '/' + cotizacion.enviarEmail]);
	}
	scrolled() {
		let id = this.listaCotizacion.length;
		let listado = [
			{
				id: id + 1,
				cotizacion: "COT-004" + (id + 1),
				Cliente: "Minera Robledo",
				Bien: "Camión",
				Marca: "Toyota",
				ValorFin: "$ 60,000.00",
				FechaEmision: "01/09/18",
				Dias: 35,
				ejecutivo: "José Pérez",
				Estado: "estado"
			},

			{
				id: id + 2,
				cotizacion: "COT-004" + (id + 2),
				Cliente: " Transportes Flores",
				Bien: "Camión",
				Marca: "BMW",
				ValorFin: "$ 120,000.00",
				FechaEmision: "01/09/18",
				Dias: 27,
				ejecutivo: "Andrés Coronado",
				Estado: "estado"
			},

			{
				id: id + 3,
				cotizacion: "COT-004" + (id + 3),
				Cliente: " Transportes Flores",
				Bien: "Camión",
				Marca: "BMW",
				ValorFin: "$ 120,000.00",
				FechaEmision: "01/09/18",
				Dias: 27,
				ejecutivo: "Andrés Coronado",
				Estado: "estado"
			},

			{
				id: id + 4,
				cotizacion: "COT-004" + (id + 4),
				Cliente: " Transportes Flores",
				Bien: "Camión",
				Marca: "BMW",
				ValorFin: "$ 120,000.00",
				FechaEmision: "01/09/18",
				Dias: 27,
				ejecutivo: "Andrés Coronado",
				Estado: "estado"
			},

			{
				id: id + 5,
				cotizacion: "COT-004" + (id + 5),
				Cliente: " Transportes Flores",
				Bien: "Camión",
				Marca: "BMW",
				ValorFin: "$ 120,000.00",
				FechaEmision: "01/09/18",
				Dias: 27,
				ejecutivo: "Andrés Coronado",
				Estado: "estado"
			},

			{
				id: id + 6,
				cotizacion: "COT-004" + (id + 6),
				Cliente: " Transportes Flores",
				Bien: "Camión",
				Marca: "BMW",
				ValorFin: "$ 120,000.00",
				FechaEmision: "01/09/18",
				Dias: 27,
				ejecutivo: "Andrés Coronado",
				Estado: "estado"
			},

			{
				id: id + 7,
				cotizacion: "COT-004" + (id + 7),
				Cliente: " Transportes Flores",
				Bien: "Camión",
				Marca: "BMW",
				ValorFin: "$ 120,000.00",
				FechaEmision: "01/09/18",
				Dias: 27,
				ejecutivo: "Andrés Coronado",
				Estado: "estado"
			},

			{
				id: id + 8,
				cotizacion: "COT-004" + (id + 8),
				Cliente: " Transportes Flores",
				Bien: "Camión",
				Marca: "BMW",
				ValorFin: "$ 120,000.00",
				FechaEmision: "01/09/18",
				Dias: 27,
				ejecutivo: "Andrés Coronado",
				Estado: "estado"
			},

			{
				id: id + 9,
				cotizacion: "COT-004" + (id + 9),
				Cliente: " Transportes Flores",
				Bien: "Camión",
				Marca: "BMW",
				ValorFin: "$ 120,000.00",
				FechaEmision: "01/09/18",
				Dias: 27,
				ejecutivo: "Andrés Coronado",
				Estado: "estado"
			},
			{
				id: id + 10,
				cotizacion: "COT-004" + (id + 10),
				Cliente: " Transportes Flores",
				Bien: "Camión",
				Marca: "BMW",
				ValorFin: "$ 120,000.00",
				FechaEmision: "01/09/18",
				Dias: 27,
				ejecutivo: "Andrés Coronado",
				Estado: "estado"
			},

		];
		if (id <= 100) {
			listado.forEach(element => {
				this.listaCotizacion.push(element);
	
			});

		}
	}

	
	generar() {
		swal({
				title: '¿Estás seguro que desea generar un nuevo expediente  a partir de la cotización seleccionada?',
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
						this.Aceptar();

						this.Guardar.emit({ data: '' });
				}
		});
}

Aceptar() {
		swal({
				title: '!Genial operación exitosa¡',
				customClass: 'swal2-alert-success',
				confirmButtonText: 'Volver',
		}).then((result) => {
				if (result.value) {
						this.accionGuardar.emit();
					
				}
		});
}

}
