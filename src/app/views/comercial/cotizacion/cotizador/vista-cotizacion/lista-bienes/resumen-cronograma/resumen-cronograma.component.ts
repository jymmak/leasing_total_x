import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastPlugin } from "../../../../../../../plugins/toast.plugin";
   
declare var $: any;


export interface UserData {
    id: string;
    fecha: any;
    capital: any;
    seguro: any;
    gastos: any;
    interes: any;
    cuota: any;
    comision: any;
    igv: any;
    pagar: any;
}



@Component({
    selector: 'resumen-cronograma',
    templateUrl: 'resumen-cronograma.template.html',
    providers: [
        ToastPlugin
    ]
})
export class ResumenCronogramaComponent implements OnInit {
    public spinner: boolean;
    displayedColumns: Array<any> = ['id', 'fecha', 'capital', 'seguro', 'gastos', 'interes', 'cuota', 'comision', 'igv', 'pagar'];

    ngOnInit() {
        this.list();
    }
    list() {
        this.spinner = true;
        setTimeout(() => {
            const users = Array.from({ length: 10 }, (_, k) => createNewUser(k + 1));
         

            this.spinner = false;
        }, 1000);
    }

    applyFilter(filterValue: string) {
       
    }
}

function createNewUser(id: number): UserData {

    return {
        id: id.toString(),
        fecha: '14/08/2018',
        capital: '$ 1,620.61',
        seguro: '$ 135.34',
        gastos: '$ 16.75',
        interes: '$ 1,726.74',
        cuota: '$ 1,016.49',
        comision: '$ 2.5',
        igv: '$ 1,830.51',
        pagar: '$ 12,000.00',

    };
}