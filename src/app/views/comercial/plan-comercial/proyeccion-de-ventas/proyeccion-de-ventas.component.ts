import { Component} from '@angular/core';
import { ToastPlugin } from "../../../../plugins/toast.plugin";
import { Router } from '@angular/router';


@Component({
    selector: 'proyeccion-de-ventas',
    templateUrl: 'proyeccion-de-ventas.template.html',
    providers: [
        ToastPlugin
    ]
})
export class ProyeccionComponent  {
    // Cabecera de cada Vista
    public links: Array<any>;
   
   
    constructor(private router: Router, private _toast: ToastPlugin) {
        this.links = [
            { titulo: 'Proyección' },

        ];
    }
   
}
