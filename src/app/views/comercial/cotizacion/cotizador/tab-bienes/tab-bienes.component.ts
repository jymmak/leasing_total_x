import { Component, OnInit, Output, EventEmitter, Input, AfterViewInit } from '@angular/core';
import swal from 'sweetalert2';
declare var $: any;
@Component({
    selector: 'tab-bienes-component',
    templateUrl: 'tab-bienes.template.html',
    providers: [
    ]
})
export class TabBienesComponent implements OnInit, AfterViewInit {
    @Output() accionAgregar = new EventEmitter();
    @Output() accionGuardar = new EventEmitter();
    @Output() accionAtras = new EventEmitter();
    @Input() bienes: Array<any>;
    public nivel: Array<any>;
    public mes: Array<any>;
    public selectedItem: any;
    constructor() {
        this.bienes = [];
        this.selectedItem = {};
    }
    ngOnInit() {

    }
    ngAfterViewInit() {
        $('[data-toggle="tooltip"]').tooltip()
    }

    agregar() {
        console.log("Agregar Bien");
        this.accionAgregar.emit("Agregar Bien");
    }
    guardar() {
        this.accionGuardar.emit({ data: '' });
    }
    atras() {
        this.accionAtras.emit();
    }
    fnSelectedItem(data) {
        this.selectedItem = data;
    }
    eliminar() {

        swal({
            title: '¿Está seguro de eliminar el bien?',
            text: "",
            showCancelButton: true,
            reverseButtons: true,
            cancelButtonClass: "",
            confirmButtonClass: "",
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar',
            allowOutsideClick: false,
            allowEscapeKey: false,
            focusConfirm: false,
            focusCancel: false
        }).then((result) => {
            if (result.value) {
                let index = this.bienes.findIndex(value => this.selectedItem.id == value.id);
                this.bienes.splice(index, 1);
                this.selectedItem = {};
            }
        });
    }
}
