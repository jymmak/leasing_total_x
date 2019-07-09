import { Component, OnInit, ElementRef, ViewChild, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MapsAPILoader, AgmMap } from '@agm/core';
import { GoogleMapsAPIWrapper } from '@agm/core/services';
import { Location } from '@angular/common';
import { RUTAS_COMERCIAL_ORGANIZACIONES } from 'src/config/rutas-modulos/rutas-comercial';
import { UbicacionService } from './ubicacion.service';
import { NuevoSucursalService } from '../sucursales/sucursal-contacto/nuevo-sucursal/nuevo-sucursal.service';


@Component({
    selector: 'ubicacion-proveedores',
    templateUrl: 'ubicacion.template.html'
})
export class UbicacionProveedoresComponent implements OnInit {
    location: any;
    public links: Array<any>;
    public selectItem: any;
    lat: number = -12.0999595;
    lng: number = -76.9703576;
    zoom: number = 15;
    public latitud: number;
    public longitud: number;
    public markers: any[];
    public marker: any[];
    public idProveedor: number;
    public sucursal: number;
    public datosProveedor: any[];


    constructor(private router: Router,
        private activatedRoute: ActivatedRoute,
        private _ubicacionService: UbicacionService,
        private _sucrusalservice: NuevoSucursalService) {
        this.selectItem = {};
        this.links = [
            { titulo: 'Ubicación Provedores' }
        ];

        this.activatedRoute.params.subscribe(params => {
            this.idProveedor = Number(params.id);
            this.sucursal = Number(params.sucurrsal);
            if (params.sucurrsal) {
                this.idProveedor = parseInt(params.id, 10);
                this.sucursal = parseInt(params.sucurrsal, 10);
                this.consultarSucursal(this.idProveedor);
            }
        });
    }

    consultarSucursal(id) {
        this._ubicacionService.consultar(id).subscribe(
            response => {
                (response['sucursal'][0]);
                console.log((response['sucursal']),
                    this.datosProveedor = response['sucursal'],
                    this.addMarkers(),

                )
            },
            error => {
                console.log(error);
            }
        );
    }

    ngOnInit(): void {
        console.log("ubicacion");



    }

    atras() {
        let proveedores = RUTAS_COMERCIAL_ORGANIZACIONES.proveedores;
        this.router.navigate([proveedores.init + '/' + this.idProveedor + '/' + proveedores.sucursales.init]);

    }
    addMarkers() {
        this.datosProveedor.forEach(element => {
            // this.latitud = element.latitud,
            // this.longitud = element.longitud
            this.latitud = -12.0999595;
            this.longitud = -76.9703576;

        });
        this.markers = this.marker = [
            {
                lat: this.latitud,
                lng: this.longitud,
                draggable: true

            },

        ]
    }


}

