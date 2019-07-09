import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import D3Funnel from 'd3-funnel';
declare var $: any;

@Component({
	selector: 'app-embudo',
	templateUrl: './embudo.component.html',
	styleUrls: ['./embudo.component.scss']
})
export class EmbudoComponent implements OnInit {
	@ViewChild("container", { read: ElementRef }) container: ElementRef;
	public links: Array<any>;
	public sucursal: Array<any>;
	public Ejecutivo: Array<any>;
	public embudo: Array<any>;
	public selectItem: any;
	softConnector: boolean = false;



	constructor(private router: Router) {
		this.selectItem = {}
		this.links = [
			{ titulo: 'Embudo de Operaciones' },
		];
		this.embudo = [

			// ['', 12200100],
			// ['', 7800400],
			// ['', 5200100],
			 { label: '$', value: 12200100, backgroundColor: '#d22919' },
			 { label: '$', value: 7800400, backgroundColor: '#fc6719' },
			 { label: '$', value: 5200100, backgroundColor: '#f6a704' },

		];
	}

	ngAfterViewInit() {
		console.log("datepicker");
		$('#datepicker').datepicker({
			language: 'es',
			dateFormat: ' M  yyyy',
			inline: false,
			autoClose: true,
			minDate: new Date()
		});
		let elem = document.getElementsByClassName('multi-select Activo')
		console.log(elem);

	}
	ngOnInit() {

		

		this.sucursal = [
			{ id: 1, value: 'li', text: "lima" },
			{ id: 2, value: 'are', text: "arequipa" },
			{ id: 2, value: 'tru', text: "trujillo" },
			{ id: 2, value: 'chi', text: "Chicalyo" },
			{ id: 2, value: 'tac', text: "tacna" },
		];

		this.Ejecutivo = [
			{ id: 1, value: 'pedro soto', text: "Pedro Soto" },
			{ id: 2, value: 'pedro soto', text: "Pedro Soto" },
			{ id: 2, value: 'pedro soto', text: "Pedro Soto" },
			{ id: 2, value: 'pedro soto', text: "Pedro Soto" },
			{ id: 2, value: 'pedro soto', text: "Pedro Soto" },

		];
		this.chartEmbudo()



	}


	select(item) {

		this.selectItem = item;

	}
	selectedEjecutivos(event) {
		console.log(event);
		this.chartEmbudo();
	}

	selectedSucursal(event) {
		console.log(event);
		this.embudo =  [

			 { label: '', value: 12200100, backgroundColor: '#d22919' },
			 { label: '', value: 7800400, backgroundColor: '#fc6719' },
			 { label: '', value: 5200100, backgroundColor: '#f6a704' },

		];
		this.chartEmbudo();
	}


	chartEmbudo() {
		const data = this.embudo
		const options = {
			block: {
				dynamicHeight: true,
				minHeight: 15,
				dynamicSlope: true
			},

			curve: {
				enabled: true,
				height: 5
			},
			fill: '#d22919',

			label: {
				format: '{l}' + '$ ' + ' ' + '{f}',
				color: '#fff',
				hideLabel: false
			},

		};


		const chart = new D3Funnel('#funnel');
		chart.draw(data, options);
	}

}