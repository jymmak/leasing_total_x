import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import swal from 'sweetalert2';
import { TabBienesNuevoService } from './nuevo.service';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
    selector: 'tab-bienes-nuevo-component',
    templateUrl: 'nuevo.template.html',
    providers: [
        TabBienesNuevoService
    ]
})
export class TabBienesNuevoComponent implements OnInit {
    @Output() AccionCancelar = new EventEmitter();
    @Output() AccionGuardar = new EventEmitter();
    public seccion: any;

    public links: Array<any>;
    public yyyy: Array<any>;
    public marcas: Array<any>;
    public clases: Array<any>;
    public uso: Array<any>;
    public sector: Array<any>;
    public lugar: Array<any>;
    public proveedor: Array<any>;
    public surcursar: Array<any>;

    public niveles: Array<any>;
    public subNiveles: Array<any>;
    public tipos: Array<any>;

    public estadoCondicion: boolean = false;
    public nuevaCondicion: boolean = false;
    public condicionNuevo: boolean;
    public seguroIncluido: boolean;
    public gpsIncluido: boolean;
    public nivelRiesgo: boolean;
    public formNuevoBien: FormGroup;

    public numfilas: number;
    public loadingMarca: boolean;
    public paginaMarca: number;
    constructor(private _tabBienesNuevoService: TabBienesNuevoService) {
        this.links = [
            { titulo: 'Agregar Bien', link: "/Operaciones/cotizacion/Agregar" }
        ];
        this.seccion = "datos_generales";
        this.condicionNuevo = true;
        this.seguroIncluido = true;
        this.gpsIncluido = true;
        this.nivelRiesgo = true;
        this.niveles = [];
        this.subNiveles = [];
        this.tipos = [];
        this.clases = [];
        this.marcas = [];
        this.numfilas = 10;
        this.paginaMarca = 1;
    }
    initForm() {
        this.formNuevoBien = new FormGroup({
            nivelId: new FormControl(''),
            subNivelId: new FormControl(''),
            tipoId: new FormControl(''),
            cantidad: new FormControl('')
        });
    }
    mostarMarcaModelo() {
        if (this.formNuevoBien.controls.nivelId.value == 3 || this.formNuevoBien.controls.nivelId.value == 4) {
            return false;
        }
        return true;
    }
    listarNiveles() {
        this._tabBienesNuevoService.listarNiveles().subscribe(
            response => {
                this.niveles = response['bien_nivel'];
            },
            error => {

            }
        );
    }
    seleccionarNivel(event) {
        this.formNuevoBien.controls.nivelId.setValue(event.id);
        this.formNuevoBien.controls.subNivelId.setValue("");
        if (this.mostarMarcaModelo()) {
            this.listarBienMarcas();
        } else {
            this.marcas = [];
            this.paginaMarca = 1;
        }
        this.tipos = [];
        this.listarSubNiveles(event.id);
    }
    listarSubNiveles(nivelId) {
        nivelId = parseInt(nivelId, 0)
        this._tabBienesNuevoService.listarSubNiveles(nivelId).subscribe(
            response => {
                this.subNiveles = response['bien_sub_nivel'];
            },
            error => {

            },
        );
    }
    seleccionarSubNivel(event) {
        this.formNuevoBien.controls.subNivelId.setValue(event.id);
        this.listarBienTipos(event.id)
    }
    listarBienTipos(subNiveleId) {
        let nivelId = parseInt(this.formNuevoBien.controls.nivelId.value, 0)
        subNiveleId = parseInt(subNiveleId, 0);
        this._tabBienesNuevoService.listarBienTipos(nivelId, subNiveleId).subscribe(
            response => {
                this.tipos = response['bien_tipo'];
            },
            error => {
            }
        );
    }
    seleccionarTipo(event) {
        this.formNuevoBien.controls.tipoId.setValue(event.id);
        this.listarBienClases(event.id);
    }
    listarBienClases(tipoId) {
        tipoId = parseInt(tipoId, 0);
        this._tabBienesNuevoService.listarBienClases(tipoId).subscribe(
            response => {
                this.clases = response['bien_clase'];
            },
            error => {
            }
        );
    }
    listarBienMarcas(searchText: any = "",scrolling:boolean = false) {
        this.loadingMarca = true;
        if(!scrolling){
            this.marcas = [];
            this.paginaMarca = 1;
        }else{
            
            this.paginaMarca++;
        }
        let data = {
            "marca": searchText.toUpperCase(),
            "pagina": this.paginaMarca,
            "numfilas": this.numfilas
        }
        this._tabBienesNuevoService.listarBienMarcas(data).subscribe(
            response => {
                response['marca'].forEach((value, index) => {
                    this.marcas.push({
                        id: value.id,
                        text: value.descripcion
                    });
                });
            },
            error => {

            },
            () => {
                this.loadingMarca = false;
            }
        )
    }
    ngOnInit() {
        this.initForm();
        this.listarNiveles();
        this.uso = [
            { id: "", text: "" },
            { id: 0, text: "Particular" },
            { id: 1, text: "Comercial" },
            { id: 2, text: "Alquiler" },
            { id: 2, text: "Contratistas" },
            { id: 2, text: "Minas" }
        ];
        this.sector = [
            { id: "", text: "" },
            { id: 1, text: "Transprte de carga por carretera" },
            { id: 2, text: "Transprte de carga por carretera" },
            { id: 3, text: "Mineria" },
            { id: 4, text: "Construción" }
        ];
        this.lugar = [
            { id: 1, text: "" },
            { id: 2, text: "lugar " },
            { id: 3, text: " lugar" },
            { id: 4, text: " lugar" },
            { id: 5, text: " lugar" }
        ];
        this.proveedor = [
            { id: 1, text: "" },
            { id: 2, text: "proveedor " },
            { id: 3, text: " proveedor" },
            { id: 4, text: " proveedor" },
            { id: 5, text: " proveedor" }
        ];
        this.surcursar = [
            { id: 1, text: " " },
            { id: 2, text: "surcursar " },
            { id: 3, text: "surcursar" },
            { id: 4, text: "surcursar" },
            { id: 5, text: "surcursar" }
        ];
        // this.clases = [
        //     { id: 1, text: "" },
        //     { id: 1, text: "tipoOperacion clase" },
        //     { id: 1, text: "tipoOperacion clase" },
        //     { id: 1, text: "tipoOperacion clase" },
        //     { id: 1, text: "tipoOperacion  clase" },
        // ];
        // this.marca = [
        //     { id: 1, text: "" },
        //     { id: 1, text: "tipoOperacion Marca" },
        //     { id: 1, text: "tipoOperacion Marca" },
        //     { id: 1, text: "tipoOperacion Marca" },
        //     { id: 1, text: "tipoOperacion  Marca" },
        //     { id: 1, text: "Marca" },
        //     { id: 1, text: "tipoOperacion Marca" },
        // ];
        this.yyyy = [
            { id: 1, value: '', text: "" },
            { id: 1, value: '2017', text: "2018" },
            { id: 1, value: '2017', text: "2017" },
            { id: 1, value: '2016', text: "2016" },
            { id: 1, value: '2015', text: "2015" },
            { id: 1, value: '2014', text: "<div></div> 2014" },
        ];
    }
    cancelar() {
        this.seccion = "datos_generales";
        this.AccionCancelar.emit();
    }
    siguiente() {
        this.seccion = "datos_uso";
    }
    atras() {
        this.seccion = "datos_generales";
    }
    guardar() {
        swal({
            title: '¿Está seguro de agregar el bien?',
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
                this.seccion = "datos_generales";
                this.AccionGuardar.emit({ data: '' });
            }
        });
    }
}

