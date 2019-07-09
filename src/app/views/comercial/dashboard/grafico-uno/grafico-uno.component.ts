import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastPlugin } from "../../../../plugins/toast.plugin";
import { Chart } from 'angular-highcharts';
declare var $: any;



@Component({
    selector: 'grafico-uno',
    templateUrl: 'grafico-uno.template.html',
    providers: [
        ToastPlugin
    ]
})


export class GraficoUnoComponent {
    chart: Chart;
    public data1: any[];
    public data2: any[];

    constructor(private router: Router, private _toast: ToastPlugin) {
        this.data1 = [100, 80, 30, 50, 40, 100, 120],
        this.data2 =  [100, 80, 40, 30, 30, 50, 40],

            this.chart = new Chart({
                chart: {
                    type: 'areaspline'
                },
                title: {
                    text: 'Volumen de Colocaciones',
                    align: 'justify'

                },
                // legend: {
                //     layout: 'vertical',
                //     align: 'left',
                //     verticalAlign: 'top',
                //     x: 200,
                //     y: 300,
                //     floating: true,
                //     borderWidth: 1,
                //    // backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
                // },
                xAxis: {
                    categories: [
                        '1',
                        '2',
                        '3',
                        '4',
                        '5',
                        '6',

                    ],

                },
                yAxis: {
                    title: {
                        text: 'Fruit units'
                    }
                },
                tooltip: {
                    shared: true,
                    valueSuffix: ' units'
                },
                credits: {
                    enabled: false
                },
                plotOptions: {
                    areaspline: {
                        fillOpacity: 0.5
                    }
                },
                series: [{
                    name: 'John',
                    data: this.data1,
                    color: '#d22919'
                }, {
                    name: 'Jane',
                    data: this.data2,
                    color: '#fc6719'
                }]
            });

    }






}
