import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'layouts-modulos',
    templateUrl: 'layouts-modulos.template.html'
})
export class LayoutsModulosComponent {
    // Cabecera de cada Vista
    public links: Array<any>;
    constructor(private router: Router) {
        this.links = [
            { titulo: 'Módulos' },

        ];
    }
}
