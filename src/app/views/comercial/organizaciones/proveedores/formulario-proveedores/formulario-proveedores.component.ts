import { Component, AfterViewInit, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { ToastPlugin } from "../../../../../plugins/toast.plugin";
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormularioProveedoresService } from './formulario-proveedores.service';
import { RucValidation } from 'src/app/validators/ruc-validation.validator';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

declare var $: any;

@Component({
    selector: 'formulario-proveedores',
    templateUrl: 'formulario-proveedores.template.html',
    providers: [
        ToastPlugin
    ]
})
export class FormularioProveedoresComponent implements AfterViewInit, OnInit {
    //provedorControl: FormGroup;
    public datos_1: boolean;
    public alertCircle: boolean = false;
    public links: Array<any>;
    public datos_2: boolean;
    public formformularioProveedor: any;
    public lstProveedores: any;
    public idtipo: Array<any>;
    public departamento: Array<any>;
    public marca: Array<any>;
    public distrito: any;
    public provincias: any;
    public idtipobien: any;
    public titulo: string;
    public nombreComercial: string;
    public iddistrito: any;
    public iddepartamento: any;
    public idprovincia: any;
    public idtiproveedor: any;
    public idcliente: number;
    public lstProveedor: any;


    constructor(private router: Router, private _toast: ToastPlugin,
        private formBuilder: FormBuilder,
        private activatedRoute: ActivatedRoute,
        private _formularioservice: FormularioProveedoresService) {
        this.datos_1 = true;
        this.datos_2 = true;
        this.links = [
            { titulo: 'Nuevo Proveedor', link: "/Operaciones/cotizacion/Agregar" }
        ];

        // validar la url
        this.activatedRoute.params.subscribe(params => {

            this.idcliente = Number(params.id);
            if (params.id) {
                this.idcliente = params.id;
                this.ConsultarProveedor()
                this.links[0].titulo = "Editar Proveedor";
                this.titulo = "EDITAR PROVEEDOR"
            } else {
                this.idcliente = 0;
                this.titulo = 'NUEVO PROVEEDOR'
            }
        });

    }

    ConsultarProveedor() {
        this._formularioservice.consultarProveedor(this.idcliente).subscribe(
            response => {
                this.initForm(response['proveedor'][0]);


            },
            error => {
                console.log(error);
            }
        );
    }

    comercialNombre(event) {
        console.log(event);
        
        if (this.formformularioProveedor.controls.ruc.value == event) {
            this.alertCircle = true;

        } else {
            this.alertCircle = false;

        }

    }

    ngOnInit(): void {
        this.initForm({});
        this.marca = [
            { id: 1, value: 'ge', text: "" },
            { id: 2, value: 'ge', text: "marca 1" },
            { id: 3, value: 'ge', text: "marca  2" },
            { id: 4, value: 'ge', text: "marca 3" },
            { id: 5, value: 'ge', text: "marca 4" },
            { id: 6, value: 'ge', text: "marca 5" },
            { id: 7, value: 'ge', text: "marca 6" },
            { id: 8, value: 'ge', text: "marca 7" },
            { id: 9, value: 'ge', text: " marca 8" },
        ];

        this.listarProvivincias()
        this.listarTipoBien()

    }

    //  valida formulario
    initForm(data) {

        this.formformularioProveedor = new FormGroup({
            ruc: new FormControl(
                data.ruc ? data.ruc : "",
                [
                    Validators.required,
                    RucValidation.isValid
                    // Validators.minLength(11),
                    // Validators.maxLength(11)
                ]
            ),
            nom_comercial: new FormControl(data.nom_comercial ? data.nom_comercial : "" , [Validators.required]),
            razon_social: new FormControl(data.razon_social ? data.razon_social : "", [Validators.required]),

            tipo: new FormControl(data.tipo ? data.tipo : ""),
            tipoPro: new FormControl(data.tipoPro ? data.tipoPro : ""),
            iddistrito: new FormControl(data.iddistrito ? data.iddistrito : "", [Validators.required]),
            direcccion: new FormControl(data.direcccion ? data.direcccion : ""),

            telefono: new FormControl(data.telefono ? data.telefono : ""),
            idprovincia: new FormControl(data.idprovincia ? data.idprovincia : "", [Validators.required]),
            idtipo: new FormControl(data.idtipo ? data.idtipo : "", [Validators.required]),

            banco: new FormControl(data.banco ? data.banco : "", [Validators.required]),
            cuenta: new FormControl(data.cuenta ? data.cuenta : "", [Validators.required]),

        });

    }

