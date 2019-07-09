import { Component } from '@angular/core';
import { ToastPlugin } from "../../../plugins/toast.plugin";


@Component({
    selector: 'adm-cotizacion',
    templateUrl: 'adm-cotizacion.template.html',
    providers: [
        ToastPlugin
    ]
})


export class AdmCotizacionComponent {

    public links: Array<any>;

    constructor(private _toast: ToastPlugin) {

        this.links = [
            { titulo: 'Cotización', link: "/mantenimiento/adm-cotizacion" }
        ];
    }
}
