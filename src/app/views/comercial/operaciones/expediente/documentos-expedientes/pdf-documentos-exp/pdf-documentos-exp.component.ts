import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RUTAS_COMERCIAL_OPERACIONES } from 'src/config/rutas-modulos/rutas-comercial';

@Component({
  selector: 'pdf-documentos-exp',
  templateUrl: './pdf-documentos-exp.component.html',
})
export class PdfDocumentosExpComponent implements OnInit {
  @Output() AccionCancelar = new EventEmitter();
  public numExpediente: any;
  public evaluacionNegocio: any;
  public lstDocumentosPdf: any;
  public seccion: any;
  public expedienteCodigo: any;
  public expedienteId: any;
  public pdfSeleccionados: Array<any>;
  public tipo: Array<any>;

  localUrl: any[];
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.pdfSeleccionados = [];
    this.activatedRoute.params.subscribe(params => {
      this.expedienteCodigo = params.codigo;
      this.expedienteId = params.codigo;
    });
  }


  ngOnInit() {
    this.evaluacionNegocio = 'Evaluacion del negocio';
    this.lstDocumentosPdf = [
      {
        nombre: 'Analisis de Riesgos',
        ultimaActualizacion: '30/09/2018',
        actualizadoPor: 'Angi Baldoceda'
      },
      {
        nombre: 'Informacion Comercial/Solicitud de Leasing Diligencia',
        ultimaActualizacion: '30/09/2018',
        actualizadoPor: 'Angi Baldoceda'

      },
      {
        nombre: 'Declaracion Jurada Confidencial de Patriomonio',
        ultimaActualizacion: '30/09/2018',
        actualizadoPor: 'Angi Baldoceda'

      }, {
        nombre: 'Cotizacion de Bien',
        ultimaActualizacion: '30/09/2018',
        actualizadoPor: 'Angi Baldoceda'

      },
      {
        nombre: ' Analisis de Operaciones de Arrendamiento Financiero con LT',
        ultimaActualizacion: '30/09/2018',
        actualizadoPor: 'Angi Baldoceda'

      },
      {
        nombre: 'balance Evaluado del ultimo año y al cierre del presente',
        ultimaActualizacion: '30/09/2018',
        actualizadoPor: 'Angi Baldoceda'

      },
      {
        nombre: 'Analisis Horizontal y Vertical de los Estados Finacieros ',
        ultimaActualizacion: '30/09/2018',
        actualizadoPor: 'Angi Baldoceda'

      },
      {
        nombre: 'Evaluacion de Riesgo Cambiario',
        ultimaActualizacion: '30/09/2018',
        actualizadoPor: 'Angi Baldoceda'

      },
      {
        nombre: 'Evaluacion del Impacto Financiero del Riesgo Cambiario',
        ultimaActualizacion: '30/09/2018',
        actualizadoPor: 'Angi Baldoceda'

      },

    ]
    this.tipo = [
      { id: 1, value: 'ge', text: " " },
      { id: 2, value: 'ge', text: "tipo " },
      { id: 3, value: 'ge', text: " tipo" },
      { id: 4, value: 'ge', text: " tipo" },
      { id: 5, value: 'ge', text: " tipo" }
    ]
  }


  cancelar() {
    this.seccion = "datos_generales";
    console.log();

    this.AccionCancelar.emit();
  }

  fileAdd(event) {
    console.log(event);

  }

  showPreviewImage(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.localUrl = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
    console.log(event.target.files[0]);
    let addPDF = event.target.files[0]
    this.pdfSeleccionados.push(event.target.files[0])

  }


  documentosExpedintes(){

    this.router.navigate([RUTAS_COMERCIAL_OPERACIONES.expediente + '/' + this.expedienteId +'/' + RUTAS_COMERCIAL_OPERACIONES.expedientes.documentos]);

  }


 
}
