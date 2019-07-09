import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RUTAS_COMERCIAL_OPERACIONES } from 'src/config/rutas-modulos/rutas-comercial';

@Component({
  selector: 'app-detalle-two',
  templateUrl: './detalle-two.component.html',
})
export class DetalleTwoComponent implements OnInit {
  public links: Array<any>;
  public expedienteId: any;
  public notaUbicacion: any;
  public panelInf: Array<any>;
  public lstUbicacion: Array<any>;
  public stepper: Array<any>;
  public lstHistorial: Array<any>;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.links = [
      { titulo: 'Detalles del expediente ' + '' + this.expedienteId },
    ];
    this.activatedRoute.params.subscribe(params => {
      this.expedienteId = params.codigo;
    });
  }

  ngOnInit() {
    this.panelInf = [{
      fechaApertura: '15/10/18',
      enEvaluacion: 'En Evaluacion',
      distrito: 'Lima',
      tipoOperacion: 'Leasing'
    }],
    this.stepper = [{
      fechaApertura: '15/10/18',
      enEvaluacion: 'En Evaluacion',
      distrito: 'Lima',
      tipoOperacion: 'Leasing'
    }],

      this.lstUbicacion = [
        {
          id: 1,
          ubicacion: 'Legal',
          ingreso: '07/11/2018',
          hora: '19:16',
          dias: '-',
        },
        {
          id: 2,
          ubicacion: 'Operaciones',
          ingreso: '05/11/2018',
          hora: '19:16',
          dias: '02',
        },
        {
          id: 3,
          ubicacion: 'Comercial',
          ingreso: '03/11/2018',
          hora: '19:16',
          dias: '02',
        },
        {
          id: 4,
          ubicacion: 'Comite de Riesgo',
          ingreso: '02/11/2018',
          hora: '19:16',
          dias: '01',
        },
        {
          id: 5,
          ubicacion: 'Riesgo de Admision',
          ingreso: '29/10/2018',
          hora: '19:16',
          dias: '04',
        },
        {
          id: 6,
          ubicacion: 'Comercial',
          ingreso: '18/10/2018',
          hora: '19:16',
          dias: '11',
        },
     
      ],

      this.notaUbicacion ='El cliente dessitio a que aceptó otro financiamiento menor a tasa CON Scotiabank'
    
    this.lstHistorial = [
      {
        id: 1,
        nombre: 'Tatiana Rivas',
        cargo: 'Jefe Riesgo',
        ingreso: '18/10/2018',
        hora: '19:16',
        estado: 'Se Admitio Riesgo de admision',
        estado2: 'Se encuentra en la Ubicacion de Riesgos de Admision',
      },
      {
        id: 2,
        nombre: 'Angel Mendoza',
        cargo: 'Oficial de Negocio',
        ingreso: '18/10/2018',
        hora: '19:16',
        estado: 'Se Envio Riuesgo de Admision',
      },
      {
        id: 3,
        nombre: 'Angel Mendoza',
        cargo: 'Oficial de Negocio',
        ingreso: '18/10/2018',
        hora: '19:16',
        estado: 'Se ha Creado el Expediente 201880018',
        estado2: 'Se encuentra en la Ubicacion Comercial',
      }
    ]
  }

  dettalleOne(){
    this.router.navigate([RUTAS_COMERCIAL_OPERACIONES.expediente +'/'+ this.expedienteId +'/'+ RUTAS_COMERCIAL_OPERACIONES.expedientes.detalle ]);

  }

  DocumentosExpedintes(item) {
    let Id = undefined;
    this.router.navigate([RUTAS_COMERCIAL_OPERACIONES.expediente + '/' + Id +'/' + RUTAS_COMERCIAL_OPERACIONES.expedientes.documentos]);
  }
}