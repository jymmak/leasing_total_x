import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'informacion',
  templateUrl: './informacion.component.html',
})
export class InformacionComponent implements OnInit {
  @Input() show: boolean = false;
  @Output() close = new EventEmitter();
  public active: boolean;
  public lstOperacion: Array<any>;
  public lstBien: Array<any>;
  public lstCliente: Array<any>;
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
        } else if (obj[index].id == "dropdown-info") {
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
          this.show = false
          this.close.emit(this.show);
          this.active = false;
        }

      }

    });

  }
  ngOnInit() {

    this.lstOperacion = [
      {
        estado: 'En Evaluacion',
        moneda: 'ME',
        vaf: '$ 111,200',
        inicial: '25%',
        tea: '12%',
        plazo: '96 meses',
        mesGracia: '1 mes',
        opCompra: '1%',
        colocNeta: '$105,400',
        expediente: '13313355',
        ejecutivo: 'Pedro Soto',
        garantias: '1 ',
        evaluadoPor: 'Tatiana Rivas ',
      }
    ]
    this.lstBien = [
      {
        estado: 'Catizado',
        nivel: 'Vehiculos',
        subNivel: 'Remolcador',
        cantidad: '1',
        valor: '$134,200',
        clase: 'camion',
        marca: 'volvo',
        modelo: 'FH',
        ano: '2018',
        seguro: 'Incluido',
        gps: 'incluido ',
      }
    ]
    this.lstCliente = [
      {
        cliente: 'Eminente SAC',
        ruc: '2028374913',
        tipo: 'Oportunidad',
        calificacion: 'Normal',
        contacto: 'Jose Ramirez',
        asignado: 'Pedro Soto ',
      }
    ]

    
  }

}
