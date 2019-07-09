import { Location } from '@angular/common';
import { AfterViewInit, Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ToastPlugin } from "../../../../../../plugins/toast.plugin";
import { RUTAS_COMERCIAL_COTIZACIONES } from 'src/config/rutas-modulos/rutas-comercial';

declare var $: any;



@Component({
    selector: 'cronograma-component',
    templateUrl: 'cronograma.template.html',
    providers: [
        ToastPlugin
    ]
})


export class CronogramaComponent implements OnInit, AfterViewInit {
    @Output() accionAtras = new EventEmitter();
    // Cabecera de cada Vista
    public links: Array<any>;
    public spinner: boolean;
    public tablaCronograma: Array<any>;


    constructor(private _location: Location, private _toast: ToastPlugin, private router: Router) {
        this.links = [

            { titulo: 'Operaciones', link: "/comercial/cotizacion/cotizador" },
            { titulo: 'Cotización', link: "/comercial/cotizacion/cotizador" },
        ];
    }

    ngOnInit() {
        this.list();
        this.tablaCronograma = [
            {
                NoCuota: 1,
                Capital: "  $ 1,620.61",
                Seguro: "  $ 135.34",
                Gastos: " $ 16.75",
                Interes: " $ 1, 726.74",
                Cuota: "   $ 1, 016.49",
                Comision: "$ 2.5",
                IGV: "$ 1, 830.51",
                Total: " $ 12, 000.00",
            },

            {
                NoCuota: 1,
                Capital: "  $ 1,620.61",
                Seguro: "  $ 135.34",
                Gastos: " $ 16.75",
                Interes: " $ 1, 726.74",
                Cuota: "   $ 1, 016.49",
                Comision: "$ 2.5",
                IGV: "$ 1, 830.51",
                Total: " $ 12, 000.00",
            },
            {
                NoCuota: 1,
                Capital: "  $ 1,620.61",
                Seguro: "  $ 135.34",
                Gastos: " $ 16.75",
                Interes: " $ 1, 726.74",
                Cuota: "   $ 1, 016.49",
                Comision: "$ 2.5",
                IGV: "$ 1, 830.51",
                Total: " $ 12, 000.00",
            },

            {
                NoCuota: 1,
                Capital: "  $ 1,620.61",
                Seguro: "  $ 135.34",
                Gastos: " $ 16.75",
                Interes: " $ 1, 726.74",
                Cuota: "   $ 1, 016.49",
                Comision: "$ 2.5",
                IGV: "$ 1, 830.51",
                Total: " $ 12, 000.00",
            },

            {
                NoCuota: 1,
                Capital: "  $ 1,620.61",
                Seguro: "  $ 135.34",
                Gastos: " $ 16.75",
                Interes: " $ 1, 726.74",
                Cuota: "   $ 1, 016.49",
                Comision: "$ 2.5",
                IGV: "$ 1, 830.51",
                Total: " $ 12, 000.00",
            },

            {
                NoCuota: 1,
                Capital: "  $ 1,620.61",
                Seguro: "  $ 135.34",
                Gastos: " $ 16.75",
                Interes: " $ 1, 726.74",
                Cuota: "   $ 1, 016.49",
                Comision: "$ 2.5",
                IGV: "$ 1, 830.51",
                Total: " $ 12, 000.00",
            },
            {
                NoCuota: 1,
                Capital: "  $ 1,620.61",
                Seguro: "  $ 135.34",
                Gastos: " $ 16.75",
                Interes: " $ 1, 726.74",
                Cuota: "   $ 1, 016.49",
                Comision: "$ 2.5",
                IGV: "$ 1, 830.51",
                Total: " $ 12, 000.00",
            },

            {
                NoCuota: 1,
                Capital: "  $ 1,620.61",
                Seguro: "  $ 135.34",
                Gastos: " $ 16.75",
                Interes: " $ 1, 726.74",
                Cuota: "   $ 1, 016.49",
                Comision: "$ 2.5",
                IGV: "$ 1, 830.51",
                Total: " $ 12, 000.00",
            },
            {
                NoCuota: 1,
                Capital: "  $ 1,620.61",
                Seguro: "  $ 135.34",
                Gastos: " $ 16.75",
                Interes: " $ 1, 726.74",
                Cuota: "   $ 1, 016.49",
                Comision: "$ 2.5",
                IGV: "$ 1, 830.51",
                Total: " $ 12, 000.00",
            },

            {
                NoCuota: 1,
                Capital: "  $ 1,620.61",
                Seguro: "  $ 135.34",
                Gastos: " $ 16.75",
                Interes: " $ 1, 726.74",
                Cuota: "   $ 1, 016.49",
                Comision: "$ 2.5",
                IGV: "$ 1, 830.51",
                Total: " $ 12, 000.00",
            },
            {
                NoCuota: 1,
                Capital: "  $ 1,620.61",
                Seguro: "  $ 135.34",
                Gastos: " $ 16.75",
                Interes: " $ 1, 726.74",
                Cuota: "   $ 1, 016.49",
                Comision: "$ 2.5",
                IGV: "$ 1, 830.51",
                Total: " $ 12, 000.00",
            },





        ];
    }

    ngAfterViewInit() {

        //   $('.related-news').slimscroll({
        //        height: '450px',
        //        width: '100%',
        //       railVisible: true,
        //       alwaysVisible: true,
        //      wheelStep: 10,
        //      color: '#ffcc00',
        //      scrollTo: '50px',
        //  });

    }

    list() {
        this.spinner = true;
        setTimeout(() => {


            this.spinner = false;
        }, 1000);
    }

    applyFilter(filterValue: string) {

    }
    atras() {
        this.accionAtras.emit();

    }

}
