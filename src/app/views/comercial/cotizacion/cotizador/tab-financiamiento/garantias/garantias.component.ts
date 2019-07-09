import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { RUTAS_COMERCIAL_COTIZACIONES } from 'src/config/rutas-modulos/rutas-comercial';
@Component({
  selector: 'garantias-component',
  templateUrl: './garantias.component.html',
})
export class GarantiasComponent implements OnInit {
  @Output() accionAgregar = new EventEmitter();
  @Output() accionCancelar = new EventEmitter();
  @Output() accionAtras = new EventEmitter();


  public seccion: any;

  public listaGarantia: Array<any>;
  public spinner: boolean;
  public links: Array<any>;
  constructor(private router: Router, private _location: Location) {
    this.links = [

      { titulo: 'Lista de Garantías', link: "/comercial/cotizacion/cotizador" },
    ];
    this.seccion = "listar"
  }

  ngOnInit() {
    this.listaGarantia = [
      {
        item: 1,
        tipo: "Prenderia ",
        categotia: "Sabana",
        bien: "Camion Volvo Fh",
        valor: "$ 84,400",
        fiador: "Francisco Robledo ",
        conyugue: "Valeria Robles",
      },

      {
        item: 2,
        tipo: "Prenderia ",
        categotia: "Sabana",
        bien: "Camion Volvo Fh",
        valor: "$ 84,400",
        fiador: "Francisco Robledo ",
        conyugue: "Valeria Robles",
      },

    ];
  }

  regresar() {
    // this.router.navigate([RUTAS_COMERCIAL_COTIZACIONES.cotizador.init], { queryParams: { tab: 'financiamiento' } });
  }


  nuevaGarantia() {
    this.seccion = "nuevo"
    this.accionAgregar.emit();
    // this.router.navigate([RUTAS_COMERCIAL_COTIZACIONES.cotizador.garantias.nuevo]);
  }
  cancelar(event) {
    this.accionCancelar.emit();
    this.seccion = "listar"

  }
  guardar(event) {
    this.accionCancelar.emit();
    this.seccion = "listar"

  }
  atras() {
    console.log("atras grantia");
    this.accionAtras.emit();
  }
}
