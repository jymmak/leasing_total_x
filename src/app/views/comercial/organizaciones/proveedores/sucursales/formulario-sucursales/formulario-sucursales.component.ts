import { Component, OnInit} from '@angular/core';
import swal from 'sweetalert2';
import { ToastPlugin } from "../../../../../../plugins/toast.plugin";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var $: any;

@Component({
    selector: 'formulario-sucursales',
    templateUrl: 'formulario-sucursales.template.html'
})
export class FormularioSucursalesComponent implements OnInit {
    public datos_1: boolean;

    isLinear = false;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;

    constructor(private _toast: ToastPlugin, private _formBuilder: FormBuilder) {
 
    }
   
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
    }
    // Funcion Guardar de Modal , OnInit
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
                this._toast.get({ tipo: 'success', titulo: 'Operación exitosa.', contenido: "La sucursal ha sido registrada." });
                $("#formulario-sucursales").modal("hide");
            }
        });
    }

}
