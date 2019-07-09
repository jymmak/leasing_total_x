import { Component, ElementRef, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ToastPlugin } from "../../../../../plugins/toast.plugin";
import { RUTAS_COMERCIAL_COTIZACIONES } from 'src/config/rutas-modulos/rutas-comercial';

declare var $: any;



@Component({
    selector: 'enviar-pdf-component',
    templateUrl: 'enviar-pdf.template.html',
    providers: [
        ToastPlugin
    ]
})
export class EnviarPdfComponent implements OnInit {
    @Output() accionGuardar = new EventEmitter();
    @Output() accionAtras = new EventEmitter();

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
    public editarListaCliente: any;
    // Cabecera de cada Vista
    public links: Array<any>;

    @ViewChild('pdf') createPdfs: ElementRef;
    constructor(public el: ElementRef, private router: Router) {
        // this.src = "/assets/img/CT-62.pdf";
        this.elementCompónent = el.nativeElement as HTMLObjectElement;
        this.verSeleccion = [];
        this.links = [
            { titulo: 'Vista Previa de Cotización', link: "/comercial/cotizacion" },
        ];
    }
    ngOnInit(): void {

        let param = this.router.parseUrl(this.router.url);
        console.log(param.queryParams);
        this.editarListaCliente = param.queryParams;
        if (this.editarListaCliente === param.queryParams) {
            this.cargarpdf();
            this.abrirModal1();
        }
        console.log(this.editarListaCliente);

        this.listaContactos = [
            { id: 1, value: 'Fernandez Obregon', text: "<div class='form-check'><label class='form-check-label' for='defaultCheck1'><input  class='form-check-input'  type='checkbox' id='defaultCheck1'>Fernandez Obregon</label></div>" },
            { id: 2, value: 'jose sanchez', text: "<div class='form-check'><label class='form-check-label' for='defaultCheck1'><input  class='form-check-input' type='checkbox' id='defaultCheck1'> jose sanchez</label></div>" },
            { id: 3, value: 'jorge Rivera ', text: "<div class='form-check'><label class='form-check-label' for='defaultCheck1'><input  class='form-check-input' type='checkbox' id='defaultCheck1'>jorge Rivera </label></div>" },
            { id: 4, value: 'Joaquin Tile', text: "<div class='form-check'><label class='form-check-label' for='defaultCheck1'><input  class='form-check-input' type='checkbox' id='defaultCheck1'>Joaquin Tile </label></div>" },
            { id: 5, value: 'Julieta Medina', text: "<div class='form-check'><label class='form-check-label' for='defaultCheck1'><input  class='form-check-input' type='checkbox' id='defaultCheck1'>Julieta Medina</label></div>" },
            { id: 6, value: 'Juan lopez', text: "<div class='form-check'><label class='form-check-label' for='defaultCheck1'><input  class='form-check-input' type='checkbox' id='defaultCheck1'>Juan lopez</label></div>" }

        ];
        this.contactos = [
            { id: 1, value: 'FerObreddfFernandezon', text: "<div class='form-check'><label class='form-check-label' for='defaultCheck1'><input  class='form-check-input'  type='checkbox' id='defaultCheck1'>Fernandez Obregon</label></div>" },
            { id: 2, value: 'jose sanchez', text: "<div class='form-check'><label class='form-check-label' for='defaultCheck1'><input  class='form-check-input' type='checkbox' id='defaultCheck1'> jose sanchez</label></div>" },
            { id: 3, value: 'jorge Rivera ', text: "<div class='form-check'><label class='form-check-label' for='defaultCheck1'><input  class='form-check-input' type='checkbox' id='defaultCheck1'>jorge Rivera </label></div>" },
            { id: 4, value: 'Joaquin Tile', text: "<div class='form-check'><label class='form-check-label' for='defaultCheck1'><input  class='form-check-input' type='checkbox' id='defaultCheck1'>Joaquin Tile </label></div>" },
            { id: 5, value: 'Julieta Medina', text: "<div class='form-check'><label class='form-check-label' for='defaultCheck1'><input  class='form-check-input' type='checkbox' id='defaultCheck1'>Julieta Medina</label></div>" },
            { id: 6, value: 'Juan lopez', text: "<div class='form-check'><label class='form-check-label' for='defaultCheck1'><input  class='form-check-input' type='checkbox' id='defaultCheck1'>Juan lopez</label></div>" }
        ];
        this.cargarpdf();
    }

    cargarpdf() {
        this.src = "/assets/img/CT-62.pdf";
        // this.createPdfs.nativeElement.setAttribute('src', 'https://react-etc.net/files/typescript-book/typescript.pdf#zoom=90');
    }

    enviarPdf() {
        this.abrirModal = true;
    }

    btnAtras() {
        this.router.navigate(['/comercial/cotizacion/cotizador'], { queryParams: { tab: 'bienes' } });
    }

    selectedContactos(event) {
        let selectValue: any = this.contactos.find(value => parseInt(event.id, 0) === value.id);
        let index: number = this.contactos.findIndex(value => parseInt(event.id, 0) === value.id);
        console.log(this.contactos[index]);
        this.verSeleccion.push({
            id: this.contactos[index].id,
            value: this.contactos[index].value,
            text: this.contactos[index].text
        });
        this.contactos.splice(index, 1);
        if (this.verSeleccion.length > 0) {
            $("#bntmodal1").removeAttr("disabled");
        }
    }

    eliminar(event) {
        let index: number = this.contactos.findIndex(value => parseInt(event.id, 0) === value.id);
        this.verSeleccion.splice(index, 1);
        console.log(this.verSeleccion);
        this.contactos.push(event);
    }

    abrirModal2() {
        this.modal2 = true;
        this.modal1 = false;
    }
    abrirModal1() {
        this.modal2 = false;
        this.modal1 = true;
    }
    cancelarModal(event) {
        this.modal2 = false;
        this.modal1 = false;
        this.contactos = this.listaContactos;
        // for (let i = 0; i < this.verSeleccion.length; i++) {
        //     const element = this.verSeleccion[i];
        //     this.contactos.push(element, 1);
        // }
        this.verSeleccion = [];
    }

    enviarPdfc() {
        this.modal3 = true;
        this.modal2 = false;
    }

    btnVolver() {
        this.modal3 = false;

        this.router.navigate([RUTAS_COMERCIAL_COTIZACIONES.cotizaciones]);
    }

    btnAtrasPdf() {
        // this.router.navigate([RUTAS_COMERCIAL_COTIZACIONES.cotizador.init], { queryParams: { tab: 'gastos' } });

    }
    enviar() {
        this.accionGuardar.emit();
    }
    atras(){
        this.accionAtras.emit();
    }

}
