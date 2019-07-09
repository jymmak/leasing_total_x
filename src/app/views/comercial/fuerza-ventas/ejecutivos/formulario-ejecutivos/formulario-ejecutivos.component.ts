import { Component, AfterViewInit } from '@angular/core';
import swal from 'sweetalert2';
import { ToastPlugin } from "../../../../../plugins/toast.plugin";
declare var $: any;

@Component({
    selector: 'formulario-ejecutivos',
    templateUrl: 'formulario-ejecutivos.template.html'
})
export class FormularioEjecutivosComponent implements AfterViewInit {
    public spinner: boolean;
    public datos_1: boolean;
    public datos_2: boolean;
    constructor(private _toast: ToastPlugin) {
        this.spinner = false;
        this.datos_1 = true;
        this.datos_2 = true;
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
        }
        fn_width($(window).width())
        $(window).resize(() => {
            fn_width($(window).width())
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
                this.spinner = true;
                setTimeout(() => {
                    this._toast.get({ tipo: 'success', titulo: 'Operación exitosa.', contenido: "El usuario ha sido registrado." });
                    $("#formulario-usuario-comercial").modal("hide");
                    this.spinner = false;
                }, 1000);
            }
        });
    }


}
