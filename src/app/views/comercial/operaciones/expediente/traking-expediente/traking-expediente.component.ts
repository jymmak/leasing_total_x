import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'traking-expediente',
  templateUrl: './traking-expediente.component.html',
})
export class TrakingExpedienteComponent implements OnInit {
	public links: Array<any>;
	public Documentacion: Array<any>;
	public Evaluacion: Array<any>;
	public Cierre: Array<any>;
	public Cerrados: Array<any>;
  constructor( private router: Router) {
	
		this.links = [
			{ titulo: 'Tracking de Expedientes' }
		];

	}
  ngOnInit() {

    let param = this.router.parseUrl(this.router.url);
    console.log(param.queryParams);
    if(param !== null){
    }

      this.Documentacion = [
        {
          id: 1,
          cliente: 'Transporte Felipe S.A',
          vaf: "$ 30,800,00",
         
        },
        {
          id: 2,
          cliente: 'Minera TEM S.A',
          vaf: "$ 110,300,00",
        },
        {
          id: 3,
          cliente: 'Transporte Felipe S.A',
          vaf: "$ 30,800,00",
        },
        {
          id: 4,
          cliente: 'Minera TEM S.A',
          vaf: "$ 110,300,00",
        },
        {
          id: 5,
          cliente: 'Transporte Felipe S.A',
          vaf: "$ 30,800,00",
        },
        {
          id: 6,
          cliente: 'Minera TEM S.A',
          vaf: "$ 110,300,00",
        },
      ];
  
      this.Evaluacion = [
        {
          id: 1,
          cliente: 'Transporte Felipe S.A',
          vaf: "$ 30,800,00",
         
        },
        {
          id: 2,
          cliente: 'Minera TEM S.A',
          vaf: "$ 110,300,00",
        },
        {
          id: 3,
          cliente: 'Transporte Felipe S.A',
          vaf: "$ 30,800,00",
        },
        {
          id: 4,
          cliente: 'Minera TEM S.A',
          vaf: "$ 110,300,00",
        },
    
      ];
  
      this.Cierre = [
        {
          id: 1,
          cliente: 'Transporte Felipe S.A',
          vaf: "$ 30,800,00",
         
        },
        {
          id: 2,
          cliente: 'Minera TEM S.A',
          vaf: "$ 110,300,00",
        },

      ];

      this.Cerrados = [
        {
          id: 1,
          cliente: 'Transporte Felipe S.A',
          vaf: "$ 30,800,00",
         
        }

      ];
  
  
  }


  cancelarTrekinExp(){
		this.router.navigate(['/comercial/operaciones/expediente']);

  }

}
