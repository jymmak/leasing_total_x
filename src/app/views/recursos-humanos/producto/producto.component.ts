import { Component } from '@angular/core';
import { ToastPlugin } from "../../../plugins/toast.plugin";

@Component({
    selector: 'producto',
    templateUrl: 'producto.template.html',
    providers: [
        ToastPlugin
    ]
})

export class ProductoComponent {
    public links: Array<any>;
    public spinner: boolean;


    constructor(private _toast: ToastPlugin) {
        this.spinner = false;
        this.links = [
            { titulo: 'Producto', link: "/recursos-humanos/producto" }
        ];
        // Create 100 users

        // Assign the data to the data source for the table to render
    }


}
