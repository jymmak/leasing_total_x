import { Component, Input, AfterViewInit, ElementRef, ViewChild, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'busqueda-avanzada',
  templateUrl: 'busqueda-avanzada.template.html'
})
export class BusquedaAvanzadaComponent implements AfterViewInit, OnInit {
  public active: boolean;
  numCotizacion: any;
  cliente: any;
  valorFinanciar: any;
  fechaEmicion: any;
  lstNuevaCotizacion: any;
  fechaVencimieto: any;
  datepicker2: any;
  estado: any;
  bien: any;
  tipo: any;
  bien1Control: FormGroup;
  @Input() show: boolean = false;
  @Output() close = new EventEmitter();
  // active: boolean = false;
  constructor() {
    this.active = false;
    this.lstNuevaCotizacion = [];
  }

  public listaEstado: Array<any>;
  public listaTipo: Array<any>;
  public listaBien: Array<any>;
  ngAfterViewInit() {
    console.log("datepicker");
    $('#datepicker').datepicker({
      language: 'es',
      format: "dd/mm/yyyy",
      inline: false,
      autoClose: true,
      minDate: 0,
      onSelect: (selectedDate, inst) => {
        this.fechaEmicion = selectedDate;
        this.lstNuevaCotizacion.push(this.fechaEmicion);
      }
    });

    $('#datepicker2').datepicker({
      language: 'es',
      format: "dd/mm/yyyy",
      inline: false,
      autoClose: true,
      minDate: 0,
      onSelect: (selectedDate, inst) => {
        this.fechaVencimieto = selectedDate;
        this.lstNuevaCotizacion.push(this.fechaVencimieto);
      },

    }),

    console.log(this.datepicker2);
    

      document.addEventListener('click', (event) => {
        let obj = event['path'];
        console.log(obj);

        let CerrarDrow: Boolean = true;
        for (let index = 0; index < obj.length - 3; index++) {

          if (obj[index].parentElement !== null && obj[index].parentElement.nodeName == 'BUSQUEDA-AVANZADA') {
            CerrarDrow = false;
          }
          else if (obj[index].parentElement === null) {
            CerrarDrow = false;
          } else if (obj[index].parentElement[0] !== undefined && obj[index].parentElement[0] !== 0) {
            CerrarDrow = false;
          } else if (obj[index].tagName === 'NAV') {
            CerrarDrow = false;
          }

        }

        if (CerrarDrow === false) {
          this.active = true;
          console.log(this.show, "-", "no cerrar", "-", this.active);

        } else {
          if (this.active == false && this.show == true) {
            this.active = true;
          } else {
            this.show = false
            this.close.emit(this.show);
            this.active = false;
          }
          console.log(this.show, "-", "cerrar", "-", this.active);
          this.lstNuevaCotizacion = [];
          this.bien = "";
          this.fechaEmicion = "";
          this.fechaVencimieto = "";
        }

      });

  }


  ngOnInit(): void {
    this.bien1Control = new FormGroup({
      bien: new FormControl("", [Validators.required]),
      listaTipo: new FormControl("", [Validators.required]),
      Cotización: new FormControl("", [Validators.required]),
      cliente: new FormControl("", [Validators.required]),
      Vfinanciar: new FormControl("", [Validators.required]),
      fEmision: new FormControl("", [Validators.required]),
      fVencimiento: new FormControl("", [Validators.required]),
      Estado: new FormControl("", [Validators.required]),
      Cotizacion: new FormControl("", [Validators.required]),



    });
    this.listaEstado = [
      { id: 1, value: 'ge', text: " " },
      { id: 2, value: 'ge', text: " estado1 " },
      { id: 3, value: 'ge', text: " estado2" },
      { id: 4, value: 'ge', text: " estado3" },
      { id: 5, value: 'ge', text: " estado4" }
    ];
    this.listaTipo = [
      { id: 1, value: 'ge', text: " " },
      { id: 2, value: 'ge', text: " tipo1 " },
      { id: 3, value: 'ge', text: " tipo2" },
      { id: 4, value: 'ge', text: " tipo3" },
      { id: 5, value: 'ge', text: " tipo4" }
    ];
    this.listaBien = [
      { id: 1, value: 'ge', text: " " },
      { id: 2, value: 'ge', text: " bien 1 " },
      { id: 3, value: 'ge', text: " bien 2" },
      { id: 4, value: 'ge', text: " bien 3" },
      { id: 5, value: 'ge', text: " bien 4" }
    ];
  }

  formatDate(date: Date) {
    const day = date.getDate()
    let month = date.getMonth()
    const year = date.getFullYear()

    let dayFormat = ''
    let monthFormat = ''
    let yearFormat = ''
    let militarFormat: String = ''

    if (day <= 9) {
      dayFormat = '0' + day.toString()
    } else {
      dayFormat = day.toString()
    }
    month = month + 1
    if (month <= 9) {
      monthFormat = '0' + month.toString()
    } else {
      monthFormat = month.toString()
    }
    yearFormat = year.toString()
    // MILITAR_DATE = “yyyyMMdd”
    militarFormat = yearFormat + monthFormat + dayFormat
    return militarFormat
  }

  capturarBien(event) {
    console.log(event.text);
    this.bien = event.text;
  }
  capturarTipo(event) {
    console.log(event.text);
    this.tipo = event.text;
  }
  buscarCotizacion() {

    this.lstNuevaCotizacion = {
      numCotizacion: this.numCotizacion,
      cliente: this.cliente,
      valorFinanciar: this.valorFinanciar,
      fechaEmicion: this.fechaEmicion,
      fechaVencimiento: this.fechaVencimieto,
      //  numCotizacion:  this.numCotizacion,
      // cliente: this.cliente,
      bien: this.bien,
      tipo: this.tipo

    };
    console.log(this.lstNuevaCotizacion);
  }


  desactivarDrow() {
    this.close.emit(false);
  }


}
