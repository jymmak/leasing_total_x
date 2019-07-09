import { Component} from '@angular/core';
import { ToastPlugin } from "../../../../plugins/toast.plugin";
import { Router } from '@angular/router';
import { RUTAS_COMERCIAL_ADMINISTRACION } from 'src/config/rutas-modulos/rutas-comercial';


@Component({
    selector: 'comisiones-de-ventas',
    templateUrl: 'comisiones-de-ventas.template.html',
    providers: [
        ToastPlugin
    ]
})
export class ComisionesVentaComponent  {
    // Cabecera de cada Vista
    public links: Array<any>;
    public listaComisionVentas: Array<any>;
   
   
    constructor(private router: Router, private _toast: ToastPlugin) {
        this.links = [
            { titulo: 'Mantenimiento de Comisiones de Ventas' },

        ];
    }

    ngOnInit() {
		this.listaComisionVentas = [
			{
				item: 1,
				RnagoInferior: "$ 10,000",
				RangoSuperiori: "$ 30,000",
				importeSoles: "S/. 150",
			
			},

			{
                item: 2,
				RnagoInferior: "$ 31,001",
				RangoSuperiori: "$ 50,000",
				importeSoles: "S/. 200",
			},

			{
				item: 3,
				RnagoInferior: "$ 50,001",
				RangoSuperiori: "$ 180,000",
				importeSoles: "S/. 300",
			},

			{
                item: 4,
				RnagoInferior: "$ 180,001",
				RangoSuperiori: "$ 250,000",
				importeSoles: "S/. 400",
			},
			{
                item: 5,
				RnagoInferior: "$ 250,001",
				RangoSuperiori: "$ 35,000",
				importeSoles: "S/. 500",
			},


		];
	}
   

    nuevo(){
        let nuevaCondicion = RUTAS_COMERCIAL_ADMINISTRACION.administracion.init;
        this.router.navigate([nuevaCondicion + '/' + RUTAS_COMERCIAL_ADMINISTRACION.administracion.comision.comisionesVenta + '/' + RUTAS_COMERCIAL_ADMINISTRACION.administracion.comision.nuevoComision]);
        
    }
}
