import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ToastPlugin } from "../../../../plugins/toast.plugin";
declare var $: any;

@Component({
    selector: 'enviar-email-modal',
    templateUrl: 'enviar-email-modal.template.html',
    providers: [
        ToastPlugin
    ]
})
export class EnviarEmailModalComponent implements OnInit {
    @ViewChild('elModal') elModal: ElementRef;
    @Output() accionGuardar = new EventEmitter();

    public listaContactos: Array<any>;
    public contactos: Array<any>;
    public verSeleccion: Array<any>;

    constructor(private _toast: ToastPlugin, private router: Router) {
        this.listaContactos = [];
        this.contactos = [];
        this.verSeleccion = [];
    }
    ngOnInit() {
        this.listaContactos = [
            { id: 1, value: 'Fernandez Obregon', text: "<div class='form-check'><label class='form-check-label' for='defaultCheck1'><input  class='form-check-input'  type='checkbox' id='defaultCheck1'>Fernandez Obregon</label></div>" },
            { id: 2, value: 'jose sanchez', text: "<div class='form-check'><label class='form-check-label' for='defaultCheck1'><input  class='form-check-input' type='checkbox' id='defaultCheck1'> jose sanchez</label></div>" },
            { id: 3, value: 'jorge Rivera ', text: "<div class='form-check'><label class='form-check-label' for='defaultCheck1'><input  class='form-check-input' type='checkbox' id='defaultCheck1'>jorge Rivera </label></div>" },
            { id: 4, value: 'Joaquin Tile', text: "<div class='form-check'><label class='form-check-label' for='defaultCheck1'><input  class='form-check-input' type='checkbox' id='defaultCheck1'>Joaquin Tile </label></div>" },
            { id: 5, value: 'Julieta Medina', text: "<div class='form-check'><label class='form-check-label' for='defaultCheck1'><input  class='form-check-input' type='checkbox' id='defaultCheck1'>Julieta Medina</label></div>" },
            { id: 6, value: 'Juan lopez', text: "<div class='form-check'><label class='form-check-label' for='defaultCheck1'><input  class='form-check-input' type='checkbox' id='defaultCheck1'>Juan lopez</label></div>" }

        ];
        this.contactos = [
            { id: 1, value: 'FerObreddfFernandezon', text: "<div class='form-check'><label class='form-check-label' for='defaultCheck1'><input  class='form-check-input'  type='checkbox' id='defaultCheck1'>Fernandez Obregon</label></div>" },
            { id: 2, value: 'jose sanchez', text: "<div class='form-check'><label class='form-check-label' for='defaultCheck1'><input  class='form-check-input' type='checkbox' id='defaultCheck1'> jose sanchez</label></div>" },
            { id: 3, value: 'jorge Rivera ', text: "<div class='form-check'><label class='form-check-label' for='defaultCheck1'><input  class='form-check-input' type='checkbox' id='defaultCheck1'>jorge Rivera </label></div>" },
            { id: 4, value: 'Joaquin Tile', text: "<div class='form-check'><label class='form-check-label' for='defaultCheck1'><input  class='form-check-input' type='checkbox' id='defaultCheck1'>Joaquin Tile </label></div>" },
            { id: 5, value: 'Julieta Medina', text: "<div class='form-check'><label class='form-check-label' for='defaultCheck1'><input  class='form-check-input' type='checkbox' id='defaultCheck1'>Julieta Medina</label></div>" },
            { id: 6, value: 'Juan lopez', text: "<div class='form-check'><label class='form-check-label' for='defaultCheck1'><input  class='form-check-input' type='checkbox' id='defaultCheck1'>Juan lopez</label></div>" }
        ];
    }
    init() {
        $(this.elModal.nativeElement).modal('show');
    }
    cancelarModal(event) {
        this.contactos = this.listaContactos;
        // for (let i = 0; i < this.verSeleccion.length; i++) {
        //     const element = this.verSeleccion[i];
        //     this.contactos.push(element, 1);
        // }
        this.verSeleccion = [];
    }
    selectedContactos(event) {
        let selectValue: any = this.contactos.find(value => parseInt(event.id, 0) === value.id);
        let index: number = this.contactos.findIndex(value => parseInt(event.id, 0) === value.id);
        console.log(this.contactos[index]);
        this.verSeleccion.push({
            id: this.contactos[index].id,
            value: this.contactos[index].value,
            text: this.contactos[index].text
        });
        this.contactos.splice(index, 1);
        if (this.verSeleccion.length > 0) {
            $("#bntmodal1").removeAttr("disabled");
        }
    }
    eliminar(event) {
        let index: number = this.contactos.findIndex(value => parseInt(event.id, 0) === value.id);
        this.verSeleccion.splice(index, 1);
        console.log(this.verSeleccion);
        this.contactos.push(event);
    }

    enviar() {
        swal({
            title: '¿Desea confirmar el envío?',
            text: "",
            showCancelButton: true,
            reverseButtons: true,
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar',
            allowOutsideClick: false,
            allowEscapeKey: false,
            showLoaderOnConfirm: true,
        }).then((result) => {
            if (result.value) {
                $(this.elModal.nativeElement).modal('hide');
                this.responseSuccess();
            }
        });
    }
    responseSuccess() {
        swal({
            title: '!Genial operación exitosa¡',
            customClass: 'swal2-alert-success',
            confirmButtonText: 'Volver',
        }).then((result) => {
            if (result.value) {
                this.accionGuardar.emit();
            }
        });

    }

}
