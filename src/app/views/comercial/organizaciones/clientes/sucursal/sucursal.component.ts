import { Component, ViewChild, OnInit } from '@angular/core';
import { ToastPlugin } from "../../../../../plugins/toast.plugin";
 
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { SucursalbuscadorComponent } from './buscador/buscador.component';
declare var $: any;
export interface UserData {
    id: string;
    codigo: any;
    nombre: string;
    tipo: string;
    direccion: string;
    distrito: string;
    ciudad: string;
    telefono: number;
    encargado: string;
    // actionsColumn: any;


}

// Constantes de Tabla
const CODIGO: any[] = ['CO001', 'CO002']
const NOMBRES: string[] = ['Oficina Lima', 'Oficina Chimbote'];
const TIPO: string[] = ['Principal', 'Secundaria'];
const DIRECCION: string[] = ['Av. Universitaria Mz A', 'Av. Pardo 932'];
const DISTRITO: string[] = ['Los Olivos', 'Miramar'];
const CIUDAD: string[] = ['Lima', 'Chimbote'];
const TELEFONO: number[] = [3556669, 3655565];
const ENCARGADO: string[] = ['Santos Mendoza', 'Vidal Mendoza'];


@Component({
    selector: 'contacto-sucursal',
    templateUrl: 'sucursal.template.html',
    providers: [
        ToastPlugin
    ]
})


export class SucursalComponent implements OnInit {
    public links: Array<any>;
    public spinner: boolean;
    ngOnInit(): void {
    }
}
