import { Component, Input, AfterViewInit, ElementRef, ViewChild, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastPlugin } from 'src/app/plugins/toast.plugin';
import { RUTAS_COMERCIAL_AGENDA } from 'src/config/rutas-modulos/rutas-comercial';
import { Location } from '@angular/common';
import swal from 'sweetalert2';

declare var $: any;

@Component({
    selector: 'registro',
    templateUrl: 'registro.template.html',
    providers: [
        ToastPlugin
    ]
})
export class RegistroComponent implements AfterViewInit, OnInit {


    @Output() AccionCancelar = new EventEmitter();
    @Output() AccionGuardar = new EventEmitter();
    public links: Array<any>;
    public listaRegistro: Array<any>;
    public listaFotos: Array<any>;
    public selectItem: any;
    public show: boolean;
    public nombreCliente: any;
    public resultado: Array<any>;
    public static: boolean;
    public resultado_busqueda: boolean;
    public slides: any;
    public slideConfig: any;
    public images: any;


    constructor(private _location: Location, private _formBuilder: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute) {

        this.links = [
            { titulo: 'Registro de Resultado de Gestión' },

        ];
        this.selectItem = {};
        this.show = false;
        this.resultado_busqueda = false;
        this.static = true;

    }


    ngAfterViewInit() {
        //plugin cropper
        let URL = window.URL;
        let $image = $('#blah');
        let $inputImage = $('#inputImage');

        let options = {
           dragMode: 'move',
            cropBoxResizable: false,
            ready: function () {
                this.cropper.setCropBoxData({
                    top: 0,
                    left: 0,
                    width: 100,
                    height: 100
                });
            }
        };

        $inputImage.change(function () {
            let files = this.files;
            let file;

            if (files && files.length) {
                file = files[0];

                if (/^image\/\w+$/.test(file.type)) {
                    let uploadedImageURL = URL.createObjectURL(file);
                    $image.show();
                    $image
                        .cropper('destroy')
                        .attr('src', uploadedImageURL)
                        .cropper(options);
                } else {
                    window.alert('Please choose an image file.');
                }
            }
        });

        





        //plugin ngb-carousel 
        this.images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
    }
    ngOnInit(): void {

        this.nombreCliente = "Visita a Transportes M";

        this.listaRegistro = [
            {
                title: "Camiones Vicente",
                resultado: "Óptimo",
                textInforme: "La visita a Transportes Mauricio fue una gestión óptima debido a que se lograron concretar los requerimientos del cliente."
            }
        ]
        this.listaFotos = [
            {
                id: 1,
                nombre: "Fachada Transportes M",
                fhFoto: "25/10/2018 10:30 - 11:00 am",
                fhSubida: "25/10/2018 12:30 - 1:00 pm",
                imageUrl: "/assets/img/fotoagenda1.jpg",
                nombreFoto: "Foto 01 - Fachada",
                lugar: " Fachada",
                fhIni: "25/10/18 10:30 am",
                fhSub: "25/10/18 1:00 pm",
                subidaPor: "Pedro Soto"
            },
            {
                id: 2,
                nombre: "Oficina Transportes M",
                fhFoto: "25/10/2018 10:30 - 11:00 am",
                fhSubida: "25/10/2018 12:30 - 1:00 pm",
                imageUrl: "/assets/img/fotoagenda2.jpg",
                nombreFoto: "Foto 02 - Oficina",
                lugar: " Oficina",
                fhIni: "25/10/18 10:30 am",
                fhSub: "25/10/18 1:00 pm",
                subidaPor: "Pedro Soto"

            },
        ]

        this.resultado = [
            { id: 1, value: 'li', text: "Óptimo" },
            { id: 2, value: 'are', text: "Alta" },
            { id: 2, value: 'tru', text: "Media" },
            { id: 2, value: 'chi', text: "Baja" },

        ];


    }
    select(item) {
        console.log(item)
        $("#exampleModalCenter").modal("show");
    }


    editar() {
        this.resultado_busqueda = true;
        this.static = false;
    }

    agregarFoto() {
        $("#exampleModalFoto").modal("show");

    }
    cancelar() {

        this.resultado_busqueda = false;
        this.static = true;
    }
    back(calEvent) {
        this.router.navigate([RUTAS_COMERCIAL_AGENDA.agenda.init + '/' + this.selectItem.id + '/' + RUTAS_COMERCIAL_AGENDA.agenda.editar]);
    }
    guardarEditar() {
        this.resultado_busqueda = false;
        this.static = true;

    }
    guardar() {
        swal({
            title: '¿Está seguro de guardar?',
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

                this.AccionGuardar.emit();
                $("#exampleModalFoto").modal("hide");
            }
        });
    }
}

