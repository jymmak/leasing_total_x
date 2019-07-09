import { Component, AfterViewInit, Output, EventEmitter, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { ConsultaRucService } from 'src/app/views/comercial/cotizacion/cotizador/consulta-ruc/consulta-ruc.service';
import { ToastPlugin } from 'src/app/plugins/toast.plugin';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
declare var $: any;


@Component({
    selector: 'formulario-cliente',
    templateUrl: 'formulario-cliente2.template.html',
    providers: [
        ToastPlugin,
        ConsultaRucService
    ]
})
export class FormularioCliente2Component implements AfterViewInit, OnInit {
    public links: Array<any>;
    public provincia: Array<any>;
    public size: Array<any>;
    public distrito: Array<any>;
    public formformularioCliente2: any;
    public editarListaCliente: any;

    constructor(private location: Location, private _formBuilder: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute, private _consultaRucService: ConsultaRucService) {
        this.links = [
            { titulo: 'Nuevo Cliente', link: "/comercial/organizaciones/clientes" },
        ];
    }

    ngAfterViewInit(): void {
    }

    ngOnInit(): void {
        $('#datepicker').datepicker({
            language: 'es',
            format: "dd/mm/yyyy",
            inline: false,
            autoClose: true,
            minDate: new Date()
        });
        $('#datepicker2').datepicker({
            language: 'es',
            format: "dd/mm/yyyy",
            inline: false,
            autoClose: true,
            minDate: new Date()
        });
        $('#datepicker3').datepicker({
            language: 'es',
            format: "dd/mm/yyyy",
            inline: false,
            autoClose: true,
            minDate: new Date()
        });


        let param = this.router.parseUrl(this.router.url);
        console.log(param.queryParams);
        this.editarListaCliente = param.queryParams;
        console.log(this.editarListaCliente);

        this.formformularioCliente2 = new FormGroup({
            nombreComercial: new FormControl(""),
            size: new FormControl("", [Validators.required]),
            canalProspecto: new FormControl("", [Validators.required]),

            tipoPersona: new FormControl("", [Validators.required]),
            facturacionAnual: new FormControl("", [Validators.required]),
            referenciaCanal: new FormControl("", [Validators.required]),

            constitucion: new FormControl("", [Validators.required]),
            telefono: new FormControl("", [Validators.required]),
            pagWeb: new FormControl("", [Validators.required]),

            segmento: new FormControl("", [Validators.required]),
            provincia: new FormControl("", [Validators.required]),
            numEmpleados: new FormControl("", [Validators.required]),
            email: new FormControl("", [Validators.required]),
            dirPrincipal: new FormControl("", [Validators.required]),
        });

        this.size = [
            { id: 1, value: 'ge', text: "" },
            { id: 2, value: 'ge', text: "uso " },
            { id: 3, value: 'ge', text: "uso" },
            { id: 4, value: 'ge', text: "uso" },
            { id: 5, value: 'ge', text: "uso" }
        ];

        this.provincia = [
            { id: 1, value: 'ge', text: "" },
            { id: 2, value: 'ge', text: "huaraz " },
            { id: 3, value: 'ge', text: "piura" },
            { id: 4, value: 'ge', text: "tacna" },
            { id: 5, value: 'ge', text: "amazonas" },
            { id: 1, value: 'ge', text: "ancahs" },
            { id: 2, value: 'ge', text: "apurimac " },
            { id: 3, value: 'ge', text: "arequipa" },
            { id: 4, value: 'ge', text: "ayacucho" },
            { id: 5, value: 'ge', text: "cusco" }
        ];
        this.distrito = [
            { id: 1, value: 'ge', text: "" },
            { id: 2, value: 'ge', text: "huaraz " },
            { id: 3, value: 'ge', text: "piura" },
            { id: 4, value: 'ge', text: "tacna" },
            { id: 5, value: 'ge', text: "amazonas" },
            { id: 1, value: 'ge', text: "ancahs" },
            { id: 2, value: 'ge', text: "apurimac " },
            { id: 3, value: 'ge', text: "arequipa" },
            { id: 4, value: 'ge', text: "ayacucho" },
            { id: 5, value: 'ge', text: "cusco" }
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

    form3() {
        this.router.navigate(['/comercial/organizaciones/clientes/formulario-cliente/formulario-cliente3']);

    }

    backClientes(){
        this.router.navigate(['/comercial/organizaciones/clientes']);
    }
    personaNatural() {
        $("#personaNatural").removeClass("borderDerecho").addClass("borderDerecho-after");
        $("#personaJuridica").removeClass("borderIzquierdo-after").addClass("borderIzquierdo");
    }
    personaJuridica() {
        $("#personaJuridica").removeClass("borderIzquierdo").addClass("borderIzquierdo-after");
        $("#personaNatural").removeClass("borderDerecho-after").addClass("borderDerecho");
    }
 

    natural() {
        $("#natural").removeClass("borderDerecho").addClass("borderDerecho-after");
        $("#extranjera").removeClass("borderIzquierdo-after").addClass("borderIzquierdo");
    }
    extranjera() {
        $("#extranjera").removeClass("borderIzquierdo").addClass("borderIzquierdo-after");
        $("#natural").removeClass("borderDerecho-after").addClass("borderDerecho");
    }
    minorista() {
        $("#minorista").removeClass("borderDerecho").addClass("borderDerecho-after");
        $("#noMinorista").removeClass("borderIzquierdo-after").addClass("borderIzquierdo");
    }
    noMinorista() {
        $("#noMinorista").removeClass("borderIzquierdo").addClass("borderIzquierdo-after");
        $("#minorista").removeClass("borderDerecho-after").addClass("borderDerecho");
    }
}
