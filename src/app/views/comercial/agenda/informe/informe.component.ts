import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ToastPlugin } from "../../../../plugins/toast.plugin";
import swal from 'sweetalert2';
import { RUTAS_COMERCIAL_AGENDA } from 'src/config/rutas-modulos/rutas-comercial';

declare var $: any;

@Component({
    selector: 'informe',
    templateUrl: 'informe.template.html',

    providers: [
        ToastPlugin
    ]
})
export class InformeComponent implements OnInit {


    src = "/assets/img/CT-62.pdf";
    abrirModal: boolean = false;
    contactos: any[];
    opcionSeleccionado: string = '0'; // Iniciamos
    verSeleccion: Array<any>;
    modal1: boolean = false;
    modal2: boolean = false;
    modal3: boolean = false;
    listaContactos: Array<any>;
    public elementCompónent: any;
  
    // Cabecera de cada Vista
    public links: Array<any>;

    @ViewChild('pdf') createPdfs: ElementRef;
    constructor(public el: ElementRef, private router: Router) {
        // this.src = "/assets/img/CT-62.pdf";
        this.elementCompónent = el.nativeElement as HTMLObjectElement;
        this.verSeleccion = [];
        this.links = [
            { titulo: 'Informe de Resultado de Gestión', link: "/comercial/agenda" },
        ];
    }
    ngOnInit(): void {


 
    }

    cargarpdf() {
        this.src = "/assets/img/CT-62.pdf";
    }

    eliminar(event) {
        let index: number = this.contactos.findIndex(value => parseInt(event.id, 0) === value.id);
        this.verSeleccion.splice(index, 1);
        console.log(this.verSeleccion);
        this.contactos.push(event);
    }

    atras(){
        this.router.navigate([RUTAS_COMERCIAL_AGENDA.agenda.lista]);
    }

}

