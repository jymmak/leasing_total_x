import { Component, Input, AfterViewInit, ElementRef, ViewChild, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'info',
  templateUrl: './info.component.html',
})
export class InfoComponent implements OnInit {
  public active: boolean;
 
  contratosVigentes: number;
  condicionRiesgo: String;
  ComportamientoPago: number;
  lstDetalle: any;
  lstDocumentos: any;
  lstHistorial: any;
  @Input() show: boolean = false;
  @Output() close = new EventEmitter();


  constructor() {
    this.active = false;
  }
  ngAfterViewInit() {
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
        }else if (obj[index].id == "dropdown-info") {
          console.log(obj[index].id);
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
          this.show = false;
          this.close.emit(this.show);
          this.active = false;
        }
        console.log(this.show, "-", "cerrar", "-", this.active);
    
      }

    });

 

  }
  ngOnInit() {

    this.contratosVigentes = 1;
    this.ComportamientoPago = 57;
    this.condicionRiesgo = 'CPP';
    this.lstDetalle = {
      ruc: 20457004029,
      tipoPersona: 'Jurídica',
      paginaWeb: 'www.mendozaTransportes.com',
      tipo: 'Oportunidad',
      sector: 'Transporte de Carga Pesada',
      segmento: 'Mediana Empresa',
      numEmpleados: 100,
      numOficinas: 5,
      fechaCreacion: '12/08/2018',
      hora: '9:35am',
      fechaActualizacion: '12/08/2018',
      actualizado: 'Alfonso Mariche',
    };

    this.lstHistorial = {
      item1: 'Operación leasing Volvo FH ',
      hora: '9:35am',
      fecha: '12/08/2018',
    };
    this.lstDocumentos = {
      expediente: 'EXP01-00001',
      vigente: 'Vigente',
      fecha: '12/08/2018',
      hora: '9:35am'
    };

  }

  desactivarDrow() {
    this.close.emit(false);
  }



}
