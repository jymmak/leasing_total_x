import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastPlugin } from "../../../../plugins/toast.plugin";
import { Chart } from 'angular-highcharts';
import D3Funnel from 'd3-funnel';
declare var $: any;



@Component({
    selector: 'grafico-dos',
    templateUrl: 'grafico-dos.template.html',
    providers: [
        ToastPlugin
    ]
})


export class GraficoDosComponent implements OnInit{
	public embudo: Array<any>;
    chart: Chart;


    constructor(private router: Router, private _toast: ToastPlugin) {
      
        this.embudo = [

			// ['', 12200100],
			// ['', 7800400],
			// ['', 5200100],
			 { label: 'General Public', value: 15, backgroundColor: '#d22919' },
			 { label: '', value: 10, backgroundColor: '#fc6719' },
			 { label: '', value: 5, backgroundColor: '#f6a704' },

		];



    }



ngOnInit(){
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
				height: 5
			},
			fill: '#d22919',

			label: {
				format:   '{f}'  + '   ' + '{l}',
				color: '#fff',
				hideLabel: false
			},

		};


		const chart = new D3Funnel('#funnel');
		chart.draw(data, options);
	}

}
