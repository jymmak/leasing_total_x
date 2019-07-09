import { Component, OnInit } from '@angular/core';
import { RUTAS_COMERCIAL_ADMINISTRACION } from 'src/config/rutas-modulos/rutas-comercial';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nueva-sucursal',
  templateUrl: './nueva-sucursal.component.html',
})
export class NuevaSucursalComponent implements OnInit {
  public links: Array<any>;
  public ciudad: Array<any>;
  public tipo: Array<any>;
  public distrito: Array<any>;
  public codigo: any;
  constructor(private router: Router) {
    this.links = [
      { titulo: 'Nueva Sucursal' },

    ];
  }

  ngOnInit() {
    this.codigo = 'SUCC001'
    this.ciudad = [
      {
        id: '1',
        value: 'lima',
        text: 'lima',
      }
    ]
    this.tipo = [
      {
        id: '1',
        value: 'tipo',
        text: 'tipo',
      }
    ]
    this.distrito = [
      {
        id: '1',
        value: 'la molina',
        text: 'la molina',
      }
    ]


  }

  atras() {
    let nuevaCondicion = RUTAS_COMERCIAL_ADMINISTRACION.administracion.init;
    this.router.navigate([nuevaCondicion + '/' + RUTAS_COMERCIAL_ADMINISTRACION.administracion.sucursales.sucursales]);
  }
  guardar() {
    let nuevaCondicion = RUTAS_COMERCIAL_ADMINISTRACION.administracion.init;
    this.router.navigate([nuevaCondicion + '/' + RUTAS_COMERCIAL_ADMINISTRACION.administracion.sucursales.sucursales]);
  }
}
