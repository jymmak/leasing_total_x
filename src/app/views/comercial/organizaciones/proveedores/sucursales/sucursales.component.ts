import { Component, ViewChild, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { ToastPlugin } from "../../../../../plugins/toast.plugin";
import { Router, ActivatedRoute } from '@angular/router';
import { SucursalesService } from './sucursales.service';
import { RUTAS_COMERCIAL_ORGANIZACIONES } from 'src/config/rutas-modulos/rutas-comercial';


@Component({
    selector: 'page-sucursales',
    templateUrl: 'sucursales.template.html',
    providers: [
        ToastPlugin
    ]
})
export class SucursalesComponent implements OnInit {
    public spinner: boolean;
    public links: Array<any>;
    public sucursal: Array<any>;
    public selectItem: any;
    public loading: boolean;
    public pagina: number;
    public numfilas: number;
    public idProvedor: number;
    public idSucursales: number;
    public buscar: any;
    displayedColumns: Array<any> = ['id', 'nombre', 'fijo', 'progress', 'name', 'actionsColumn'];


    constructor(private _toast: ToastPlugin,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private _sucursalservice: SucursalesService) {
        this.spinner = false;
        this.buscar = "";
        this.pagina = 1;
        this.numfilas = 10;
        this.links = [

            { titulo: 'Sucursales' }
        ];
        this.selectItem = {};
        this.idProvedor = 0;
        this.idSucursales = 0;
        // validar la url
        this.activatedRoute.params.subscribe(params => {

            this.idProvedor = Number(params.id);
            this.idSucursales = Number(params.sucursales);
            console.log(params)
            if (params.id) {
                this.idProvedor = parseInt(params.id, 10);
                this.listarSucursales()

            } else {
                this.idProvedor = 0;
            }

        });
    }

    ngOnInit() {
        this.listarSucursales();
        this.list();
    }

    listarSucursales(scrolling: boolean = false) {
        this.loading = true;
        if (!scrolling) {
            this.sucursal = [];
            this.pagina = 1;
        } else {
            this.pagina++;
        }
        let data = {
            //razonsocial: this.buscar,
            pagina: this.pagina,
            numfilas: this.numfilas,
            idproveedor: this.idProvedor,
            paginado: false,
            sucursal: "",


        };
        this._sucursalservice.listaSucursales(data).subscribe(
            response => {
                response['sucursales'].forEach(element => {
                    this.sucursal.push(element);
                });
                this.sucursal = response['sucursales'];
            },
            error => {

            },
            () => {
                this.loading = false;
            }
        );
    }




    list() {
        this.spinner = true;
        setTimeout(() => {
            this.spinner = false;
        }, 1000);
    }
    applyFilter(filterValue: string) {
    }
    // Funcion Eliminar de Modal
    eliminar() {
        swal({
            title: '¿Está seguro de eliminar la sucursal?',
            text: "",
            showCancelButton: true,
            reverseButtons: true,
            cancelButtonClass: "mat-raised-button mat-primary",
            confirmButtonClass: "mat-raised-button mat-primary",
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar',
            allowOutsideClick: false,
            allowEscapeKey: false,
            focusConfirm: false,
            focusCancel: false
        }).then((result) => {
            if (result.value) {
                console.log(result);
                this._sucursalservice.eliminar(this.selectItem.id).subscribe(
                    response => {
                        console.log(response);

                        this.listarSucursales();
                    },
                    error => {
                        console.log(error);
                    }
                );
            }
        });

    }
    select(item) {
        this.selectItem = item;
    }
    atras() {
        this.router.navigate(['/comercial/organizaciones/proveedores']);
    }

    editarSucursal() {
        let proveedores = RUTAS_COMERCIAL_ORGANIZACIONES.proveedores;
        this.router.navigate([proveedores.init + '/' + this.idProvedor + '/' + proveedores.sucursales.init + '/' + this.selectItem.id + '/' + proveedores.sucursales.editar]);
    }

    nuevoSucursal() {
        let proveedores = RUTAS_COMERCIAL_ORGANIZACIONES.proveedores;
        this.router.navigate([proveedores.init + '/' + this.idProvedor + '/' + proveedores.sucursales.nuevo]);

    }

    ubicacionProvedor() {
        let proveedores = RUTAS_COMERCIAL_ORGANIZACIONES.proveedores;
        this.router.navigate([proveedores.init + '/' + this.idProvedor + '/' + proveedores.sucursales.init + '/' + this.selectItem.id + '/' + proveedores.ubicacion]);

       
    }


    contacto() {
        let proveedores = RUTAS_COMERCIAL_ORGANIZACIONES.proveedores;
        this.router.navigate([proveedores.init + '/' + this.idProvedor+ '/' + proveedores.sucursales.init + '/' + this.selectItem.id + '/' + proveedores.contacto.init]);
    }

}