    listarProvivincias() {
        this.provincias = [];
        this._formularioservice.listarProvincias().subscribe(
            response => {
                response['provincia'].forEach(value => {
                    this.provincias.push({
                        id: value.id,
                        text: value.descripcion
                    });
                });

            },
            error => {
                console.log(error);
            }
        );

    }

    listarDistritos(id) {
        console.log(this.formformularioProveedor.controls.idprovincia.value);

        this.distrito = [];
        this._formularioservice.listarDistritos(id).subscribe(
            response => {
                console.log(response);
                response['distrito'].forEach(value => {
                    this.distrito.push({
                        id: value.id,
                        text: value.nombre
                    });
                });
            },
            error => {
                console.log(error);
            }
        );
    }

    listarTipoBien() {
        this.idtipo = [];

        this._formularioservice.listarTipoBien().subscribe(
            response => {
                console.log(response);
                response['bien_nivel'].forEach(value => {
                    this.idtipo.push({
                        id: value.id,
                        text: value.descripcion
                    });
                });
            },
            error => {
                console.log(error);
            }
        );
    }


    // Función de formulario en responsive
    ngAfterViewInit() {
        let fn_width = (width) => {
            if (width <= 1024) {
                this.datos_1 = true;
                this.datos_2 = false;
            } else {
                this.datos_1 = true;
                this.datos_2 = true;
            }
        };
        fn_width($(window).width());
        $(window).resize(() => {
            fn_width($(window).width());
        });
    }
    fnDatos1() {
        this.datos_1 = true;
        this.datos_2 = false;
    }
    fnDatos2() {
        this.datos_1 = false;
        this.datos_2 = true;

    }

    capturarBien(event) {
        this.idtipobien = parseInt(event.id, 10);
        this.formformularioProveedor.controls.idtipo.setValue(this.idtipobien);
    }
    capturaRDistrito(event) {
        this.iddistrito = parseInt(event.id, 10);
        this.formformularioProveedor.controls.iddistrito.setValue(this.iddistrito);
    }

    capturarProvincia(event) {
        this.idprovincia = parseInt(event.id, 10);
        this.formformularioProveedor.controls.idprovincia.setValue(this.idprovincia);
        this.listarDistritos(this.idprovincia)
    }

    // Funcion Guardar de Modal
    guardar() {
        swal({
            title: '¿Está seguro de guardar los datos?',
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

                let data: any = {
                    idtipobien: this.formformularioProveedor.controls.idtipo.value,
                    iddistrito: this.formformularioProveedor.controls.iddistrito.value,
                    ruc: this.formformularioProveedor.controls.ruc.value,
                    razonsocial: this.formformularioProveedor.controls.razon_social.value,
                    nom_comercial: this.formformularioProveedor.controls.nom_comercial.value,
                    direccion: this.formformularioProveedor.controls.direcccion.value,
                    // idtiproveedor: this.formformularioProveedor.controls.tipo.value,
                    idtiproveedor: 1,
                    telefono: this.formformularioProveedor.controls.telefono.value,
                    provincia: this.formformularioProveedor.controls.idprovincia.value,
                    banco: this.formformularioProveedor.controls.banco.value,
                    cuenta: this.formformularioProveedor.controls.cuenta.value,
                    celular: "",
                }
                console.log(data);
                console.log(this.idcliente);

                if (this.idcliente === 0) {
                    this._formularioservice.guardarProveedores(data).subscribe(
                        response => {
                            console.log(response);

                            this.confirmarGuardarProveedor();
                        },
                        error => {

                        }
                    );
                } else {
                    data.id = Number(this.idcliente);
                    this._formularioservice.editarProveedores(data).subscribe(
                        response => {
                            console.log(response);

                            this.confirmarGuardarProveedor();
                        },
                        error => {

                        }
                    );
                }
            }

        });
    }

    validarBtnGuardar() {
        return true;
    }

    capturarProducto($event) {

    }


    GuardarProveedor() { }
    cancelarprovedor() {
        this.router.navigate(['/comercial/organizaciones/proveedores']);
    }


    confirmarGuardarProveedor() {
        this.router.navigate(['/comercial/organizaciones/proveedores']);
    }

    obetenerCuenta() {

        console.log(this.formformularioProveedor.controls);

    }

    // lstEditarProveedor(){

    // }
}
