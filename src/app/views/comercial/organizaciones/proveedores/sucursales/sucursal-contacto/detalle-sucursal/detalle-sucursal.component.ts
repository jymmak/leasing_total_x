import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;

@Component({
    selector: 'detalle-sucursal',
    templateUrl: 'detalle-sucursal.template.html',

    providers: [
    ]
})
export class DetalleSucursalComponent implements OnInit {
    public links: Array<any>;
    public detalleCliente: boolean = true;
    public spinner: boolean;
    public nombres: string;
    public tipo: string;
    public cargo: string;
    public telefono: number;
    public email: string;
    public fechaNac: string;
    public celular: number;

    constructor(private router: Router) {
        this.spinner = false;

        this.links = [
            { titulo: 'Detalle de Contacto' },

        ];
    }
    ngOnInit(): void {
        this.nombres = 'José Carlos';
        this.tipo = 'Principal';
        this.cargo = "Gerente de Finanzas";
        this.telefono = 3823934;
        this.email = 'jtorres@gmail.com';
        this.fechaNac = '09/12/1965';
        this.celular = 983187353;



    }
    init() {

    }
    close() {


    }



    clientedetalle3() {
        this.router.navigate(['/comercial/organizaciones/cliente']);
    }

    btnVolver() {
        this.router.navigate(['/comercial/organizaciones/cliente']);
    }

    guardarDetallesCliente() { }
}

