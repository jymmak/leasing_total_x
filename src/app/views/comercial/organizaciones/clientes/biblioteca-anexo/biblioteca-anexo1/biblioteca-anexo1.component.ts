import { Component, OnInit } from '@angular/core';
import { ToastPlugin } from 'src/app/plugins/toast.plugin';
import { Router } from '@angular/router';



@Component({
  selector: 'app-biblioteca-anexo1',
  templateUrl: './biblioteca-anexo1.component.html',
  providers: [
    ToastPlugin
  ]
})
export class BibliotecaAnexo1Component implements OnInit {
  public listaBiblioteca: Array<any>;
  public buscarBiblioteca: string;
  public links: Array<any>;
  

  constructor(private router: Router) { 
    this.links = [
			{ titulo: 'Biblioteca de Anexo'},
		
		];
  }

  ngOnInit() {

    this.listaBiblioteca = [
      {
        id: 1,
        ruc: '20516224216',
        cliente: "Transporte E.I.R.L",
        fechaApertura: '22/09/2018',
        ultimaActualizacion: '16:03'
      },
      {
        id: 2,
        ruc: '20516224216',
        cliente: "Transporte Acuario S.A.C",
        fechaApertura: '22/04/2018',
        ultimaActualizacion: '13:19'
      },
      {
        id: 3,
        ruc: '20516224216',
        cliente: "Empresa de transporte Cecilia Martin E.I.R.L",
        fechaApertura: '01/10/2017',
        ultimaActualizacion: '09:54'
      },
      {
        id: 4,
        ruc: '20516224216',
        cliente: "Ferromotriz S.A.C",
        fechaApertura: '15/05/2018',
        ultimaActualizacion: '15:32'
      },
    ];

  }

  select(value) {
    console.log(value);
    if (value.id === "0" || value.id === null) {
      $(".circulobotonsdelete").removeClass("circulobotons_habilitados").addClass("circulobotonsdelete");
    } else {
      $(".iconsborder").removeAttr("disabled");
      $(".circulobotonsdelete").removeClass("circulobotonsdelete").addClass("circulobotons_habilitados");
    }
    let selectedPosition = {
      value: value
    };
  }

  busquedaBiblioteca() {
    console.log(this.buscarBiblioteca);

  }
  detalleBiblioteca2() {
    this.router.navigate(['/comercial/organizaciones/clientes/biblioteca-anexo/biblioteca-anexo2']);
   }
}
