import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { ToastPlugin } from "../../../../plugins/toast.plugin";
import { Router, ActivatedRoute } from '@angular/router';
import { RUTAS_COMERCIAL_OPERACIONES, RUTAS_COMERCIAL_FUERZASVENTAS } from 'src/config/rutas-modulos/rutas-comercial';
declare var $: any;

@Component({
	selector: 'page-ejecutivos',
	templateUrl: 'ejecutivos.template.html',
	providers: [
		ToastPlugin
	]
})
export class EjecutivosComponent implements OnInit {
	public expedienteId: any;
	public links: Array<any>;
	public spinner: boolean;
	public listaEjecutivos: Array<any>;

	constructor(private _toast: ToastPlugin, private router: Router, private activatedRoute: ActivatedRoute) {
		this.spinner = false;
		this.links = [
			{ titulo: 'Ejecutivos', link: "/comercial/fuerza-ventas/ejecutivos" },

		];
		this.activatedRoute.params.subscribe(params => {
			this.expedienteId = params.codigo;
		  });

	}

	ngOnInit() {

		this.list();
		let fnColor = (valor: number) => {
			if (valor <= 60) {
				return 'red';
			} else if (valor > 60 && valor <= 85) {
				return 'orange';
			} else if (valor > 85 && valor <= 100) {
				return 'green';
			}
			else if (valor > 100) {
				return 'blue';
			}
		};

		this.listaEjecutivos = [

			{
				Id: 1,
				Nombres: "Jorge Luis",
				Apellidos: "Chávez Malavé",
				Cargo: "Gerente Comercial",
				Sucursal: "Lima",
				NumeroOperacion: 3,
				VolumenOperacion: "50,000",
				Tea: 13,
				CuotaMensual: "5,000,000",
				Av1: 30,
				CuotaAnual: "5,000,000",
				Av2: 90,
				Av1Color: fnColor(30),
				Av2Color: fnColor(90)
			},

			{
				Id: 2,
				Nombres: "Pedro",
				Apellidos: "Soto Rodriguez",
				Cargo: "Oficial de Negocios Senior",
				Sucursal: "Lima",
				NumeroOperacion: 4,
				VolumenOperacion: "300,000",
				Tea: 15,
				CuotaMensual: "1,500,000",
				Av1: 90,
				CuotaAnual: "1,500,000",
				Av2: 100,
				Av1Color: fnColor(90),
				Av2Color: fnColor(100)
			},

			{
				Id: 3,
				Nombres: "Jorge Luis",
				Apellidos: "Chávez Malavé",
				Cargo: "Gerente Comercial",
				Sucursal: "Lima",
				NumeroOperacion: 1,
				VolumenOperacion: "120,000",
				Tea: 18,
				CuotaMensual: "5,000,000",
				Av1: 130,
				CuotaAnual: "5,000,000",
				Av2: 130,
				Av1Color: fnColor(130),
				Av2Color: fnColor(130)
			},


			{
				Id: 4,
				Nombres: "Pedro",
				Apellidos: "Soto Rodriguez",
				Cargo: "Oficial de Negocios Senior",
				Sucursal: "Lima",
				NumeroOperacion: 8,
				VolumenOperacion: "85,000",
				Tea: 14,
				CuotaMensual: "1,500,000",
				Av1: 60,
				CuotaAnual: "1,500,000",
				Av2: 100,
				Av1Color: fnColor(60),
				Av2Color: fnColor(100)
			},

			{
				Id: 5,
				Nombres: "Jorge Luis",
				Apellidos: "Chávez Malavé",
				Cargo: "Gerente Comercial",
				Sucursal: "Lima",
				NumeroOperacion: 5,
				VolumenOperacion: "257,000",
				Tea: 17,
				CuotaMensual: "5,000,000",
				Av1: 100,
				CuotaAnual: "5,000,000",
				Av2: 30,
				Av1Color: fnColor(100),
				Av2Color: fnColor(30)
			},

			{
				Id: 6,
				Nombres: "Pedro",
				Apellidos: "Soto Rodriguez",
				Cargo: "Oficial de Negocios Senior",
				Sucursal: "Lima",
				NumeroOperacion: 9,
				VolumenOperacion: "68,000",
				Tea: 13,
				CuotaMensual: "1,500,000",
				Av1: 30,
				CuotaAnual: "1,500,000",
				Av2: 90,
				Av1Color: fnColor(30),
				Av2Color: fnColor(90)
			},

			{
				Id: 7,
				Nombres: "Jorge Luis",
				Apellidos: "Chávez Malavé",
				Cargo: "Gerente Comercial",
				Sucursal: "Lima",
				NumeroOperacion: 2,
				VolumenOperacion: "197,000",
				Tea: 16,
				CuotaMensual: "5,000,000",
				Av1: 60,
				CuotaAnual: "5,000,000",
				Av2: 130,
				Av1Color: fnColor(60),
				Av2Color: fnColor(130)
			},

			{
				Id: 8,
				Nombres: "Pedro",
				Apellidos: "Soto Rodriguez",
				Cargo: "Oficial de Negocios Senior",
				Sucursal: "Lima",
				NumeroOperacion: 7,
				VolumenOperacion: "287,000",
				Tea: 18,
				CuotaMensual: "1,500,000",
				Av1: 130,
				CuotaAnual: "1,500,000",
				Av2: 100,
				Av1Color: fnColor(130),
				Av2Color: fnColor(100)
			},

			{
				Id: 9,
				Nombres: "Jorge Luis",
				Apellidos: "Chávez Malavé",
				Cargo: "Gerente Comercial",
				Sucursal: "Lima",
				NumeroOperacion: 10,
				VolumenOperacion: "100,000",
				Tea: 12,
				CuotaMensual: "5,000,000",
				Av1: 60,
				CuotaAnual: "5,000,000",
				Av2: 30,
				Av1Color: fnColor(60),
				Av2Color: fnColor(30)
			},
			{
				Id: 10,
				Nombres: "Pedro",
				Apellidos: "Soto Rodriguez",
				Cargo: "Oficial de Negocios Senior",
				Sucursal: "Lima",
				NumeroOperacion: 6,
				VolumenOperacion: "234,000",
				Tea: 15,
				CuotaMensual: "1,500,000",
				Av1: 90,
				CuotaAnual: "1,500,000",
				Av2: 60,
				Av1Color: fnColor(90),
				Av2Color: fnColor(60)
			},

			{
				Id: 11,
				Nombres: "Jorge Luis",
				Apellidos: "Chávez Malavé",
				Cargo: "Gerente Comercial",
				Sucursal: "Lima",
				NumeroOperacion: 10,
				VolumenOperacion: "100,000",
				Tea: 12,
				CuotaMensual: "5,000,000",
				Av1: 80,
				CuotaAnual: "5,000,000",
				Av2: 10,
				Av1Color: fnColor(80),
				Av2Color: fnColor(10)
			},

			{
				Id: 12,
				Nombres: "Jorge Luis",
				Apellidos: "Chávez Malavé",
				Cargo: "Gerente Comercial",
				Sucursal: "Lima",
				NumeroOperacion: 10,
				VolumenOperacion: "100,000",
				Tea: 12,
				CuotaMensual: "5,000,000",
				Av1: 110,
				CuotaAnual: "5,000,000",
				Av2: 50,
				Av1Color: fnColor(110),
				Av2Color: fnColor(50)
			},




		];


	}


	list() {
		this.spinner = true;
		setTimeout(() => {


			this.spinner = false;
		}, 1000);
	}

	applyFilter(filterValue: string) {

	}
	// Funcion Eliminar de Modal 
	eliminar() {
		swal({
			title: '¿Está seguro de eliminar al usuario?',
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
				this._toast.get({ tipo: 'success', titulo: 'Operación exitosa.', contenido: "El registro fue eliminado." });
			}
		});

	}

	asignarCuota(item){
		this.router.navigate([RUTAS_COMERCIAL_FUERZASVENTAS.ejecutivo  + '/' + RUTAS_COMERCIAL_FUERZASVENTAS.ejecutivos.asignar]);


	}
	
}

