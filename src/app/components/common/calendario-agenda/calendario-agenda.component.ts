import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';



@Component({
    selector: 'calendario-agenda',
    templateUrl: 'calendario-agenda.template.html',

})

export class CalendarioAgendaComponent implements OnInit, AfterViewInit {

    public language: any;
    public listaAgenda: Array<any>;
    public listaEjecutivos: Array<any>;
    ngOnInit() {

        this.listaAgenda = [
            {
                icono: 'mdi  mdi-account-multiple',
                categoria: "Visita",

            },
            {
                icono: 'mdi mdi-clock-outline',
                categoria: "Reunión",
              
            },

            {
                icono: 'mdi mdi-phone',
                categoria: "Llamada",
          
            },

            {
                icono: 'mdi mdi-email-outline',
                categoria: "Correo",
       
            },

         

            {
                icono: 'mdi mdi-calendar',
                categoria: "Evento",
        
            },

            {
                icono: 'mdi mdi-cake-variant',
                categoria: "Cumpleaños",
     
            }
        ]
        
        this.listaEjecutivos = [
            {
                id: 1,
                nombre: "Jose  Montoya",
                selected: true,
                imageUrl: "/assets/img/pers2.jpg"
            },
            {
                id: 2,
                nombre: "Mario Azcona",
                selected: false,
                imageUrl: "/assets/img/pers4.png"
            },
            {
                id: 3,
                nombre: "Juan Galindo",
                selected: false,
                imageUrl: "assets/img/pers3.png"
            },
            {
                id: 4,
                nombre: "Mario Azcona",
                selected: false,
                imageUrl: "/assets/img/pers4.png"
            },
            {
                id: 5,
                nombre: "Mario Azcona",
                selected: false,
                imageUrl: "/assets/img/pers5.jpeg"
            },
            {
                id: 6,
                nombre: "Mario Azcona",
                selected: false,
                imageUrl: "/assets/img/pers6.jpg"
            },
            {
                id: 7,
                nombre: "Mario Azcona",
                selected: false,
                imageUrl: "/assets/img/pers6.jpg"
            },
            {
                id: 8,
                nombre: "Mario Azcona",
                selected: false,
                imageUrl: "/assets/img/pers6.jpg"
            },
            {
                id: 9,
                nombre: "Mario Azcona",
                selected: false,
                imageUrl: "/assets/img/pers5.jpeg"
            },
            {
                id: 10,
                nombre: "Mario Azcona",
                selected: false,
                imageUrl: "/assets/img/pers6.jpg"
            },
            {
                id: 11,
                nombre: "Mario Azcona",
                selected: false,
                imageUrl: "/assets/img/pers6.jpg"
            },
            {
                id: 12,
                nombre: "Mario Azcona",
                selected: false,
                imageUrl: "/assets/img/pers6.jpg"
            },

        ]
     
        
    }
    
    ngAfterViewInit() {
        ;

    }

}