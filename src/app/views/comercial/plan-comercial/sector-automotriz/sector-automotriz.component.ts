import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ToastPlugin } from "../../../../plugins/toast.plugin";
import { Router } from '@angular/router';
import swal from 'sweetalert2';
declare var $: any;


@Component({
    selector: 'sector-automotriz',
    templateUrl: 'sector-automotriz.template.html',
    providers: [
        ToastPlugin
    ]
})
export class AutomotrizComponent implements OnInit {

    public links: Array<any>;
    public spinner: boolean;
    public automotriz: Array<any>;
    public lstAcciones: Array<any>;



    constructor(private router: Router, private _toast: ToastPlugin) {
        this.spinner = false;
        this.links = [
            { titulo: 'Automotriz' },

        ];
    }
    ngOnInit() {
        this.automotriz = [
            {
                segmento: 'Ligeros',
                acumulado: '78,000',
                ene: '9,900',
                feb: '9,900',
                mar: '9,900',
                abr: '9,900',
                may: '9,900',
                jun: '9,900',
                jul: '9,900',
                ago: '76,700',
                sep: '76,700',
                oct: '76,700',
                nov: '76,700',
                dic: '76,700',

           },
            {
                segmento: 'Comercial',
                acumulado: '17,300',
                ene: '2,900',
                feb: '2,900',
                mar: '2,900',
                abr: '2,900',
                may: '2,900',
                jun: '2,900',
                jul: '2,900',
                ago: '16,300',
                sep: '16,300',
                oct: '16,300',
                nov: '16,300',
                dic: '16,300',
            }
            ,
            {
                segmento: 'Omnibus',
                acumulado: '2,743',
                ene: '300',
                feb: '300',
                mar: '300',
                abr: '300',
                may: '300',
                jun: '300',
                jul: '300',
                ago: '2,383',
                sep: '2,383',
                oct: '2,383',
                nov: '2,383',
                dic: '2,383',
            },
            {
                segmento: 'Camión/Ren',
                acumulado: '7,443',
                ene: '680',
                feb: '680',
                mar: '680',
                abr: '680',
                may: '680',
                jun: '680',
                jul: '680',
                ago: '7,743',
                sep: '7,743',
                oct: '7,743',
                nov: '7,743',
                dic: '7,743',
            }
        ];
        this.lstAcciones = [
            {
                item1: 'Operaciones LT',
                n1: '300',
                n2: '25',
                n3: '25',
                n4: '25',
                n5: '25',
                n6: '25',
                n7: '25',
                n8: '25',
                n9: '25',
                n10: '25',
                n11: '25',
                n12: '25',
                n13: '25',
            },

            {
                item1: 'MKS',
                n1: '3.4%',
                n2: '3.2%',
                n3: '1.6%',
                n4: '1.6%',
                n5: '1.6%',
                n6: '1.6%',
                n7: '1.6%',
                n8: '1.6%',
                n9: '1.6%',
                n10: '1.6%',
                n11: '1.6%',
                n12: '1.6%',
                n13: '1.6%',
            },

        ];

    }
    dashboard() {
        this.router.navigate(['/comercial/plan-comercial/sector-automotriz/dashboard']);
    }
}
