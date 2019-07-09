import { Component, OnInit } from '@angular/core';
import { ToastPlugin } from 'src/app/plugins/toast.plugin';
import { Router } from '@angular/router';

@Component({
	selector: 'app-principales-activos',
	templateUrl: './principales-activos.component.html',
	providers: [
		ToastPlugin
	]
})
export class PrincipalesActivosComponent implements OnInit {
	public lstPrincipalesActivos: Array<any>;
	public links: Array<any>;

	constructor(private router: Router) {
		this.links = [
			{ titulo: 'Activos' },
		];
	}

	ngOnInit(): void {
		this.lstPrincipalesActivos = [
			{
				activo: 'camion',
				moneda: 'S',
				valorCompra: 120.000,
				fechaCompra: '11/12/2016',
				years: " 2017",
				placa: "FIT -931 ",
				marcaModelo: "Volvo FH",
				gravadoFavor: "Leasing Total S.A",
			},
			{
				activo: 'Volquete',
				moneda: 'S',
				valorCompra: 80.000,
				fechaCompra: '11/12/2016',
				years: " 2017",
				placa: "FIT -931 ",
				marcaModelo: "Volvo FH",
				gravadoFavor: "Leasing Total S.A",
			},
		];
	}

	antecedentes() {
		$("#antecedentes").removeClass("button-panel-info").addClass("button-panel-after");
		this.router.navigate(['/comercial/organizaciones/clientes/Info-neg']);
	}

	socios() {
		$("#socios").removeClass("button-panel-info").addClass("button-panel-after");
		this.router.navigate(['/comercial/organizaciones/clientes/Info-neg/socios-accionistas']);
	}

	Principales() {
		$("#principales").removeClass("button-panel-info").addClass("button-panel-after");
		this.router.navigate(['/comercial/organizaciones/clientes/Info-neg/principales-activos']);
	}
	comerciales() {
		$("#Comerciales").removeClass("button-panel-info").addClass("button-panel-after");
		this.router.navigate(['/comercial/organizaciones/clientes/Info-neg/ref-comerciales']);
	}
}
