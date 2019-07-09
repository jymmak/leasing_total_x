import { Component, Input, AfterViewInit, ElementRef, ViewChild, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastPlugin } from 'src/app/plugins/toast.plugin';
import { RUTAS_COMERCIAL_AGENDA } from 'src/config/rutas-modulos/rutas-comercial';
import { Location } from '@angular/common';
import swal from 'sweetalert2';
declare var $: any;
declare var jQuery: any;

@Component({
    selector: 'agregar-actividad',
    templateUrl: 'agregar-actividad.template.html',
    providers: [
        ToastPlugin
    ]
})
export class AgregarActividadComponent implements AfterViewInit, OnInit {

    public links: Array<any>;
    public listaPuntos: Array<any>;
    public listaCategoria: Array<any>;
    public listaAsignacion: Array<any>;
    public listaPrioridad: Array<any>;
    public listaEmpresa: Array<any>;
    public listaTransporte: Array<any>;
    public tipo: Array<any>;
    public nuevo: boolean = true;
    public editar: boolean = false;
    public editarListaActividad: any;
    public markers: any[];
    public marker: any[];
    agendaForm: FormGroup;


    lat: number = -12.0999595;
    lng: number = -76.9703576;
    zoom: number = 15;


    constructor(private el: ElementRef, private _location: Location, private _formBuilder: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute) {

        this.links = [
            { titulo: 'Agregar Actividad' },

        ];
        this.activatedRoute.params.subscribe(params => {
            if (params.event_id) {
                this.links[0].titulo = "Editar Actividad";
                this.editar = true;
                this.nuevo = false;
            }

        });
    }

    ngAfterViewInit() {
        $('#clockpicker, #clockpicker2').clockpicker({
            placement: 'bottom',
            align: 'left',
            autoclose: true,
            'default': 'now'
        });
        $('#datepicker,#datepicker2').datepicker({
            language: 'es',
            format: "dd/mm/yyyy",
            inline: false,
            autoClose: true,
            minDate: 0,
        });
        let elem = document.getElementsByClassName('multi-select Activo')
    }

    ngOnInit(): void {
        this.agendaForm = new FormGroup({
            fechaInicio: new FormControl("", [Validators.required]),
            fechaFin: new FormControl("", [Validators.required]),
            horaIni: new FormControl("", [Validators.required]),
            horaFin: new FormControl("", [Validators.required]),
            clienteProveedor: new FormControl("", [Validators.required]),
            contacto: new FormControl("", [Validators.required]),
            origen: new FormControl("", [Validators.required]),
            destino: new FormControl("", [Validators.required]),
            costo: new FormControl("", [Validators.required]),
        });


        this.listaCategoria = [
            { id: 1, value: 'ge', text: " " },
            { id: 2, value: 'ge', text: " Llamada " },
            { id: 3, value: 'ge', text: " Reunión/Visita" },
            { id: 4, value: 'ge', text: " Actividad" },
            { id: 5, value: 'ge', text: " Correo" }
        ];
        this.listaAsignacion = [
            { id: 1, value: 'ge', text: " " },
            { id: 2, value: 'ge', text: " person 1" },
            { id: 3, value: 'ge', text: " person 2" },
            { id: 4, value: 'ge', text: " person 3" },
            { id: 5, value: 'ge', text: " person 4" }
        ];
        this.listaPrioridad = [
            { id: 1, value: 'ge', text: " " },
            { id: 2, value: 'ge', text: " Alta" },
            { id: 3, value: 'ge', text: " Media" },
            { id: 4, value: 'ge', text: " Baja" },

        ];
        this.listaEmpresa = [
            { id: 1, value: 'ge', text: " " },
            { id: 2, value: 'ge', text: " tipo 1" },
            { id: 3, value: 'ge', text: " tipo 2" },
            { id: 4, value: 'ge', text: " tipo 3" },
            { id: 5, value: 'ge', text: " tipo 4" }
        ];
        this.listaTransporte = [
            { id: 1, value: 'ge', text: " " },
            { id: 2, value: 'ge', text: " transporte 1" },
            { id: 3, value: 'ge', text: " transporte 2" },
            { id: 4, value: 'ge', text: " transporte 3" },
        ];

        this.tipo = [
            { id: 1, value: 'ge', text: "$" },
            { id: 2, value: 'ge', text: "$ " },
            { id: 3, value: 'ge', text: "$" },
            { id: 4, value: 'ge', text: "$" },

        ];
        this.listaPuntos = [

            {
                punto2: 'Repetir',
                selected: true

            },
        ]
        let param = this.router.parseUrl(this.router.url);
        this.editarListaActividad = param.queryParams;



    }
    editarActividad() {
        this.router.navigate([RUTAS_COMERCIAL_AGENDA.agenda.agregarActividad]);
    }
    registro() {
        this.router.navigate([RUTAS_COMERCIAL_AGENDA.agenda.registro]);
    }

    verDireccion() {
        $("#exampleModalCenter").modal("show");
    }

    cancelarActividad(){

        this.router.navigate([RUTAS_COMERCIAL_AGENDA.agenda.init]);
    }
    guardar() {
        swal({
            title: '¿Está seguro de agregar la actividad?',
            text: "",
            showCancelButton: true,
            reverseButtons: true,
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar',
            allowOutsideClick: false,
            allowEscapeKey: false,
            focusConfirm: false,
            focusCancel: false
        }).then((result) => {
            if (result.value) {

            }
        });
    }


}

