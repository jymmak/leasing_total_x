import { Component, NgZone, ViewChild, ElementRef } from '@angular/core';
import { ToastPlugin } from "../../../../plugins/toast.plugin";
import { Router } from '@angular/router';
import { MouseEvent, MapsAPILoader, InfoWindowManager } from '@agm/core';
import { RUTAS_COMERCIAL_ADMINISTRACION } from 'src/config/rutas-modulos/rutas-comercial';



@Component({
    selector: 'page-sucursales',
    templateUrl: 'sucursales.template.html',
    providers: [
        ToastPlugin
    ]
})
export class SucursalesAdComponent {
    // Cabecera de cada Vista
    public links: Array<any>;
    public listaSucursales: Array<any>;
    public markers: any[];
    public marker: any[];
    lat: number = -12.0999595;
    lng: number = -76.9703576;
    zoom: number = 15;

    public searchElementRef: ElementRef;

    constructor(private router: Router, private _toast: ToastPlugin) {

        this.links = [
            { titulo: 'Lista de Sucursales' },

        ];
    }

    ngOnInit() {
        this.listaSucursales = [
            {
                Id: 1,
                Cargo: "SUC001",
                Nombre: "Oficina Lima",
                Tipo: "Principal ",
                Direccion: "av. Javier Prado 141",
                Distrito: 'Santiago de Surco',
                Ciudad: 'Lima',
                Telefono: '0123455',
                Encargado: 'David Nuñez',
                lat: -12.100529,
                lng: -76.974592,
            },

            {
                Id: 2,
                Cargo: "SUC002",
                Nombre: "Oficina Miraflores",
                Tipo: "Secundaria ",
                Direccion: "av. Pardo 145",
                Distrito: 'Miraflores',
                Ciudad: 'Lima',
                Telefono: '01826932',
                Encargado: 'Jorge Rosado',
                lat: -12.100739,
                lng: -76.970483,

            },
            {
                Id: 3,
                Cargo: "SUC001",
                Nombre: "Oficina Lima",
                Tipo: "Principal ",
                Direccion: "av. Javier Prado 141",
                Distrito: 'Santiago de Surco',
                Ciudad: 'Lima',
                Telefono: '0123455',
                Encargado: 'David Nuñez',
                lat: -12.098122,
                lng: -76.974564,
            },

            {
                Id: 4,
                Cargo: "SUC002",
                Nombre: "Oficina Miraflores",
                Tipo: "Secundaria ",
                Direccion: "av. Pardo 145",
                Distrito: 'Miraflores',
                Ciudad: 'Lima',
                Telefono: '01826932',
                Encargado: 'Jorge Rosado',
                lat: -12.104061,
                lng: -76.962902,

            },

            {
                Id: 5,
                Cargo: "SUC001",
                Nombre: "Oficina Lima",
                Tipo: "Principal ",
                Direccion: "av. Javier Prado 141",
                Distrito: 'Santiago de Surco',
                Ciudad: 'Lima',
                Telefono: '0123455',
                Encargado: 'David Nuñez',
                lat: -12.100529,
                lng: -76.974592,
            },

            {
                Id: 6,
                Cargo: "SUC002",
                Nombre: "Oficina Miraflores",
                Tipo: "Secundaria ",
                Direccion: "av. Pardo 145",
                Distrito: 'Miraflores',
                Ciudad: 'Lima',
                Telefono: '01826932',
                Encargado: 'Jorge Rosado',
                lat: -12.107893,
                lng: -76.96689,

            },

            {
                Id: 7,
                Cargo: "SUC001",
                Nombre: "Oficina Lima",
                Tipo: "Principal ",
                Direccion: "av. Javier Prado 141",
                Distrito: 'Santiago de Surco',
                Ciudad: 'Lima',
                Telefono: '0123455',
                Encargado: 'David Nuñez',
                lat: -12.101767,
                lng: -76.971695,
            },

            {
                Id: 8,
                Cargo: "SUC002",
                Nombre: "Oficina Miraflores",
                Tipo: "Secundaria ",
                Direccion: "av. Pardo 145",
                Distrito: 'Miraflores',
                Ciudad: 'Lima',
                Telefono: '01826932',
                Encargado: 'Jorge Rosado',
                lat: -12.100529,
                lng: -76.974592,

            },
            {
                Id: 9,
                Cargo: "SUC001",
                Nombre: "Oficina Lima",
                Tipo: "Principal ",
                Direccion: "av. Javier Prado 141",
                Distrito: 'Santiago de Surco',
                Ciudad: 'Lima',
                Telefono: '0123455',
                Encargado: 'David Nuñez',
                lat: -12.100529,
                lng: -76.974592,
            },

            {
                Id: 10,
                Cargo: "SUC002",
                Nombre: "Oficina Miraflores",
                Tipo: "Secundaria ",
                Direccion: "av. Pardo 145",
                Distrito: 'Miraflores',
                Ciudad: 'Lima',
                Telefono: '01826932',
                Encargado: 'Jorge Rosado',
                lat: -12.100529,
                lng: -76.974592,

            },


        ];


    }
   nuevo(){
    let nuevaCondicion = RUTAS_COMERCIAL_ADMINISTRACION.administracion.init;
        this.router.navigate([nuevaCondicion  + '/' + RUTAS_COMERCIAL_ADMINISTRACION.administracion.sucursales.nuevo]);
        
    }
   


    addMarkers(mylatlong) {
        this.markers = this.marker = [
            {
                id: 1,
                lat: mylatlong.lat,
                lng: mylatlong.lng,
                draggable: true

            },

        ]

    }
    verDireccion(event) {
        this.addMarkers(event)
       

    }




}
