import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ToastPlugin } from "../../../../../plugins/toast.plugin";
import { Router } from '@angular/router';
import { Location } from '@angular/common';
declare var $: any;

@Component({
    selector: 'editar-ejec',
    templateUrl: 'editar-ejec.template.html',
    providers: [
        ToastPlugin
    ]
})
export class EditarEjecComponent implements OnInit{
    // Cabecera de cada Vista
    public links: Array<any>;
    public Ejecutivo: Array<any>;
    public datosSucursal: Array<any>;


    constructor(private _location: Location,private router: Router, private _toast: ToastPlugin) {
        this.links = [
            { titulo: 'Editar Ejecutivo' },

        ];
    }
    ngOnInit(): void {
        this.Ejecutivo = [
            {
                name: 'Jorge Luis Chavez Malavé',
                cargo:'Gerente Comercial'
            },
            
        ];
        this.datosSucursal = [
            { id: 1, value: '', text: "<div class='font'></div> " },
            { id: 1, value: '', text: "<div></div> Lima " },
            { id: 1, value: '', text: "<div></div> Trujillo" },
            { id: 1, value: '', text: "<div></div> Cuzco" },
            { id: 1, value: '', text: "<div></div> Arequipa " },
            { id: 1, value: '', text: "<div></div> Piura" },
            { id: 1, value: '', text: "<div></div> Chiclayo" },
            { id: 1, value: '', text: "<div></div> Cajamarca " },
            { id: 1, value: '', text: "<div></div> Huancayo" },

        ];
    }

    cancelarAddEditar() {
        this._location.back();
    }

    confirmarGuardarEjec(){
        this.router.navigate(['/comercial/administracion/ejecutivos']);
    }
}
