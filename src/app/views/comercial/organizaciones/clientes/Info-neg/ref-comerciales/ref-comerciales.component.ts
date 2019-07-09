import { Component, OnInit } from '@angular/core';
import { ToastPlugin } from 'src/app/plugins/toast.plugin';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ref-comerciales',
  templateUrl: './ref-comerciales.component.html',
  providers: [
    ToastPlugin
  ]
})
export class RefComercialesComponent implements OnInit {
  public links: Array<any>;
  public listaPrincipalesProvedores: Array<any>;
  public listaPrincipalesClientes: Array<any>;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.links = [
      { titulo: 'Información de Negocios', link: "/comercial/organizaciones/clientes/info-neg" }
    ];

  }


  ngOnInit() {
   this.listaPrincipalesClientes = [
    {
      empresa: 'Miisui S.A',
      producto: 'Maquinaria',
      telefono: '932 34 28' ,
      contacto: 'Diana Sato',
      moneda: 'S',
      comprasAnual: '340,000',
      saldoporPagar: '30,000'
    },
    {
      empresa: 'Divemotor S.A',
      producto: 'Camiones',
      telefono: '932 34 28' ,
      contacto: 'Erick Castro',
      moneda: 'S',
      comprasAnual: '160,000',
      saldoporPagar: '30,000'
    }
   ];
    this.listaPrincipalesProvedores = [
      {
        empresa: 'Miisui S.A',
        producto: 'Maquinaria',
        telefono: '932 34 28' ,
        contacto: 'Diana Sato',
        moneda: 'S',
        comprasAnual: '340,000',
        saldoporPagar: '30,000'
      },
      {
        empresa: 'Divemotor S.A',
        producto: 'Camiones',
        telefono: '932 34 28' ,
        contacto: 'Erick Castro',
        moneda: 'S',
        comprasAnual: '160,000',
        saldoporPagar: '30,000'
      }
    ];
  }

  antecedentes() {
		$("#antecedentes").removeClass("button-panel-info").addClass("button-panel-after");
		this.router.navigate(['/comercial/organizaciones/clientes/Info-neg']);
	}

	socios() {
		$("#socios").removeClass("button-panel-info").addClass("button-panel-after");
		this.router.navigate(['/comercial/organizaciones/clientes/Info-neg/socios-accionistas']);
	}

	Principales() {
		$("#principales").removeClass("button-panel-info").addClass("button-panel-after");
		this.router.navigate(['/comercial/organizaciones/clientes/Info-neg/principales-activos']);
	}
	comerciales() {
		$("#Comerciales").removeClass("button-panel-info").addClass("button-panel-after");
		this.router.navigate(['/comercial/organizaciones/clientes/Info-neg/ref-comerciales']);
	}
}
