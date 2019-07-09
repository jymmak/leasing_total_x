import { AfterViewInit, Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { ToastPlugin } from "../../../../plugins/toast.plugin";
import { Router } from '@angular/router';
import { GoogleCharts } from 'google-charts';
declare var $: any;




@Component({
    selector: 'page-desemp',
    templateUrl: 'desemp.template.html',
    providers: [
        ToastPlugin
    ]
})
export class DesempComponent {
    // Cabecera de cada Vista
    public links: Array<any>;
    public listaNombres: Array<any>;
    public listaCharts: Array<any>;
    public pieOptionsUno: any;
    public dataBar: Array<any>;
    public comision: any;
    public color: any;

    @ViewChild('ElContendeor') elContendeor: ElementRef;

    pieChartData: any;

    constructor(private router: Router, private _toast: ToastPlugin, private renderer: Renderer2) {

        this.links = [
            { titulo: 'Desempeño' },

        ];


        this.pieChartData = {

            chartType: 'PieChart',
            dataTable: [
                ['Chart thing', 'Chart amount'],
                ['Dolor sit', 80],
                ['Sit amet', 20]
            ],
            options: {
                pieHole: 0.7,
                pieSliceTextStyle: {
                    color: 'black',
                },
                slices: {
                    0: { color: '#D22919' },
                    1: { color: '#faf9f9' },
                    2: { color: '#FC6719' },
                    3: { color: '#FFED00' }

                },
                legend: {
                    position: 'bottom',
                    textStyle: {
                        color: 'black',
                        fontSize: 13,
                        fontName: 'EncodeSans'
                    }
                },
                title: 'Chart 1',
                titleTextStyle: {
                    color: 'black',
                    fontSize: 13,
                    fontName: 'EncodeSans'
                },
                chartArea: { left: 0, top: 0, width: '80%', height: '50%' },
                pieSliceText: 'none'
            },
        };
        this.listarNombres();
    }

    ngOnInit() {
        console.log(document.body);
        for (let index = 0; index < this.listaNombres.length; index++) {
            let color = '';
            let comision_porcetnajte = '';
            let position = '';
            let textalign = '';
            let marginleft = '';
            let margintop = '';
            let background = '';
            const element = this.listaNombres[index];
            let porcentaje = element.comisionMes / element.comision * 100;
            console.log(porcentaje);
            if (porcentaje > 0 && porcentaje < 50) {
                color = '#FFED00'
            } else if (porcentaje >= 50 && porcentaje < 51) {
                color = ' #F6A704';
            } else if (porcentaje >= 51 && porcentaje < 100) {
                color = '#FC6719';
                position = 'absolute';
                textalign = 'left';
                marginleft = '91px';
                margintop = '4px';
                background = '#FC6719';
            } else if (porcentaje >= 100) {
                porcentaje = 100;
                color = '#D22919';
                position = 'absolute';
                textalign = 'left';
                marginleft = '91px';
                margintop = '4px';
                background = '#D22919';
            }

            this.listaNombres[index].color_switcher = color;
            this.listaNombres[index].comision_porcetnajte = porcentaje + '%';
            this.listaNombres[index].position_switcher = position;
            this.listaNombres[index].textalign_switcher = textalign;
            this.listaNombres[index].marginleft_switcher = marginleft;
            this.listaNombres[index].margintop_switcher = margintop;
            this.listaNombres[index].background_switcher = background;
        }
    }

    ngAfterViewInit() {



    }
    listarNombres() {
        let fnPieChartDat = (valor1, valor2, valor3) => {
            return {

                chartType: 'PieChart',
                dataTable: [
                    ['Chart thing', 'Chart amount'],
                    ['', valor1],
                    ['', valor2]
                ],
                options: {
                    pieHole: 0.7,
                    pieSliceTextStyle: {
                        color: 'black',
                    },
                    slices: {
                        0: { color: valor3 },
                        1: { color: '#f5f5f5' }

                    },
                    legend: {
                        position: 'none',

                    },
                    tooltip: {
                        trigger: "none"
                    },
                    chartArea: { left: 0, top: 0, width: '80%', height: '50%' },
                    pieSliceText: 'none'
                },
            };
        }
        this.listaNombres = [
            {
                id: 1,
                nombre: "Jorge Rosado",
                cantidad: "2,000,000",
                porcentaje: 10,
                titleBar: "Gerente Comercial - Lima",
                prospectos: "Prospectos",
                oportunidades: "Oportunidades",
                clientes: "Clientes",
                oportunidades_valor: 50,
                prospectos_valor: 80,
                clientes_valor: 30,
                cartera: 10,
                proveedores: 30,
                visitas: 4,
                cotizaciones: 4,
                pieChartData: fnPieChartDat(80, 20, '#D22919'),
                image: false,
                imageUrl: "/assets/img/pers1.jpg",
                comision: ' 2000',
                comisionMes: '  500',
                mes: 'Nov',
                moneda: 'S/.',
                colorComision: 'red'

            },
            {
                id: 2,
                nombre: "Samuel Quintero",
                cantidad: "2,000,000",
                porcentaje: 10,
                titleBar: "Gerente Comercial - Lima",
                prospectos: "Prospectos",
                oportunidades: "Oportunidades",
                clientes: "Clientes",
                prospectos_valor: 50,
                oportunidades_valor: 80,
                clientes_valor: 60,
                cartera: 10,
                proveedores: 30,
                visitas: 4,
                cotizaciones: 4,
                pieChartData: fnPieChartDat(70, 30, '#FC6719'),
                image: false,
                imageUrl: "/assets/img/pers2.jpg",
                comision: '1000',
                mes: 'Nov',
                moneda: 'S/.',
                comisionMes: '750'
            },
            {
                id: 3,
                nombre: "Andrés Pinedo",
                cantidad: "2,000,000",
                porcentaje: 10,
                titleBar: "Gerente Comercial - Lima",
                prospectos: "Prospectos",
                oportunidades: "Oportunidades",
                clientes: "Clientes",
                prospectos_valor: 80,
                oportunidades_valor: 50,
                clientes_valor: 70,
                cartera: 10,
                proveedores: 30,
                visitas: 4,
                cotizaciones: 4,
                pieChartData: fnPieChartDat(42, 58, '#F6A704'),
                image: false,
                imageUrl: "/assets/img/pers3.png",
                comision: '1000',
                comisionMes: '2000',
                mes: 'Nov',
                moneda: 'S/.',


            },
            {
                id: 4,
                nombre: "Alberto Alcántara",
                cantidad: "2,000,000",
                porcentaje: 10,
                titleBar: "Gerente Comercial - Lima",
                prospectos: "Prospectos",
                oportunidades: "Oportunidades",
                clientes: "Clientes",
                prospectos_valor: 35,
                oportunidades_valor: 60,
                clientes_valor: 85,
                cartera: 10,
                proveedores: 30,
                visitas: 4,
                cotizaciones: 4,
                pieChartData: fnPieChartDat(25, 80, '#FFED00'),
                image: false,
                imageUrl: "/assets/img/pers4.png",
                comision: ' 1200',
                comisionMes: ' 2500',
                mes: 'Nov',
                moneda: 'S/.',


            },
            {
                id: 5,
                nombre: "Carlos Revoledo",
                cantidad: "2,000,000",
                porcentaje: 10,
                titleBar: "Gerente Comercial - Lima",
                prospectos: "Prospectos",
                oportunidades: "Oportunidades",
                clientes: "Clientes",
                prospectos_valor: 80,
                oportunidades_valor: 60,
                clientes_valor: 60,
                cartera: 10,
                proveedores: 30,
                visitas: 4,
                cotizaciones: 4,
                pieChartData: fnPieChartDat(80, 20, '#D22919'),
                image: false,
                imageUrl: "/assets/img/pers5.jpeg",
                comision: ' 1000',
                comisionMes: '2100',
                mes: 'Nov',
                moneda: 'S/.',

            },
            {
                id: 6,
                nombre: "Christian Moreno",
                cantidad: "2,000,000",
                porcentaje: 10,
                titleBar: "Gerente Comercial - Lima",
                prospectos: "Prospectos",
                oportunidades: "Oportunidades",
                clientes: "Clientes",
                prospectos_valor: 50,
                oportunidades_valor: 80,
                clientes_valor: 70,
                cartera: 10,
                proveedores: 30,
                visitas: 4,
                cotizaciones: 4,
                pieChartData: fnPieChartDat(80, 20, '#D22919'),
                image: false,
                imageUrl: "/assets/img/pers6.jpg",
                comision: '3000',
                comisionMes: '3000',
                mes: 'Nov',
                moneda: 'S/.',


            },

        ];
    }
    ready(event, index) {
        console.log(event, index);
        this.listaNombres[index].image = true;
    }





}


