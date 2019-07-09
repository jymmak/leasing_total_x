import { Component, OnInit, AfterViewInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MouseEvent, MapsAPILoader, InfoWindowManager } from '@agm/core';
import { RUTAS_COMERCIAL_COTIZACIONES, RUTAS_COMERCIAL_MAPA } from 'src/config/rutas-modulos/rutas-comercial';

@Component({
    selector: 'page-mapa',
    templateUrl: 'mapa.template.html',

})
export class MapaComponent implements AfterViewInit, OnInit {

    // Cabecera de cada Vista
    location: any;
    public links: Array<any>;
    public recorridoMapa: Array<any>;
    public tipos: Array<any>;
    public myLatLng: Array<any>;
    public polyline: Array<any>;
    public lstpolyline: Array<any>;
    public markers: any[];
    public maxSpeed: number;
    public marker: any[];
    lat: number = -12.0999595;
    lng: number = -76.9703576;
    zoom: number = 15;

    constructor(private router: Router) {
        this.links = [
            { titulo: 'Recorrido del Día' },
        ];
    }

    ngAfterViewInit() {
    }

    ngOnInit() {

        this.recorridoMapa = [
            {
                id: 1,
                ruta: 'Ruta 1',
                estado: 'completada',
                origen: 'av Javier Prado 123',
                destino: 'av. Alfredo Mendiol'
            },
            {
                id: 2,
                ruta: 'Ruta 2',
                estado: 'En Proceso',
                origen: 'av. Alfredo Mendiol',
                destino: 'av Javier Prado 123',
            },
            {
                id: 3,
                ruta: 'Ruta 3',
                estado: 'Pendiente',
                origen: 'av Javier Prado 123',
                destino: 'av. Alfredo Mnediol'
            },
            {
                id: 4,
                ruta: 'Ruta 4',
                estado: 'En Proceso',
                origen: 'av. Alfredo Mendiol',
                destino: 'av Javier Prado 123',
            },
            {
                id: 5,
                ruta: 'Ruta 5',
                estado: 'pendiente',
                origen: 'av Javier Prado 123',
                destino: 'av. Alfredo Mnediol'
            },
            {
                id: 6,
                ruta: 'Ruta 6',
                estado: 'en Proceso',
                origen: 'av. Alfredo Mendiol',
                destino: 'av Javier Prado 123',
            }

        ]
        this.tipos = [
            { id: 1, value: 'ge', text: "Ejecutivo " },
            { id: 2, value: 'ge', text: "Ejecutivo" },
            { id: 3, value: 'ge', text: "Ejecutivo " },
            { id: 4, value: 'ge', text: " Ejecutivo " },
            { id: 5, value: 'ge', text: " Ejecutivo" },
            { id: 6, value: 'ge', text: " Ejecutivo " },
            { id: 7, value: 'ge', text: " Ejecutivo " },
        ];
        this.addMarkers();

    }


    addMarkers() {
        this.markers = this.marker = [
            {
                id: 1,
                lat: -12.100529,
                lng: -76.974592,
                draggable: true

            },

        ]
        this.polyline = this.lstpolyline = [
            {
                id: 1,
                lat: -12.100529,
                lng: -76.974592,
                draggable: true

            },
            {
                id: 2,
                lat: -12.100739,
                lng: -76.970483,
                draggable: false
            },
            // {
            //     lat: 12.098122 ,
            //     lng: -76.974564,
            //     draggable: true
            // },
            {
                id: 3,
                lat: -12.104061,
                lng: -76.962902,
                draggable: true
            },
            {
                id: 3,
                lat: -12.107893,
                lng: -76.96689,
                draggable: false
            },
            {
                id: 4,
                lat: -12.101767,
                lng: -76.971695,
                draggable: true
            }
        ]

    }



    seleccionarTipo(event) {
        console.log(event);
        this.addMarkers();
    }

    recorridoDia() {
        let mapas = RUTAS_COMERCIAL_MAPA.mapa;
        this.router.navigate([mapas.init + '/' + mapas.ubicacion]);

    }

    clickedMarker(event, i, infoWindow, gm) {
     //   event.icon.url = 'new icon url'
        console.log(infoWindow);

    }

}


