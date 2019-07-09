import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ToastPlugin } from 'src/app/plugins/toast.plugin';
import { RUTAS_COMERCIAL_COTIZACIONES } from 'src/config/rutas-modulos/rutas-comercial';
declare var $: any;


@Component({
    selector: 'tab-gastos',
    templateUrl: 'tab-gastos.template.html',
    providers: [
        ToastPlugin
    ]
})


export class TabGastosComponent implements OnInit {
    @Output() accionGuardar = new EventEmitter();
    @Output() accionAtras = new EventEmitter();
    @Output() accionVercronograma = new EventEmitter();
    
    right: boolean = true;
    down: boolean = false;
    abajo: boolean = false;
    derecha: boolean = true;

    public listaGastos: Array<any>;

    constructor(private _toast: ToastPlugin, private router: Router) {}
    ngOnInit(): void {
        console.log(this.listaGastos);
        console.log("coss");

        this.listaGastos = [
            {
                id: 1,
                cantidad: '02',
                nivel: 'Vehículo',
                tipo: 'Camión',
                marca: 'Volvo FH',
                moneda: 'S',
                precio: '2.200.00',
                gastosSeguro: '1.000.00',
                categoria: ' Categoria I',
                tasa: 3.8,
                gastosLegales: '1.075.00',
                totalGastos: '2,780.00'
            },
            { id: 2, cantidad: '01', nivel: 'Vehículo', tipo: 'Camión', marca: 'Volvo FH', moneda: 'S', precio: '2.500.00', gastosSeguro: '1.500.00', categoria: ' Categoria I', tasa: 3.8, gastosLegales: '1.075.00' },
            // { id: 3, cantidad: '03',  nivel: 'Vehículo', tipo: 'Camión', marca: 'Volvo FH', moneda: 'S', precio: '2.200.00',  gastosSeguro: '1.000.00', categoria: ' Categoria I', tasa: 3.8, gastosLegales: '1.075.00' },
            // { tipo: 'Camión' },
            // { marca: 'Volvo FH' },
            // {moneda: 'S'},
            // {precio: '2.200'}
            // [
            //     { id: 1 },
            //     { cantidad: '02' },
            //     { nivel: 'Vehículo' },
            //     { tipo: 'Camión' },
            //     { marca: 'Volvo 555' }
            // ]
        ];
    }

    modificClass() {
        this.right = !this.right;
        this.down = !this.down;
    }

    modificIcons() {
        this.abajo = !this.abajo;
        this.derecha = !this.derecha;
    }

    cronograma() {
        this.accionVercronograma.emit();
        // this.router.navigate([RUTAS_COMERCIAL_COTIZACIONES.cotizador.cronograma]);

    }
    atras() {
        this.accionAtras.emit();
    }
    guardar() {
        this.accionGuardar.emit({ data: '' });
    }
}
