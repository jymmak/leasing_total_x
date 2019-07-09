import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';



@Component({
    selector: 'calendario-principal',
    templateUrl: 'calendario-principal.template.html',

})

export class CalendarioPrincipalComponent implements OnInit, AfterViewInit {

    public language: any;
    public listaAgenda: Array<any>;
    ngOnInit() {

        // this.listaAgenda = [
        //     {
        //         icono: 'mdi  mdi-home-outline',
        //         categoria: "Visita",

        //     },
        //     {
        //         icono: 'mdi mdi-home-outline',
        //         categoria: "Reunión",
              
        //     },

        //     {
        //         icono: 'mdi mdi-home-outline',
        //         categoria: "Llamada",
          
        //     },

        //     {
        //         icono: 'mdi mdi-home-outline',
        //         categoria: "Correo",
       
        //     },

         

        //     {
        //         icono: 'mdi mdi-home-outline',
        //         categoria: "Evento",
        
        //     },

        //     {
        //         icono: 'mdi mdi-home-outline',
        //         categoria: "Cumpleaños",
     
        //     }
        // ]
        
    }
    
    ngAfterViewInit() {
        ;

    }

}