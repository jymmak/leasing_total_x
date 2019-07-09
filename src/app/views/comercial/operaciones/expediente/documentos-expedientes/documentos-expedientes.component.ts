import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RUTAS_COMERCIAL_OPERACIONES } from 'src/config/rutas-modulos/rutas-comercial';
import { element } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'documentos-expedientes',
  templateUrl: './documentos-expedientes.component.html',
})
export class DocumentosExpedientesComponent implements OnInit {
  public expedienteId: any;
  public links: Array<any>;
  public selectItem: any;
  public lstSelectDoc: any;
  public lstDocumentosDetallados: any;
  public primeraFila: any;
  public numExpediente: any;

  public lstDocumentos: Array<any>;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.selectItem = {};
    this.lstSelectDoc = [];
    this.links = [
      { titulo: 'Documentos ' },
    ];
    this.activatedRoute.params.subscribe(params => {
      this.expedienteId = params.codigo;
    });
  }

  ngOnInit() {

    this.numExpediente = '201880016'
    this.lstDocumentos = [
      {
        id: 1,
        nombre: 'Ficha de Transaccion',
        ultimaAct: '30/09/2018',
        actualizadoPor: 'Angi Baldoceda',
      },
      {
        id: 2,
        nombre: 'Docuementacion de Bien',
        ultimaAct: '30/09/2018',
        actualizadoPor: 'Angi Baldoceda',
      },
      {
        id: 3,
        nombre: 'Contrato de Arrendamiento Financiero Y/O Garantias',
        ultimaAct: '30/09/2018',
        actualizadoPor: 'Angi Baldoceda',
      },
      {
        id: 4,
        nombre: 'Garantias Contituidas',
        ultimaAct: '30/09/2018',
        actualizadoPor: 'Angi Baldoceda',
      },
      {
        id: 5,
        nombre: 'Seguros del Bien',
        ultimaAct: '30/09/2018',
        actualizadoPor: 'Angi Baldoceda',
      },
      {
        id: 6,
        nombre: 'Correspondencia Enviada',
        ultimaAct: '30/09/2018',
        actualizadoPor: 'Angi Baldoceda',
      },
      {
        id: 7,
        nombre: 'Evaluacion del negocio',
        ultimaAct: '30/09/2018',
        actualizadoPor: 'Angi Baldoceda',
      },
      {
        id: 8,
        nombre: 'Analisis y seguimientos del cliente',
        ultimaAct: '30/09/2018',
        actualizadoPor: 'Angi Baldoceda',
      },
      {
        id: 9,
        nombre: 'Documentos Financieros del Cliente',
        ultimaAct: '30/09/2018',
        actualizadoPor: 'Angi Baldoceda',
      },
      {
        id: 10,
        nombre: 'Documentos Legales',
        ultimaAct: '30/09/2018',
        actualizadoPor: 'Angi Baldoceda',
      },
    ],
      this.lstDocumentosDetallados = [
        {
          id: 1,
          nombre: 'Ficha de Transaccion',
          ultimaAct: '30/09/2018',
          actualizadoPor: 'Angi Baldoceda',
        },
        {
          id: 2,
          nombre: 'Docuementacion de Bien',
          ultimaAct: '30/09/2018',
          actualizadoPor: 'Angi Baldoceda',
        },
        {
          id: 3,
          nombre: 'Contrato de Arrendamiento Financiero Y/O Garantias',
          ultimaAct: '30/09/2018',
          actualizadoPor: 'Angi Baldoceda',
        },

      ]
    this.obtenerValores();
  }

  obtenerValores() {
    for (let index = 0; index < this.lstDocumentos.length; index++) {

      if (this.lstDocumentos.length > 0) {
        this.selectItem = this.lstDocumentos[0];
        this.select(this.lstDocumentos[0])
      }
    }
  }


  select(item) {
    this.lstSelectDoc = [];
    this.selectItem = item;
    this.lstSelectDoc.push(this.selectItem);
    console.log(this.lstSelectDoc);

  }




  PdfDocumentosExpediente(item) {
    console.log(item);
    let expediente = RUTAS_COMERCIAL_OPERACIONES.expediente;
    console.log(this.expedienteId);

    this.router.navigate([expediente + '/' + this.expedienteId + '/' + RUTAS_COMERCIAL_OPERACIONES.expedientes.documentos + '/' + RUTAS_COMERCIAL_OPERACIONES.expedientes.pdf]);
  }

  checklist(item) {
    console.log(item);
    let expediente = RUTAS_COMERCIAL_OPERACIONES.expediente;

    this.router.navigate([expediente + '/' + this.expedienteId + '/' + RUTAS_COMERCIAL_OPERACIONES.expedientes.checklist]);
    console.log(expediente + '/' + this.expedienteId + '/' + RUTAS_COMERCIAL_OPERACIONES.expedientes.checklist);


  }
}
