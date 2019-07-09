import { Component} from '@angular/core';
import { ToastPlugin } from "../../../../plugins/toast.plugin";
import { Router } from '@angular/router';


@Component({
    selector: 'page-seguimiento',
    templateUrl: 'seguimiento-plan.template.html',
    providers: [
        ToastPlugin
    ]
})
export class SeguimientoComponent  {
    // Cabecera de cada Vista
    public links: Array<any>;
   
   
    constructor(private router: Router, private _toast: ToastPlugin) {
        this.links = [
            { titulo: 'Seguimiento' },

        ];
    }
   
}
