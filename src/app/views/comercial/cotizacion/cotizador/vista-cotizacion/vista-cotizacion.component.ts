import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ToastPlugin } from "../../../../../plugins/toast.plugin";

declare var $: any;



@Component({
    selector: 'vista-cotizacion',
    templateUrl: 'vista-cotizacion.template.html',
    providers: [
        ToastPlugin
    ]
})
export class VistaCotizacionComponent {
    public back: boolean;

    constructor(private _toast: ToastPlugin, private router: Router) {

    }
   closs(){
       $('#vista-cotizacion').modal('hide');
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
                this._toast.get({ tipo: 'success', titulo: 'operación exitosa.', contenido: "La cotización ha sido registrada." });
                $("#vista-cotizacion").modal("hide");
            }
        });
    }

}



