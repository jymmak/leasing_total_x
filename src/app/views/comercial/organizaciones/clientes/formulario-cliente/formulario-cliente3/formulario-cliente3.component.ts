import { Component, AfterViewInit, Output, EventEmitter, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { ToastPlugin } from 'src/app/plugins/toast.plugin';
import { ConsultaRucService } from 'src/app/views/comercial/cotizacion/cotizador/consulta-ruc/consulta-ruc.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

declare var $: any;

// Exportaciones de Select Persona de Material

// export interface Persona {
//     value: string;
//     viewValue: string;
// }

// // Exportaciones de Select Canal de Material

// export interface Canal {
//     value: string;
//     viewValue: string;
// }

// // Exportaciones de Select Tipo de Material

// export interface Tipo {
//     value: string;
//     viewValue: string;
// }
// // Exportaciones de Select  Segmento de Material

// export interface Segmento {
//     value: string;
//     viewValue: string;
// }




@Component({
    selector: 'formulario-cliente3',
    templateUrl: 'formulario-cliente3.template.html',
    providers: [
        ToastPlugin,
        ConsultaRucService
    ]
})
export class FormularioCliente3Component implements AfterViewInit, OnInit {
    public links: Array<any>;
    public formformularioCliente3: any;
    public regimen: Array<any>;
    public listasIncluids: Array<any>;
    constructor(private _formBuilder: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute, private _consultaRucService: ConsultaRucService) {
        this.links = [
            { titulo: 'Nuevo Cliente', link: "/comercial/organizaciones/clientes" },
        ];
    }

    ngAfterViewInit(): void {
    }

    ngOnInit(): void {
        this.formformularioCliente3 = new FormGroup({
            codigosbs: new FormControl("", [Validators.required]),
            Partida: new FormControl("", [Validators.required]),

            accionespep: new FormControl("", [Validators.required]),

            accionistas: new FormControl("", [Validators.required]),

            sujetoObliogado: new FormControl("", [Validators.required]),

        });


        this.regimen = [
            { id: 1, value: 'ge', text: "" },
            { id: 2, value: 'ge', text: "uso " },
            { id: 3, value: 'ge', text: "uso" },
            { id: 4, value: 'ge', text: "uso" },
            { id: 5, value: 'ge', text: "uso" }
        ];
        this.listasIncluids = [
            { id: 1, value: 'ge', text: "" },
            { id: 2, value: 'ge', text: "uso " },
            { id: 3, value: 'ge', text: "uso" },
            { id: 4, value: 'ge', text: "uso" },
            { id: 5, value: 'ge', text: "uso" }
        ];
    }

    agregarClaseButon() {
        // let digitos = document.querySelectorAll('.btn-rounded').value.length;
        let digitos2 = (<HTMLInputElement>document.querySelector('.btn-rounded')).value.length;
        if (digitos2 === 11) {
            $("#btnConsultaRuc").addClass(" buttonBuscarRucActive");
        } else {
            $("#btnConsultaRuc").removeClass("buttonBuscarRucActive");
        }
    }

    guardarCliente() {

    }

    cancelarConnsultaRuc() {
        this.router.navigate(['/comercial/organizaciones/clientes/formulario-cliente/formulario-cliente2']);
    }

    confirmarGuardarCliente() {
        this.router.navigate(['/comercial/organizaciones/clientes']);

    }
    pepSi() {
        $("#pepSi").removeClass("borderDerecho").addClass("borderDerecho-after");
        $("#pepNo").removeClass("borderIzquierdo-after").addClass("borderIzquierdo");
    }
    pepNo() {
        $("#pepNo").removeClass("borderIzquierdo").addClass("borderIzquierdo-after");
        $("#pepSi").removeClass("borderDerecho-after").addClass("borderDerecho");
    }
    beneficioIdentificado() {
        $("#beneficioIdentificado").removeClass("borderDerecho").addClass("borderDerecho-after");
        $("#beneficioNoIdentificado").removeClass("borderIzquierdo-after").addClass("borderIzquierdo");
    }
    beneficioNoIdentificado() {
        $("#beneficioNoIdentificado").removeClass("borderIzquierdo").addClass("borderIzquierdo-after");
        $("#beneficioIdentificado").removeClass("borderDerecho-after").addClass("borderDerecho");
    }
    sujetoObligado() {
        $("#sujetoObligado").removeClass("borderDerecho").addClass("borderDerecho-after");
        $("#sujetoNoObligado").removeClass("borderIzquierdo-after").addClass("borderIzquierdo");
    }
    sujetoNoObligado() {
        $("#sujetoNoObligado").removeClass("borderIzquierdo").addClass("borderIzquierdo-after");
        $("#sujetoObligado").removeClass("borderDerecho-after").addClass("borderDerecho");
    }
}
