import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastPlugin } from 'src/app/plugins/toast.plugin';
declare var $: any;



@Component({
    selector: 'asignar-clientes',
    templateUrl: 'asignar-clientes.template.html',
    providers: [
        ToastPlugin
    ]
})
export class AsignarClientesComponent implements OnInit {

    public links: Array<any>;
    public clientesProspectados: string;
    public listaEjecutivos: Array<any>;
    public provedoresAsignados: string;
    public provedoresEjecutivos:string;
    public listaClientes: Array<any>;

    constructor(private router: Router) {
        this.links = [
            { titulo: 'Asignación de Cartera' },

        ];
    }

    ngOnInit() {

        this.clientesProspectados = "Clientes Prospectados";
        this.provedoresEjecutivos = "Ejecutivos";



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
        this.listaClientes = [
            {
                id: 1,
                cliente: "Toyota",
                selected: true,
            },
            {
                id: 2,
                cliente: "Grupo Pana",
                selected: false,
            },
            {
                id: 3,
                cliente: "Toyota",
                selected: false,
            },
            {
                id: 4,
                cliente: "Grupo Pana",
                selected: false,
                
            },
            {
                id: 5,
                cliente: "Toyota",
                selected: false,
               
            },
            {
                id: 6,
                cliente: "Grupo Pana",
                selected: false,
                
            },
            {
                id: 7,
                cliente: "Toyota",
                selected: false,
                
            },
            {
                id: 8,
                cliente: "Grupo Pana",
                selected: false,
          
            },
            {
                id: 9,
                cliente: "Toyota",
                selected: false,
         
            },
            {
                id: 10,
                cliente: "Grupo Pana",
                selected: false,

            },
            {
                id: 11,
                cliente: "Toyota",
                selected: false,
         
            },
            {
                id: 12,
                cliente: "Grupo Pana",
                selected: false,
            
            },


        ]
    }
    selectedItem($event, item, index) {
        console.log($event, item, index)
    }


}

    


