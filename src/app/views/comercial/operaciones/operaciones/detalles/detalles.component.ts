import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RUTAS_COMERCIAL_OPERACIONES } from 'src/config/rutas-modulos/rutas-comercial';

@Component({
  selector: 'detalles',
  templateUrl: './detalles.component.html',
})
export class DetallesComponent implements OnInit {
	public links: Array<any>;
	public lstOperacion: Array<any>;
	public lstBienes: Array<any>;
	public lstGarantias: Array<any>;
	public lstCliente: Array<any>;
	public selectItem: any;
	public mostrarAvanzada: boolean = false;
  public expedienteId: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
		this.links = [
			{ titulo: 'Lista de Operaciones' },
		];
		this.selectItem = {};
		this.activatedRoute.params.subscribe(params => {
			this.expedienteId = params.codigo;
		});
	}

  ngOnInit() {

    this.lstOperacion = [
      {
        operacion: '1378686',
        ubicacion: 'Riesgos',
        estado: ' En Evaluacion',
        Moneda: 'ME',
        vaf: '$112,200',
        inical: '25% ',
        coloNeta: '$ 105,400',
        tea: '12%',
        expediente: '13313355',
        caf: '174994483',
        plazo: '96 meses ',
        ejecutivo: 'Pedro Soto ',
        mesGracia: ' 1 mes ',
        garantias: ' 1 ',
        opcCompra: ' 1 %',
        evaluadoPor: 'Tatiana  Rivas',
      }
    ]
    this.lstBienes = [
      {
        item: '1',
        subNivel: 'Remolcador',
        clase: 'Camion',
        marca: 'Volvo',
        ano: '2018',
        precio: '$ 134,200 ',
        cantidad: '1',
        valorTotal: '$ 134,200',
       
      }
    ]
    this.lstGarantias = [
      {
        item: '1',
        categoria: 'Prenderia',
        tipo: 'Sabana',
        descripcion: '1 Bus Mitsubishi Fuso Rosa año 2013',
        valor: '$ 134,200',
     
       
      }
    ]
    this.lstCliente = [
      {
        nombre: 'Eminente SAC',
        tipo: 'Oportunidad',
        contactoPrinciapl: 'Jose Ramires',
        ruc: '2028374913',
        califCtred: ' Normal',
     
       
      }
    ]
   
  }

  listaOperaciones(){
    this.router.navigate([RUTAS_COMERCIAL_OPERACIONES.Operaciones.init ]);

  }

}
