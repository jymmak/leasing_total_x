import { Component, Input } from '@angular/core';

@Component({
    selector: 'cabecera-basico',
    templateUrl: 'basico.template.html'
})
export class CabeceraBasicoComponent {
    @Input() titulo: any;
    @Input() links: Array<any>;
    constructor() {
        this.titulo = "";
        this.links = [];
    }
}
