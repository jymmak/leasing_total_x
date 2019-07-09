import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;



@Component({
    selector: 'calendario-right',
    templateUrl: 'calendario-right.template.html',

})

export class CalendarioRightComponent implements AfterViewInit {
    constructor(private router: Router) { }
    ngAfterViewInit() {

        // Initialize datepicker with it
        $('.datepicker-here').datepicker({
            language: 'es'
        })

    }
}