import { Component, OnInit } from '@angular/core';
import { RUTAS_COMERCIAL_CRM, RUTAS_COMERCIAL_REPORTES } from 'src/config/rutas-modulos/rutas-comercial';
import { Router } from '@angular/router';
import { ToastPlugin } from 'src/app/plugins/toast.plugin';
import { Moment } from 'moment';
declare var $: any;

@Component({
  selector: 'app-ejecutar',
  templateUrl: './ejecutar.component.html',
})
export class EjecutarComponent implements OnInit {
  public links: Array<any>;
  public Reportes: Array<any>;
  public lstaReportes: Array<any>;
  public activeTableReporte: boolean = false;
  public ejecutar1: boolean = true;
  public fechaEmision: any;
  public classTriangulo: boolean = false;
  selected;
  selected2;


  ngAfterViewInit() {


  }
  constructor(private router: Router) {
    this.links = [
      { titulo: 'Generación de Reportes Comerciales' },

    ];

    this.fechaEmision = '';

  }

  ngOnInit() {
    // var d1 = document.getElementsByClassName('one');
    // d1.insertAdjacentHTML('beforeend', '<div class="two">two</div>');

    this.Reportes = [
      {
        id: '1',
        value: 'cotizaciones',
        text: 'cotizaciones'
      }
    ],

      this.lstaReportes = [
        {
          Cotizacion: 'COT 001',
          Cliente: 'Transporte pepito S.A',
          FechaEmision: '09/10/2018 - 05/11/2018',
          VAF: '09/10/2018 - 05/11/2018',
          Ejecutivo: 'Angel Mendoza',
          Estado: 'Enviado'
        }
      ]

  }

  atras() {

    this.router.navigate([RUTAS_COMERCIAL_REPORTES.reportes.init]);

  }

  tableReporte() {
    this.activeTableReporte = true
    this.ejecutar1 = false
  }
  Exportar() {

  }

  mostrarTriangulo(select2) {
    console.log(select2);
    this.classTriangulo = !this.classTriangulo;

  }

  // rangoFecha(event) {
  //   console.log(event);
  //   this.fechaEmision = event.start + ' - ' + event.end
  // }
}
