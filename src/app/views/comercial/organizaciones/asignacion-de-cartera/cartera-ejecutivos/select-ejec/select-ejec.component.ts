import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastPlugin } from 'src/app/plugins/toast.plugin';
declare var $: any;



@Component({
    selector: 'select-ejec',
    templateUrl: 'select-ejec.template.html',
    providers: [
        ToastPlugin
    ]
})
export class SelectEjecComponent implements OnInit {
    public listaEjecutivo: Array<any>;
    public img:any;

    ngOnInit() {
    
        this.listaEjecutivo = [
            { id: 1, value: 'ge', text: ' <img src="assets/img/pers2.jpg" alt="">   Andrés Gutierrez' },
            { id: 2, value: 'ge', text: '<img src="assets/img/pers3.png" alt="">  Jose  Montoya' },
            { id: 3, value: 'ge', text:  '<img src="assets/img/pers4.png" alt="">  Mario Azcona' },
            { id: 4, value: 'ge', text: '<img src="assets/img/pers5.jpeg" alt="">  Adriana Paredez' },
            { id: 5, value: 'ge', text: '<img src="assets/img/pers6.jpg" alt="">  Carlos Polos '},
            console.log(this.img)
        ];
       
    }




}
