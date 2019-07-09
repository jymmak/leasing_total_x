import { Component, OnInit } from '@angular/core';
import { ToastPlugin } from "../../../../plugins/toast.plugin";
import { Router } from '@angular/router';


@Component({
    selector: 'page-organigrama',
    templateUrl: 'organigrama.template.html',
    providers: [
        ToastPlugin
    ]
})
export class OrganigramaComponent implements OnInit {

    // Cabecera de cada Vista
    public links: Array<any>;
    public lstEquiposComerciales: Array<any>;

    constructor(private router: Router, private _toast: ToastPlugin) {
        this.links = [
            { titulo: 'Organigrama' },

        ];

    }




    ngOnInit() {
       this.lstEquiposComerciales = [
          {
               GerenteComercial : "Jorge Rosado",
               cargo : "Gerente Comercial",
               distrito: 'lima',
               norte: 'norte',
               sur: 'sur',
               sucursales: 'sucursales'
          } 
       ]
       

       
    
    }
}
