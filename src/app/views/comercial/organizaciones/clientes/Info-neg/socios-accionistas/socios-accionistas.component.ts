import { Component, OnInit } from '@angular/core';
import { ToastPlugin } from 'src/app/plugins/toast.plugin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-socios-accionistas',
  templateUrl: './socios-accionistas.component.html',
  providers: [
		ToastPlugin
	]
})
export class SociosAccionistasComponent implements OnInit {

  public lstSocios: Array<any>;
  public lstAcciones: Array<any>;
  public lstAccionesMensajes: Array<any>;
  public links: Array<any>;

  constructor(private router: Router) {
    this.links = [
			{ titulo: 'Socios y Accionistas' },

		];
  }


  ngOnInit() {
    this.lstSocios = [
     {
       item: '1',
       nombre: 'Quispe Malvin Marino Florencio',
       cargo: 'Titular Gerente' ,
       accionado: ' 80',
     },
     {
      item: '2',
      nombre: 'Quispe Malvin Marino Florencio',
      cargo: 'Titular Gerente' ,
      accionado: ' 20',
     }
    ];
     this.lstAcciones = [
       {
         cuenta: 'Cuentas Cerradas',
         nra: 'NRA',
         cuenta2: 'Cuentas Cerradas' ,
         nra2: 'NRA',
       },
       {
        cuenta: 'Tarjetas Anuladas',
         nra: 'NRA',
         cuenta2: 'Tarjetas Anuladas' ,
         nra2: 'NRA'
       },
       {
        cuenta: 'Boletines de  Protesto de Facturas',
         nra: 'NRA',
         cuenta2: 'Tarjetas Anuladas' ,
         nra2: 'NRA'
       },
     ];
     this.lstAccionesMensajes = [
      {
       mensajes: 'no registra deudas en el periodo'
      },
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
