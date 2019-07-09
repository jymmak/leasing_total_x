import { Component, AfterViewInit } from '@angular/core';
import swal from 'sweetalert2';
import { ToastPlugin } from "../../../../../../plugins/toast.plugin";
declare var $: any;

// Exportaciones de Select Persona de Material

export interface Persona {
    value: string;
    viewValue: string;
}

// Exportaciones de Select Canal de Material

export interface Canal {
    value: string;
    viewValue: string;
}

// Exportaciones de Select Tipo de Material

export interface Tipo {
    value: string;
    viewValue: string;
}
// Exportaciones de Select  Segmento de Material

export interface Segmento {
    value: string;
    viewValue: string;
}




@Component({
    selector: 'formulario-sucursal',
    templateUrl: 'formulario.template.html'
})
export class FormularioSucursalComponent implements AfterViewInit {
    public spinner: boolean;
    public datos_1: boolean;
    public datos_2: boolean;
    constructor(private _toast: ToastPlugin) {
        this.spinner = false;
        this.datos_1 = true;
        this.datos_2 = true;
    }
    // Función de Formulario en Responsive
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
                    this._toast.get({ tipo: 'success', titulo: 'Operación exitosa.', contenido: "La sucursal ha sido registrada." });
                    $("#formulario-oficinas").modal("hide");
                    this.spinner = false;
                }, 1000);
            }
        });
    }

    // // Select Tipo
    // personas: Persona[] = [
    //     { value: 'Natural-0', viewValue: 'Natural' },
    //     { value: 'Juridica-1', viewValue: 'Jurídica' },

    // ];
    // // Select Canal
    // canales: Canal[] = [
    //     { value: 'Referido-0', viewValue: 'Referido' },
    //     { value: 'Cartera-1', viewValue: 'Cartera' },
    //     { value: 'Online-2', viewValue: 'Online' }
    // ];

    // // Select Tipo
    // tipos: Tipo[] = [
    //     { value: 'Lead-0', viewValue: 'Lead' },
    //     { value: 'Prospecto-1', viewValue: 'Prospecto' },
    //     { value: 'Oportunidad-2', viewValue: 'Oportunidad' },

    // ];
    // // Select Segmento
    // segmentos: Segmento[] = [
    //     { value: 'Normal-0', viewValue: 'Normal' },


    // ];





}
