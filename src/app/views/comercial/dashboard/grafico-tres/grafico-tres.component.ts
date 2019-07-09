import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastPlugin } from "../../../../plugins/toast.plugin";
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';
import D3Funnel from 'd3-funnel';
declare var $: any;



@Component({
	selector: 'grafico-tres',
	templateUrl: 'grafico-tres.template.html',
	providers: [
		ToastPlugin
	]
})


export class GraficoTresComponent implements OnInit {
	public embudo: Array<any>;
	chart: Chart;

	constructor(private router: Router, private _toast: ToastPlugin) {
		this.embudo = [

			// ['', 12200100],
			// ['', 7800400],
			// ['', 5200100],
			{ label: '', value: 8.5 , backgroundColor: '#d22919' },
			{ label: '', value: 4.1, backgroundColor: '#fc6719' },
			{ label: '', value: 1.9, backgroundColor: '#f6a704' },

		];

	}



	ngOnInit() {
		this.chartEmbudo()

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
				height: 50
			},
			fill: '#d22919',

			label: {
				format: '{l}' + '$ ' + ' ' + '{f}' + ' ' + 'mil',
				color: '#fff',
				hideLabel: false
			},

		};


		const chart = new D3Funnel('#funnel-tres');
		chart.draw(data, options);
	}


}
