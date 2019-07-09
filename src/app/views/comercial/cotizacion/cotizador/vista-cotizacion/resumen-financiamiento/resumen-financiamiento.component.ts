import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastPlugin } from "../../../../../../plugins/toast.plugin";

declare var $: any;



@Component({
    selector: 'resumen-financiamiento',
    templateUrl: 'resumen-financiamiento.template.html',
    providers: [
        ToastPlugin
    ]
})
export class ResumenFinanciamientoComponent {

}
