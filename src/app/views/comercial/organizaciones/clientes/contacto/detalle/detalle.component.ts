import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DetalleService } from './detalle.service';
import * as moment from 'moment';
import { RUTAS_COMERCIAL_ORGANIZACIONES } from 'src/config/rutas-modulos/rutas-comercial';

declare var $: any;

@Component({
    selector: 'contacto-detalle',
    templateUrl: 'detalle.template.html',

    providers: [
        DetalleService
    ]
})
export class ContactoDetalleComponent implements OnInit {
    public links: Array<any>;
    public clienteId: any;
    public id_contacto: number;
    public contacto: any;
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private _detalleService: DetalleService
    ) {
        this.links = [
            { titulo: 'Detalle de Contacto' },

        ];
        this.contacto = {};
        this.activatedRoute.params.subscribe(params => {
            console.log(params)
            if (params.id_contacto) {
                this.id_contacto = Number(params.id_contacto);
                this.clienteId = Number(params.id);

            }

        });
    }
    verCliente() {
        this._detalleService.detalle(this.id_contacto).subscribe(
            response => {
                this.contacto = response['data'][0];

                if (this.contacto.fecha_ncacimiento) {
                    this.contacto.fecha_ncacimiento = moment(this.contacto.fecha_ncacimiento).format('DD/MM/YYYY');
                }
            },
            error => {
                console.log(error);
            }
        );
    }
    ngOnInit(): void {
        this.verCliente();
    }
    atras() {
        let clientes = RUTAS_COMERCIAL_ORGANIZACIONES.clientes;
        this.router.navigate([clientes.init + '/' + this.clienteId + '/' + clientes.contacto.init]);
    }
}

