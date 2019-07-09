import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { RUTAS_COMERCIAL_OPERACIONES } from 'src/config/rutas-modulos/rutas-comercial';

@Component({
  selector: 'app-expediente-detalle',
  templateUrl: './expediente-detalle.component.html',
})
export class ExpedienteDetalleComponent implements OnInit {
  public expedienteId: any;
  public links: Array<any>;
  public panelInf: Array<any>;
  public detallesExp: Array<any>;
  public lstClienteDetalle: Array<any>;
  public lstExpedienteProvedor: Array<any>;
  public lstClienteOperacion: Array<any>;
  public lstExpedienteRelacion: Array<any>;
  public numExpediente: string;
  constructor(private router: Router, private activatedRoute: ActivatedRoute ) {
    this.numExpediente = '201880018'
    this.links = [
      { titulo: 'Detalles del expediente ' + '' + this.numExpediente },
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
      tipoOperacion: 'Leasing',
    }],

      this.detallesExp = [{
        vafTotal: '$ 210,500.00',
        ColabNeta: '$ 195,189.00',
        actualizado: 'Angel Mendoza',
        fechaActualizado: '31/10/18',
        ejecutivoComercial: 'Angel Mendoza',
        analistaRiego: 'Angi Baldoceda',
      }]
    this.lstClienteDetalle = [
      {
        id: 1,
        cliente: 'Ferromotriz S.A.C',
        telefono: '',
        cruc: 'RUC 2014 2834 121',
        contactoCliente: 'Marino Florencia Quispe Balvin',
        contactoTelefono: '940 922 898',
        contactoRuc: 'marino@contacto.com',
        gerenteCliente: 'Marino Florencia Quispe Balvin',
        gerenteTelefono: '940 922 898',
        gerenteRuc: 'marino@contacto.com',
        contadorCliente: 'Marino Florencia Quispe Balvin',
        contadorTelefono: '940 922 898',
        contadorRuc: 'marino@contacto.com',
      },
    ],
      this.lstExpedienteProvedor = [
        {
          id: 1,
          provedor: 'Grupo Pana',
          sucursal: 'Surco',
          contacto: 'Jose Huertas',
          telefono: '01 200 2656',
          celular: '+51 960 922 553',
          email: 'contacto@grupopana.com',
        },
      ],
       this.lstClienteOperacion = [
        {
          id: 1,
          numOperacion: 'Ope-2430',
          nivel: 'VEH',
          unidad: '1 ',
          subnivel: 'Liviano',
          clase: 'SUV',
          marca: 'Honda',
          vaf: ' $ 98.500.00 ',
          tea: '14% ',
          plazos: ' 36',
          inicial: '10% ',
        },
        {
          id: 1,
          numOperacion: 'Ope-2431',
          nivel: 'VEH',
          unidad: '1 ',
          subnivel: 'Liviano',
          clase: 'SUV',
          marca: 'Honda',
          vaf: ' $ 51.500.00 ',
          tea: '14% ',
          plazos: ' 36',
          inicial: '10% ',
        },
       ],

         this.lstExpedienteRelacion = [
          {
            id: 1,
            numOperacion: '201603878',
            nivel: 'COT 1086',
            unidad: 'CAF 1098',
            subnivel: '',
            vafTotal: 'US$ 98,500.00',
            colocacionNeta: '$ 98.500.00',
            oficialNegocio: 'Angel Mendoza',
          },
          {
            id: 2,
            numOperacion: '20170105',
            nivel: 'COT 2123',
            unidad: 'CAF 2123',
            subnivel: '',
            vafTotal: 'US$ 51,500.00',
            colocacionNeta: '$ 51.500.00',
            oficialNegocio: 'Angel Mendoza',

          },

        ]
    
      console.log(this.lstExpedienteProvedor);


  }

  DocumentosExpedintes(item) {
    this.router.navigate([RUTAS_COMERCIAL_OPERACIONES.expediente + '/' + this.expedienteId +'/' + RUTAS_COMERCIAL_OPERACIONES.expedientes.documentos]);

    // this.router.navigate(['/comercial/operaciones/expediente/documentos-expedientes']);

  }

  cancelarTrekinExp() {
    this.router.navigate([RUTAS_COMERCIAL_OPERACIONES.expediente]);

  }

  detalleExpe2(){
    this.router.navigate([RUTAS_COMERCIAL_OPERACIONES.expediente  + '/' + this.expedienteId +'/' + RUTAS_COMERCIAL_OPERACIONES.expedientes.detalleTwo]);
  }

}
