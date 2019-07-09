import { Component, ViewChild, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { ToastPlugin } from "../../../../plugins/toast.plugin";
import { ProveedoresService } from './proveedores.service';
import { RUTAS_COMERCIAL_ORGANIZACIONES } from 'src/config/rutas-modulos/rutas-comercial';


@Component({
    selector: 'page-proveedores',
    templateUrl: 'proveedores.template.html',
    providers: [
        ToastPlugin
    ]
})
export class ProveedoresComponent implements OnInit {

    public links: Array<any>;
    public spinner: boolean;
    public informacion: boolean;
    public ubicacionProvedores: string;
    public btnAsignarProveedor: boolean = false;
    public loading: boolean;
    public dataCliente: Array<any>;
    public dataSelected: any;
    public displayedColumns: string[] = ['position', 'ruc', 'rsocial', 'tfijo', 'nombre', 'producto', 'marca'];
    public Proveedores: Array<any>;
    public provedorEliminar: any;
    public selectItem: any;
    public pagina: number;
    public numfilas: number;
    public buscar: any;
    constructor(private router: Router, private _toast: ToastPlugin, private _proveerdorservise: ProveedoresService) {
        this.spinner = false
        this.Proveedores = [];
        this.pagina = 1;
        this.numfilas = 10;
        this.buscar = "";
        this.loading = false;
        this.links = [
            { titulo: 'Proveedores', link: "/comercial/organizaciones/proveedores" }
        ];

        this.dataSelected = [];
        this.informacion = false;
        this.selectItem = {};
    }
    ngOnInit() {
        this.ubicacionProvedores = " GRUPO PANA";
        this.listarProveedores();
    }

    listarProveedores(scrolling: boolean = false) {
        this.loading = true;
        if (!scrolling) {
            this.Proveedores = [];
            this.pagina = 1;
        } else {
            this.pagina++;
        }
        let data = {
            razonsocial: this.buscar,
            pagina: this.pagina,
            numfilas: this.numfilas
        };
        this._proveerdorservise.listarProveedores(data).subscribe(
            response => {
                response['proveedores'].forEach(element => {
                    this.Proveedores.push(element);
                    console.log(this.Proveedores);
                    
                });
                this.Proveedores = response['proveedores'];
            },
            error => {

            },
            () => {
                this.loading = false;
            }
        );
    }

    applyFilter(filterValue: string) {

    }

    sucursales() {
        let proveedores = RUTAS_COMERCIAL_ORGANIZACIONES.proveedores;
        this.router.navigate([proveedores.init + '/' + this.selectItem.id + '/' + proveedores.sucursales.init ]);
    }


    select(item) {
        this.selectItem = item;
    }

    nuevoProveedor() {
        let proveedores = RUTAS_COMERCIAL_ORGANIZACIONES.proveedores;
        this.router.navigate([ proveedores.nuevo]);

    }
    editarProveedor() {
        let proveedores = RUTAS_COMERCIAL_ORGANIZACIONES.proveedores;
        this.router.navigate([proveedores.init + '/' + this.selectItem.id + '/' + proveedores.editar]);
    }

    eliminar() {
        swal({
            title: '¿Estás seguro de eliminar el cliente?',
            text: "",
            showCancelButton: true,
            reverseButtons: true,
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar',
            allowOutsideClick: false,
            allowEscapeKey: false,
            focusConfirm: false,
            focusCancel: false
        }).then((result) => {
            if (result.value) {
                this._proveerdorservise.eliminar(this.selectItem.id).subscribe(
                    response => {
                        console.log(response);

                        this.listarProveedores();
                    },
                    error => {

                    }
                );
            }
        });
    }
}

