import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked, Output, EventEmitter, } from '@angular/core';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ToastPlugin } from "../../../../../plugins/toast.plugin";
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConsultaRucService } from './consulta-ruc.service';
import { RucValidation } from '../../../../../validators/ruc-validation.validator';
declare var $: any;

import { ActivatedRoute } from '@angular/router';
import { RUTAS_COMERCIAL_COTIZACIONES } from 'src/config/rutas-modulos/rutas-comercial';


@Component({
    selector: 'consulta-ruc-component',
    templateUrl: 'consulta-ruc.template.html',
    providers: [
        ToastPlugin,
        ConsultaRucService
    ]
})
export class VistaConsultaRucComponent {
    @Output() accionGuardar = new EventEmitter();
    // Cabecera de cada Vista
    public links: Array<any>;
    public miForm;

    @ViewChild('vistaConsultaRuc') elVistaConsultaRuc: ElementRef;
    @ViewChild('NombreRuc') elNameRuc: ElementRef;
    // public elNameRuc: any;
    public resultado_busqueda: boolean;
    public cliente_existe: boolean;
    public formConsultarRuc: any;
    public Ruc: number;
    public data: any;
    public spinner: boolean;



    constructor(private _toast: ToastPlugin, private _formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private router: Router, private _consultaRucService: ConsultaRucService) {
        this.resultado_busqueda = false;
        this.cliente_existe = true;
        this.data = {};
        this.spinner = false;
        this.formInit();
    }
    agregarClaseButon() {
        // let digitos = document.querySelectorAll('.btn-rounded').value.length;
        let digitos2 = (<HTMLInputElement>document.querySelector('.btn-rounded')).value.length;
        if (digitos2 === 11) {
            $("#btnConsultaRuc").addClass(" button_ln-gradient");
        } else {
            $("#btnConsultaRuc").removeClass(" button_ln-gradient");
        }
    }

    consultar() {

    }
    formInit() {
        this.formConsultarRuc = new FormGroup({
            ruc: new FormControl("", [
                Validators.required,
                Validators.minLength(11),
                Validators.maxLength(11),

            ]),
        });
    }
    mensajeValidacion() {
        let control = this.formConsultarRuc.get('ruc');
        if (control.touched && control.errors) {
            if (control.errors.required) {
                return "Campo obligatorio.";
            }
            if (control.dirty && control.errors.invalidRuc) {
                return "RUC no válido.";
            }
        }
        return false;
    }
    cancelarConnsultaRuc() {
        this.router.navigate([RUTAS_COMERCIAL_COTIZACIONES.cotizaciones.init]);

    }

    cotizar() {
        this.accionGuardar.emit({ data: '' });
        // this.router.navigate([RUTAS_COMERCIAL_COTIZACIONES.cotizador.init]);
    }


    guardarCliente() {
        swal({
            title: '¿Desea registrar el cliente TRANSPORTES JOSE S.A.?',
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
                this._toast.get({
                    tipo: 'success',
                    titulo: 'Operación exitosa.',
                    contenido: "el cliente TRANSPORTES JOSE S.A. ha sido registrado."
                });
                $('#vista-consulta-ruc').modal('hide');
                // this.router.navigate([RUTAS_COMERCIAL_COTIZACIONES.cotizador.init]);
            }
        });
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
                this._toast.get({ tipo: 'success', titulo: 'Operación exitosa.', contenido: "La cotización ha sido registrada." });
                $("#cotizador").modal("hide");
            }
        });
    }




}

