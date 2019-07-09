import { Component, ViewChild, OnInit, AfterViewInit, Inject, HostListener } from '@angular/core';
import { ToastPlugin } from "../../../plugins/toast.plugin";
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';
import { WINDOW } from './windows.sercive';
declare var $: any;


@Component({
    selector: 'boton-up',
    templateUrl: 'boton-up.template.html',
    providers: [
        ToastPlugin
    ]
})


export class BotonUpComponent implements OnInit, AfterViewInit {
    // Cabecera de cada Vista

    public button_wraper: any;
    public show: boolean;




    constructor(private _toast: ToastPlugin, private router: Router, @Inject(WINDOW) private window,
        @Inject(DOCUMENT) private document: any,
    ) {
        this.show = false;

    }
    @HostListener('window:scroll', ['$event'])
    onScroll(event) {
        let scroll = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
        if (scroll > 100) {
            this.show = true;
        } else {
            this.show = false;
        }
    }

    up() {
        $('body, html').animate({
            scrollTop: 0
        }, 700);
    }


    ngOnInit() {
       
    }
    ngAfterViewInit() {

    }
}  
