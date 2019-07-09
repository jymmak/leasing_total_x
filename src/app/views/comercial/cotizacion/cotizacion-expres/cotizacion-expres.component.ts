import { AfterViewInit, Component, OnInit, Directive } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import swal from 'sweetalert2';
import { ToastPlugin } from "../../../../plugins/toast.plugin";
import { log } from 'util';
declare var $: any;


@Component({
	selector: 'cotizacion-expres',
	templateUrl: 'cotizacion-expres.template.html',
	providers: [
		ToastPlugin
	]

})
export class CotizacionExpresComponent implements OnInit, AfterViewInit {
	public listaCotizacion: Array<any>;
	public links: Array<any>;
	public spinner: boolean;
	public data: Array<any>;
	public selectItem: any;
	public displayedColumns: string[] = ['position', 'correlativo', 'cliente', 'bien', 'tipo', 'valor', 'emision', 'vencimiento', 'estado'];


	constructor(private router: Router, private _toast: ToastPlugin) {
		this.spinner = false;
		this.selectItem = {};
		this.data = [];
		this.links = [

			{ titulo: ' Cotización Express', link: "/comercial/cotizacion/cotizacion-expres" },

		];
	}
	ngAfterViewInit() {
	}

	ngOnInit() {
		this.list();
		this.listaCotizacion = [
			{
				id: 1,
				cotizacion: "COT-00418",
				Cliente: "Minera Robledo",
				Bien: "Camión",
				Marca: "Toyota",
				ValorFin: "$ 60,000.00",
				FechaEmision: "01/09/18",
				Dias: 35,
				ejecutivo: "José Pérez",
				Estado: "Enviada"
			},

			{
				id: 2,
				cotizacion: "COT-00419",
				Cliente: " Transportes Flores",
				Bien: "Camión",
				Marca: "BMW",
				ValorFin: "$ 120,000.00",
				FechaEmision: "01/09/18",
				Dias: 27,
				ejecutivo: "Andrés Coronado",
				Estado: "Enviada"
			},

			{
				id: 3,
				cotizacion: "COT-00419",
				Cliente: " Transportes Flores",
				Bien: "Camión",
				Marca: "BMW",
				ValorFin: "$ 120,000.00",
				FechaEmision: "01/09/18",
				Dias: 27,
				ejecutivo: "Andrés Coronado",
				Estado: "Enviada"
			},



		];
	}
	list() {


	}
	busquedaGeneral(filterValue: string) {

	}



	ruc() {
		swal({
			title: 'Ingresa el número de RUC',
			input: 'text',
			inputAttributes: {
				autocapitalize: 'off'
			},
			showCancelButton: true,
			cancelButtonClass: "mat-raised-button mat-primary",
			confirmButtonClass: "mat-raised-button mat-primary",
			preConfirm: (login) => {
				return fetch(`//api.github.com/users/${login}`)
					.then(response => {
						if (!response.ok) {
							throw new Error(response.statusText);
						}
						return response.json();
					})
					.catch(error => {
						swal.showValidationError(
							`Request failed: ${error}`
						);
					});
			},
			allowOutsideClick: () => !swal.isLoading()
		}).then((result) => {
			if (result.value) {
				swal({
					imageUrl: result.value.avatar_url
				});
			}
		});
	}

	Convertir() {
	}


	confirmarExpress() {
		this.router.navigate(['/comercial/cotizacion/cotizador']);
	}


	selectTr(value) {
		this.selectItem = value;
		// console.log(value);
		// if (value.id === "0" || value.id === null) {
		// 	$(".circulobotonsdelete").removeClass("circulobotons_habilitados").addClass("circulobotonsdelete");
		// } else {
		// 	$(".iconsborder").removeAttr("disabled");
		// 	// $("tr:even").css("background-color", "#FF5733");
		// 	this.selectedRow();
		// 	$(".circulobotonsdelete").removeClass("circulobotonsdelete").addClass("circulobotons_habilitados");
		// }
		// let selectedPosition = {
		// 	value: value
		// };
	}

	 selectedRow() {
		$('#tableCotizacionEpress tr').click(function(e) {
			$('#tableCotizacionEpress tr').removeClass('highlighted');
			$(this).addClass('highlighted');
		});
	 }
}
