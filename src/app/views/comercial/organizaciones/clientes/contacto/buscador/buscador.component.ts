import { Component, ViewChild, OnInit } from '@angular/core';
 
import swal from 'sweetalert2';
import { Router } from '@angular/router';
declare var $: any;

@Component({
    selector: 'contacto-buscador',
    templateUrl: 'buscador.template.html',

    providers: [
    ]
})
export class ContactobuscadorComponent implements OnInit {

    public spinner: boolean;
    // public show: boolean;
    constructor(private router: Router) {
        this.spinner = false;
        // this.show = false;
    }
    ngOnInit(): void {
    }
    init() {
        $("#BuscadorAvanzado").modal("show");
        // this.show = true;
    }
}
