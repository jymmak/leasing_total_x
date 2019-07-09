import { Component, OnInit } from '@angular/core';
import { RUTAS_COMERCIAL_MAPA } from 'src/config/rutas-modulos/rutas-comercial';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar-ubicacion',
  templateUrl: './buscar-ubicacion.component.html',
})
export class BuscarUbicacionComponent implements OnInit {
  location: any;
  public links: Array<any>;
  public recorridoMapa: Array<any>;
  public tipos: Array<any>;
  public myLatLng: Array<any>;
  public ciudad: Array<any>;
  public departamento: Array<any>;
  public provincia: Array<any>;
  public entidades: Array<any>;
  public lstBusquedad: Array<any>;
  public markers: any[];
  public marker: any[];
  public cliente: string;
  public provedor: string;
  public ejecutivo: string;
  lat: number = -12.0999595;
  lng: number = -76.9703576;
  zoom: number = 15;

  constructor(private router: Router) {
    this.links = [
      { titulo: 'Recorrido del Día' },
    ];
    this.lstBusquedad = [];
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
    


  }


  buscarUbicacion() {
    let mapas = RUTAS_COMERCIAL_MAPA.mapa;
    this.router.navigate([mapas.init]);
  }



  
 

  seleccionarEntidades(event) {
    this.entidades = event;
    this.lstBusquedad.push(event.text);
    if( this.entidades !== []){
       this.obtenerRecorridoDia();
    }
   
  }

  seleccionarDepartamento(event) {
    this.departamento = event;
    this.lstBusquedad.push(event.text);
    this.obtenerRecorridoDia();
  }

  seleccionarProvincia(event) {
    this.provincia = event
    this.lstBusquedad.push(event.text);
    this.obtenerRecorridoDia();
  }

  seleccionarCiudad(event) {
    this.ciudad = event;
    this.lstBusquedad.push(event.text);
    this.obtenerRecorridoDia();
  }

  buscarCliente(event) {
    console.log(event);
    this.cliente = event
    this.obtenerRecorridoDia();
 
  }

  buscarProveedor(event) {
    console.log(event);
    this.provedor = event
    this.lstBusquedad.push(event.text);
    this.obtenerRecorridoDia();
  }
  buscarEjecutivo(event) {
    console.log(event);
    this.ejecutivo = event
    this.lstBusquedad.push(event.text);
    this.obtenerRecorridoDia();
  }

  obtenerRecorridoDia(){
    if(this.lstBusquedad.length> 6){
      //buscar


      //respuesta de servicio 

      this.markers = this.marker = [
        {
          lat: -12.0999595,
          lng: -76.9703576,
          label: 'A',
          draggable: true
  
        },
        {
          lat: -12.263967,
          lng: -75.636202,
          label: 'B',
          draggable: false
        },
        {
          lat: -12.104258,
          lng: -77.010173,
          label: 'C',
          draggable: true
        },
        {
          lat: -6.86997,
          lng: -75.045851,
          label: 'A',
          draggable: true
        },
        {
          lat: -7.476713,
          lng: -75.77206,
          label: 'B',
          draggable: false
        },
        {
          lat: -9.11975,
          lng: -76.05887,
          label: 'C',
          draggable: true
        }
      ]
  
      let polylines = [
        { path: [this.markers[0], this.markers[1]], color: 'red' },
        // {path: [item3, item4, item5, item6, item7], color: '#2196f3'},
  
      ]
  
    }
  }
}
