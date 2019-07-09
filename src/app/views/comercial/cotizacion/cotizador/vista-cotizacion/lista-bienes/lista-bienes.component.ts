import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
   
import swal from 'sweetalert2';
import { ToastPlugin } from "../../../../../../plugins/toast.plugin";
declare var $: any;




@Component({
    selector: 'lista-bienes',
    templateUrl: 'lista-bienes.template.html',
    providers: [
        ToastPlugin
    ]
})
export class ListaBienesComponent implements OnInit {
  
    
    constructor(private _toast: ToastPlugin, private router: Router) {

    }
    ngOnInit() {
        this.list();
    }
    list() {

      
    }
    applyFilter(filterValue: string) {
       
    }
    // Funcion Eliminar de Modal 
    eliminar() {
        swal({
            title: '¿Está seguro de eliminar la cotización?',
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
                this._toast.get({ tipo: 'success', titulo: 'Operación exitosa.', contenido: "El registro fue eliminado." });
            }
        });
    }

}
