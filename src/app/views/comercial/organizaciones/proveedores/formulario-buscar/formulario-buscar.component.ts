import { Component, Output, EventEmitter } from '@angular/core';
declare var $: any;

@Component({
    selector: 'formulario-buscar',
    templateUrl: 'formulario-buscar.template.html'
})
export class FormularioBuscarComponent {
    @Output() buscar: EventEmitter<any> = new EventEmitter<any>();
    busquedaAvanzada(){
        this.buscar.emit({
            correlativo: 'COT-00453',
            cliente: '',
            bien: '',
            tipo: '',
            valor: '150,000.00',
            emision: '',
            vencimiento: '',
            estado: ''
            
        });
        $('#formulario-buscar').modal('hide');
    }

}
