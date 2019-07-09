import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-asignar',
  templateUrl: './asignar.component.html',
})
export class AsignarComponent implements OnInit {
  metasComerciales: any;
  public listaEjecutivos: Array<any>;
  public links: Array<any>;
  public lstObj: Array<any>;
  public expedienteId: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.links = [
      { titulo: 'Metas Comerciales', link: "/comercial/fuerza-ventas/ejecutivos" },

    ];
    this.activatedRoute.params.subscribe(params => {
      this.expedienteId = params.codigo;
    });

  }

  ngOnInit() {
    this.metasComerciales = '$'

    this.listaEjecutivos = [

      {
        id: 1,
        ejecutivo: "Jorge Rosado",
        cargo: "Gerente Comercial ",
        distrito: "Lima ",
        obj: "Obj",
        obj2: "Real",
        enero: "$200,00",
        enero2: "$250,00",
        febrero: "$200,00",
        febrero2: "$250,00",
        marzo: "$200,00",
        marzo2: "$250,00",
        abril: "$200,00",
        abril2: "$250,00",
        mayo: "$200,00",
        mayo2: "$250,00",
        junio: "$200,00",
        junio2: "$250,00",
        julio: "$200,00",
        julio2: "$250,00",
        agosto: "$200,00",
        agosto2: "$250,00",
      },

      {
        id: 2,
        ejecutivo: "Jorge Rosado",
        cargo: "Gerente Comercial ",
        distrito: "Lima ",
        obj: "Obj",
        obj2: "Real",
        enero: "$200,00",
        enero2: "$250,00",
        febrero: "$200,00",
        febrero2: "$250,00",
        marzo: "$200,00",
        marzo2: "$250,00",
        abril: "$200,00",
        abril2: "$250,00",
        mayo: "$200,00",
        mayo2: "$250,00",
        junio: "$200,00",
        junio2: "$250,00",
        julio: "$200,00",
        julio2: "$250,00",
        agosto: "$200,00",
        agosto2: "$250,00",
      },

      {
        id: 3,
        ejecutivo: "Jorge Rosado",
        cargo: "Gerente Comercial ",
        distrito: "Lima ",
        obj: "Obj",
        obj2: "Real",
        enero: "$200,00",
        enero2: "$250,00",
        febrero: "$200,00",
        febrero2: "$250,00",
        marzo: "$200,00",
        marzo2: "$250,00",
        abril: "$200,00",
        abril2: "$250,00",
        mayo: "$200,00",
        mayo2: "$250,00",
        junio: "$200,00",
        junio2: "$250,00",
        julio: "$200,00",
        julio2: "$250,00",
        agosto: "$200,00",
        agosto2: "$250,00",
      },


      {
        id: 4,
        ejecutivo: "Jorge Rosado",
        cargo: "Gerente Comercial ",
        distrito: "Lima ",
        obj: "Obj",
        obj2: "Real",
        enero: "$200,00",
        enero2: "$250,00",
        febrero: "$200,00",
        febrero2: "$250,00",
        marzo: "$200,00",
        marzo2: "$250,00",
        abril: "$200,00",
        abril2: "$250,00",
        mayo: "$200,00",
        mayo2: "$250,00",
        junio: "$200,00",
        junio2: "$250,00",
        julio: "$200,00",
        julio2: "$250,00",
        agosto: "$200,00",
        agosto2: "$250,00",
      },

      {
        id: 5,
        ejecutivo: "Jorge Rosado",
        cargo: "Gerente Comercial ",
        distrito: "Lima ",
        obj: "Obj",
        obj2: "Real",
        enero: "$200,00",
        enero2: "$250,00",
        febrero: "$200,00",
        febrero2: "$250,00",
        marzo: "$200,00",
        marzo2: "$250,00",
        abril: "$200,00",
        abril2: "$250,00",
        mayo: "$200,00",
        mayo2: "$250,00",
        junio: "$200,00",
        junio2: "$250,00",
        julio: "$200,00",
        julio2: "$250,00",
        agosto: "$200,00",
        agosto2: "$250,00",
      },

    ];
    this.lstObj = [
      {
      
       objEnero: ' $1,500.00',
       objFebrero: ' $1,500.00',
       objMarzo: ' $1,500.00',
       objAbril: ' $1,500.00',
       objMayo: ' $1,500.00',
       objJunio: ' $1,500.00',
       objJulio: ' $1,500.00',
       objAgosto: ' $1,500.00',

      
       asigEnero: '98%',
       asigFebrero: '98%',
       asigMarzo: '98%',
       asigAbril: '98%',
       asigMayo: '98%',
       asigJunio: '98%',
       asigJulio: '98%',
       asigAgosto: '98%',
      
       realEnero: ' $1.200.00',
       realFebrero: ' $1.200.00',
       realMarzo: ' $1.200.00',
       realAbril: ' $1.200.00',
       realMayo: ' $1.200.00',
       realJunio: ' $1.200.00',
       realJulio: ' $1.200.00',
       realAgosto: ' $1.200.00',
    
       compEnero: '90%',
       compFebrero: '90%',
       compMarzo: '90%',
       compAbril: '90%',
       compMayo: '90%',
       compJunio: '90%',
       compJulio: '90%',
       compAgosto: '90%',
      },

    ]

  }

}
