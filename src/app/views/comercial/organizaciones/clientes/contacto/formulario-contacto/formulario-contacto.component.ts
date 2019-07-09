import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ClienteFormularioContactoService } from './formulario-contacto.service';
import * as moment from 'moment';
import { RUTAS_COMERCIAL_ORGANIZACIONES } from 'src/config/rutas-modulos/rutas-comercial';
import { LoginModule } from 'src/app/views/login/login.module';
declare var $: any;



@Component({
    selector: 'formulario-contacto',
    templateUrl: 'formulario-contacto.template.html',
    providers: [
        ClienteFormularioContactoService
    ]
})
export class FormularioContactoComponent implements OnInit {
    // Cabecera de cada Vista
    public links: Array<any>;
    public canalFavoritos: Array<any>;
    public formformularioContacto: any;
    public lstEditarContacto: any;
    public Nombre: string;
    public Cargo: string;
    public Email: string;
    public Apellidos: string;
    public Celular: number;
    public Celular2: number;
    public nuevo: boolean = true;
    public dataSelectedCanalFavorito: any;
    @ViewChild('progressbar') progressbar: ElementRef;
    returnUrl: any;
    public idcliente: number;
    public id_contacto: number;
    @ViewChild('fechaInicio') elFechaInicio: ElementRef;
    constructor(
        private _location: Location,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private _clienteFormularioContactoService: ClienteFormularioContactoService
    ) {
        this.Nombre = "";
        this.Cargo = "";
        this.Email = "";
        this.Apellidos = "";
        this.Celular = 0;
        this.Celular2 = 0;
        this.dataSelectedCanalFavorito = { id: "", text: "" };
        this.canalFavoritos = [];
        this.links = [
            { titulo: 'Crear Contactos', link: "/comercial/organizaciones/clientes/contacto" }
        ];
        this.idcliente = 0;
        this.id_contacto = 0;
        this.activatedRoute.params.subscribe(params => {
            console.log(params)
            if (params.id) {
                this.idcliente = Number(params.id);
            }
            if (params.id_contacto) {
                this.id_contacto = Number(params.id_contacto);
                this.links[0].titulo = "Editar Contacto";                
                this.nuevo = false;
                this.initFormEdit();
            }

        });
    }
    initFormEdit() {
        this._clienteFormularioContactoService.ver(this.id_contacto).subscribe(
            response => {
                this.initForm(response['data'][0]);
            },
            error => {
                console.log(error);
            }
        );
    }
    initForm(data) {
        this.formformularioContacto = new FormGroup({
            nombres: new FormControl(data.nombres ? data.nombres : "", [Validators.required]),
            cargo: new FormControl(data.cargo ? data.cargo : "", [Validators.required]),
            email: new FormControl(data.email ? data.email : "", [Validators.required, Validators.email]),

            apellido: new FormControl(data.apellidos ? data.apellidos : "", [Validators.required]),
            celular: new FormControl(data.celular01 ? data.celular01 : "", [Validators.required]),
            celular2: new FormControl(data.celular02 ? data.celular02 : ""),

            telefono: new FormControl(data.telefono01 ? data.telefono01 : ""),
            fechaNacimiento: new FormControl(data.fecha_ncacimiento ? data.fecha_ncacimiento : "", [Validators.required]),
            canalId: new FormControl(data.idcanal ? data.idcanal : "")
        });
        if (data.fecha_ncacimiento) {
            this.elFechaInicio.nativeElement.value = moment(data.fecha_ncacimiento).format('DD/MM/YYYY');
        }
        if (data.idcanal) {
            this.dataSelectedCanalFavorito.id = data.idcanal;
        }
    }
    ngOnInit() {
        this.initForm({});
        let param = this.router.parseUrl(this.router.url);
        this.lstEditarContacto = param.queryParams;
        this.listaEditarContacto();
        this.listarCanalFavorito();
    }
    listarCanalFavorito() {
        this.canalFavoritos = [];
        this._clienteFormularioContactoService.listarCanalContacto().subscribe(
            response => {
                response['data'].forEach((value, index) => {
                    this.canalFavoritos.push({
                        id: value.id,
                        text: value.descripcion
                    });
                    if (value.id == this.dataSelectedCanalFavorito.id) {
                        this.dataSelectedCanalFavorito.text = value.descripcion;
                    }
                });
            },
            error => {
                console.log(error);
            }
        )
    }
    selectedCanalFavorito(event) {
        this.formformularioContacto.controls.canalId.setValue(event.id);
    }
    selectedFechaNacimiento(event) {
        console.log(this.formformularioContacto);
        this.formformularioContacto.controls.fechaNacimiento.setValue(event);
    }
    guardar() {
        let clientes = RUTAS_COMERCIAL_ORGANIZACIONES.clientes;
        swal({
            title: '¿Estás seguro de guardar los datos?',
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
                let data: any = {
                    id: this.idcliente,
                    nombres: this.formformularioContacto.controls.nombres.value,
                    apellidos: this.formformularioContacto.controls.apellido.value,

                    celular01: this.formformularioContacto.controls.celular.value,
                    celular02: this.formformularioContacto.controls.celular2.value,
                    telefono01: this.formformularioContacto.controls.telefono.value,

                    cargo: this.formformularioContacto.controls.cargo.value,
                    fecha_nacimiento: moment(this.formformularioContacto.controls.fechaNacimiento.value).format('YYYY-MM-DD'),

                    email: this.formformularioContacto.controls.email.value,
                    idcanal: this.formformularioContacto.controls.canalId.value,
                };
                if (this.id_contacto == 0) {
                    this._clienteFormularioContactoService.nuevo(data).subscribe(
                        response => {

                            this.router.navigate([clientes.init + '/' + this.idcliente + '/' + clientes.contacto.init]);
                        },
                        error => {
                            console.log(error);
                        }
                    );
                } else {
                    this._clienteFormularioContactoService.editar(data).subscribe(
                        response => {
                            let clientes = RUTAS_COMERCIAL_ORGANIZACIONES.clientes;
                            this.router.navigate([clientes.init + '/' + this.idcliente + '/' + clientes.contacto.init]);
                        },
                        error => {
                            console.log(error);
                        }
                    );

                }
            }
        })
    }
    cancelarAddContacto() {
        let clientes = RUTAS_COMERCIAL_ORGANIZACIONES.clientes;
        this.router.navigate([clientes.init + '/' + this.idcliente + '/' + clientes.contacto.init]);
    }

    // cancelarEditarContacto(){
    //     this.router.navigate(['/comercial/organizaciones/cliente/contacto']);
    // }

    cancelarConnsultaRuc() {
        let clientes = RUTAS_COMERCIAL_ORGANIZACIONES.clientes;
        this.router.navigate([clientes.init + '/' + this.idcliente + '/' + clientes.contacto.init]);
    }

    listaEditarContacto() {

        this.Nombre = this.lstEditarContacto.Nombre;
        this.Cargo = this.lstEditarContacto.Cargo;
        this.Email = this.lstEditarContacto.Email;
        this.Apellidos = this.lstEditarContacto.Apellidos;
        this.Celular = this.lstEditarContacto.Celular;
        this.Celular2 = this.lstEditarContacto.Celular2;
        console.log(this.lstEditarContacto.Apellidos);

    }

}