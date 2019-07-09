import { Component, OnInit } from '@angular/core';
import { ToastPlugin } from 'src/app/plugins/toast.plugin';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'info-neg',
  templateUrl: 'info-neg.component.html',
  providers: [
    ToastPlugin
  ]
})
export class InfoNegComponent implements OnInit {
  public links: Array<any>;
  public listaNegocios: Array<any>;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.links = [
      { titulo: 'Información de Negocio', link: "/comercial/organizaciones/clientes/info-neg" }
    ];

  }

  ngOnInit() {
    this.listaNegocios = [
      {
        years: '2018',
        actividades: 'Julio de 2018 logra la adquisicion de 10 camiones Volvo para una Operacion Minera en Ancahs'
      },
      {
        years: '2018',
        actividades: 'Julio de 2018 logra la adquisicion de 10 camiones Volvo para una Operacion Minera en Ancahs'
      },
      {
        years: '2017',
        actividades: 'junio de 2017 compra un Volquete Usado'
      },
      {
        years: '2014',
        actividades: 'junio de 2017 compra un Volquete Usado'
      },
      {
        years: '2012',
        actividades: 'junio de 2017 compra un Volquete Usado'
      },
    ];
  }

  antecedentes() {
    $("#antecedentes").removeClass("button-panel-info").addClass("button-panel-after");
    this.router.navigate(['/comercial/organizaciones/clientes/Info-neg']);
  }

  socios() {
    $("#socios").removeClass("button-panel-info").addClass("button-panel-after");
    this.router.navigate(['/comercial/organizaciones/clientes/Info-neg/socios-accionistas']);
  }

  Principales() {
    $("#principales").removeClass("button-panel-info").addClass("button-panel-after");
    this.router.navigate(['/comercial/organizaciones/clientes/Info-neg/principales-activos']);
  }
  comerciales() {
    $("#Comerciales").removeClass("button-panel-info").addClass("button-panel-after");
    this.router.navigate(['/comercial/organizaciones/clientes/Info-neg/ref-comerciales']);
  }

  regresarInfo(){
    this.router.navigate(['/comercial/organizaciones/clientes']);
  }
}
