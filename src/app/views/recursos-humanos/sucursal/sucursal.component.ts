import { Component, ViewChild, OnInit } from '@angular/core';
import { ToastPlugin } from "../../../plugins/toast.plugin";

@Component({
    selector: 'sucursal',
    templateUrl: 'sucursal.template.html',
    providers: [
        ToastPlugin
    ]
})
export class SucursalComponent {
    public links: Array<any>;




    constructor(private _toast: ToastPlugin) {

        this.links = [
            { titulo: 'Sucursal', link: "/recursos-humanos/sucursal" }
        ];
      }
}
