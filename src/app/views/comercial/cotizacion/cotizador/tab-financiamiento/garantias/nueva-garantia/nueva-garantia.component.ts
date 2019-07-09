import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { RUTAS_COMERCIAL_COTIZACIONES } from 'src/config/rutas-modulos/rutas-comercial';

@Component({
  selector: 'nueva-garantia',
  templateUrl: './nueva-garantia.component.html',
})
export class NuevaGarantiaComponent implements OnInit {
  @Output() accionCancelar = new EventEmitter();
  @Output() accionGuardar = new EventEmitter();

  public links: Array<any>;
  public garantia: Array<any>;
  public years: Array<any>;
  bien2Control: FormGroup;

  constructor(private router: Router, private _location: Location) {
    this.links = [

      { titulo: 'Registro de Garantía', link: "/comercial/cotizacion/cotizador" },
    ];
  }

  ngOnInit() {
    this.bien2Control = new FormGroup({
      garantia: new FormControl("", [Validators.required]),
      bienGarantia: new FormControl("", [Validators.required]),
      color: new FormControl("", [Validators.required]),
      fiadorNombre: new FormControl("", [Validators.required]),
      nombre: new FormControl("", [Validators.required]),
      valorComercial: new FormControl("", [Validators.required]),
      years: new FormControl("", [Validators.required]),
      cargoFiador: new FormControl("", [Validators.required]),
      cargoConyugue: new FormControl("", [Validators.required]),


    });
    this.garantia = [
      { id: 1, value: 'ge', text: " " },
      { id: 2, value: 'ge', text: "" },
      { id: 3, value: 'ge', text: " uso" },
      { id: 4, value: 'ge', text: " uso" },
      { id: 5, value: 'ge', text: "uso" }
    ];
    this.years = [
      { id: 1, value: 'ge', text: "<div class='font'></div> " },
      { id: 2, value: 'ge', text: "<div></div>uso " },
      { id: 3, value: 'ge', text: "<div></div> uso" },
      { id: 4, value: 'ge', text: "<div></div> uso" },
      { id: 5, value: 'ge', text: "<div></div> uso" }
    ];
  }

  FinanzaSi(event) {
    console.log(event);
    $("#seguro1").removeClass("borderDerecho").addClass("borderDerecho-after");
    $("#seguro2").removeClass("borderIzquierdo-after").addClass("borderIzquierdo");
  }

  FinanzaNo(event) {
    $("#seguro2").removeClass("borderIzquierdo").addClass("borderIzquierdo-after");
    $("#seguro1").removeClass("borderDerecho-after").addClass("borderDerecho");

  }

  ConyugueSi(event) {
    console.log(event);
    $("#seguro1").removeClass("borderDerecho").addClass("borderDerecho-after");
    $("#seguro2").removeClass("borderIzquierdo-after").addClass("borderIzquierdo");
  }

  FinanzConyugueNoaNo(event) {
    $("#seguro2").removeClass("borderIzquierdo").addClass("borderIzquierdo-after");
    $("#seguro1").removeClass("borderDerecho-after").addClass("borderDerecho");

  }

  canselarNuevaGaratia() {
    // this.router.navigate([RUTAS_COMERCIAL_COTIZACIONES.cotizador.garantias.init]);
  }

  guardarGarantia() {
    this.accionGuardar.emit({ data: '' });
    // this.router.navigate([RUTAS_COMERCIAL_COTIZACIONES.cotizador.garantias.init]);
  }
  cancelar() {
    console.log("cancelar");
    this.accionCancelar.emit();
    // this.router.navigate([RUTAS_COMERCIAL_COTIZACIONES.cotizador.garantias.init]);
  }

}
