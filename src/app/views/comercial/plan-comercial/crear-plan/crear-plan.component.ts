import { Component} from '@angular/core';
import { ToastPlugin } from "../../../../plugins/toast.plugin";
import { Router } from '@angular/router';


@Component({
    selector: 'crear-plan',
    templateUrl: 'crear-plan.template.html',
    providers: [
        ToastPlugin
    ]
})
export class PlanComponent  {
    // Cabecera de cada Vista
    public links: Array<any>;
   
   
    constructor(private router: Router, private _toast: ToastPlugin) {
        this.links = [
            { titulo: 'Plan' },

        ];
    }
   
}
