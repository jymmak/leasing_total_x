import { Component, AfterViewInit, Output, EventEmitter, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NuevoService } from './nuevo.service';
import { RUTAS_COMERCIAL_ORGANIZACIONES } from 'src/config/rutas-modulos/rutas-comercial';
import { RucValidation } from 'src/app/validators/ruc-validation.validator';
import { UrlValidation } from 'src/app/validators/url-validation.validator';

declare var $: any;

@Component({
    selector: 'formulario-cliente1',
    templateUrl: 'formulario-cliente1.template.html',
    providers: [
        NuevoService
    ]
})
export class FormularioCliente1Component implements AfterViewInit, OnInit {
    @Output() AccionCancelar = new EventEmitter();
    @Output() AccionGuardar = new EventEmitter();
    public loadingConsultaRuc: boolean;
    public btneditar: boolean;

    public clienteId: number;
    public links: Array<any>;
    public formNuevoCliente: any;
    public seccion: any;
    public tamanios: Array<any>;
    public provincias: Array<any>;
    public regimenes: Array<any>;
    public incluidoListas: Array<any>;
    public canales: Array<any>;
    public proveedores: Array<any>;
    public ejecutivos: Array<any>;
    public campanias: Array<any>;

    public size: Array<any>;
    public distritos: Array<any>;
    public condicionPersona: boolean;
    // public nombreComercial: number;
    public tipoPersona: boolean;
    public cliente_nuevo: boolean;
    public nuevo_cliente: boolean;
    public nuevo: boolean;

    public numfilas: number;
    public loadingEmpresaTamanio: boolean;
    public dataSelectedEmpresaTamanio: any;

    public loadingReferenciaCanal: boolean;
    public paginaReferenciaCanal: number;
    public dataSelectedCanal: any;

    public paginaEjecutivos: number;
    public loadingEjecutivos: boolean;
    public dataSelectedEjecutivos: any;

    public paginaProveedores: number;
    public loadingProveedores: boolean;
    public dataSelectedProveedores: any;

    public dataSelectedCompania: any;

    public dataSelectedProvincia: any;
    public dataSelectedDistrito: any;
    public dataSelectedRegimen: any;
    public dataSelectedIncluidoLista: any;
    constructor(private _formBuilder: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute, private _nuevoService: NuevoService) {

        this.loadingConsultaRuc = false;
        this.btneditar = false;
        this.links = [
            { titulo: 'Nuevo Cliente', link: "" },
        ];
        this.tamanios = [];
        this.provincias = [];
        this.distritos = [];
        this.canales = [];
        this.proveedores = [];
        this.ejecutivos = [];
        this.campanias = [];
        this.incluidoListas = [];
        this.dataSelectedIncluidoLista = [];
        this.seccion = "datos_generales";
        this.tipoPersona = true;
        this.cliente_nuevo = true;
        this.nuevo = true;
        this.loadingReferenciaCanal = false;
        this.dataSelectedCanal = { id: "", value: "" };
        this.loadingEmpresaTamanio = false;
        this.dataSelectedEmpresaTamanio = { id: "", value: "" };
        this.dataSelectedEjecutivos = { id: "", value: "" };
        this.dataSelectedCompania = { id: "", value: "" };
        this.dataSelectedProveedores = { id: "", value: "" };
        this.dataSelectedProvincia = { id: "", value: "" };
        this.dataSelectedDistrito = { id: "", value: "" };
        this.dataSelectedRegimen = { id: "", value: "" };
        this.loadingEjecutivos = false;
        this.loadingProveedores = false;
        this.numfilas = 10;
        this.paginaReferenciaCanal = 1;
        this.paginaEjecutivos = 1;
        this.paginaProveedores = 1;
        this.regimenes = [];
        this.initForm({});
        this.activatedRoute.params.subscribe(params => {
            console.log(params)
            if (params.id) {
                this.clienteId = params.id;
                this.links[0].titulo = "Editar Cliente";
                this.nuevo = false;
                this.initFormEdit(params.id);
            } else {
                this.clienteId = 0;
            }

        });
    }
    ngAfterViewInit(): void {
    }
    initForm(data: any = {}) {
        this.formNuevoCliente = new FormGroup({
            ruc: new FormControl(
                data.ruc ? data.ruc : "",
                [
                    Validators.required,
                    RucValidation.isValid
                    // Validators.minLength(11),
                    // Validators.maxLength(11)
                ]
            ),
            razonSocial: new FormControl(data.razon_social ? data.razon_social : "", [Validators.required]),
            condicion: new FormControl(data.condicion_sunat ? data.condicion_sunat : ""),
            ciu: new FormControl(data.ciiu ? data.ciiu : ""),
            // tipoCliente: new FormControl(""),
            domicilioFiscal: new FormControl(data.direccion_fiscal ? data.direccion_fiscal : ""),
            fechaInicioActividades: new FormControl(data.finicioactividad ? data.finicioactividad : ""),
            representantelegal: new FormControl(data.representante ? data.representante : ""),
            estado: new FormControl(data.estado_sunat ? data.estado_sunat : ""),
            actividadEconomica: new FormControl(data.actividad_economica ? data.actividad_economica : ""),

            nombreComercial: new FormControl(data.nom_comercial ? data.nom_comercial : "", [Validators.required]),
            tamanio: new FormControl(data.tamanio ? data.tamanio : ""),
            canalProspectoId: new FormControl(data.idcanal ? data.idcanal : "", [Validators.required]),
            ejecutivoId: new FormControl(data.idejecutivo ? data.idejecutivo : "", [Validators.required]),
            proveedorId: new FormControl(data.idproveedor ? data.idproveedor : "", [Validators.required]),
            campaniaId: new FormControl(data.idcampania ? data.idcampania : "", [Validators.required]),

            tipoPersona: new FormControl(data.idtipo_persona ? data.idtipo_persona : 1, [Validators.required]), // nacional = 1 , extrangero = 2
            facturacionAnual: new FormControl(data.facturacion_anual ? data.facturacion_anual : ""),
            // referenciaCanal: new FormControl(""),

            constitucion: new FormControl(data.idconstitucion ? data.idconstitucion : "", [Validators.required]), // natrural = 1 , jurídica = 2 

            provinciaId: new FormControl(data.idprovincia ? data.idprovincia : "", [Validators.required]),
            distritoId: new FormControl(data.iddistrito ? data.iddistrito : ""),

            pagWeb: new FormControl(data.pagina_web ? data.pagina_web : "", [UrlValidation.isValid]),

            segmento: new FormControl(data.idsegmento ? data.idsegmento : "", [Validators.required]),// minorista = 1 , no minorista  = 2
            telefono: new FormControl(data.telf1 ? data.telf1 : ""),

            numEmpleados: new FormControl(data.nempleados ? data.nempleados : ""),
            dirPrincipal: new FormControl(data.direccion_principal ? data.direccion_principal : ""),
            email: new FormControl(data.email ? data.email : "", Validators.email),

            codigoSbs: new FormControl(data.codigo_sbs ? data.codigo_sbs : ""),
            nroPartida: new FormControl(data.num_partida ? data.num_partida : ""),
            regimenId: new FormControl(data.idregimen ? data.idregimen : ""),

            accionistasPep: new FormControl(data.accionista_pep != null ? data.accionista_pep : ""),
            accionistaBenificioFinal: new FormControl(data.accionista_beff != null ? data.accionista_beff : ""),
            incluidoListaId: new FormControl(data.incluidolista ? data.incluidolista : []),
            sujetoObligado: new FormControl(data.sujeto_obligado != null ? data.sujeto_obligado : ""),
        });
        if (data.idcanal) {
            this.dataSelectedCanal.id = data.idcanal;
            this.dataSelectedCanal.text = data.canal;
            if (data.idcanal == 1) {
                this.listarEjecutivos();
            } else if (data.idcanal == 2) {
                this.listarProveedores();
            } else if (data.idcanal == 3) {
                this.listarCampanias();
            }
        }
        if (data.idproveedor) {
            console.log("es roveedor", data.idproveedor);
            this.dataSelectedProveedores.id = data.idproveedor;
            this.dataSelectedProveedores.text = data.proveedor;
        }
        if (data.idprovincia) {
            this.dataSelectedProvincia.id = data.idprovincia;
            this.dataSelectedProvincia.text = data.provincia;
            this.listarDistritos();
        }
        if (data.iddistrito) {
            this.dataSelectedDistrito.id = data.iddistrito;
            this.dataSelectedDistrito.text = data.distrito;
        }
        if (data.idregimen) {
            this.dataSelectedRegimen.id = data.idregimen;
            // this.dataSelectedRegimen.text = data.distrito;
        }
        if (data.incluidolista) {
            data.incluidolista.forEach((value, index) => {
                this.dataSelectedIncluidoLista.push({
                    id: value,
                    text: ""
                });

            });
        }
    }
    initFormEdit(clienteId) {
        this._nuevoService.ver(clienteId).subscribe(
            response => {
                this.cliente_nuevo = false;
                this.initForm(response['contacto'][0]);
            },
            error => {
                console.log(error);
            }, () => {
                if (!this.nuevo) {
                    this.init();
                }

            }
        );
    }
    init() {
        this.listarEmpresaTamanio();
        this.listarProvincias();
        this.listarEmpresaRegimenes();
        this.listarEmpresaIncluidoLista();
        this.listarCanal();

    }
    ngOnInit(): void {
        if (this.nuevo) {
            this.init();
        }
    }
    consultaRuc() {
        this.loadingConsultaRuc = true;
        this.btneditar = false;

        this._nuevoService.consultaRuc(this.formNuevoCliente.controls.ruc.value).subscribe(
            response => {
                this.cliente_nuevo = response['nuevo'];
                if (this.cliente_nuevo == false) {
                    this.btneditar = true;
                }
                this.clienteId = response['idcliente'];
                this.formNuevoCliente.controls.razonSocial.setValue(response['data'].razon_social);
                this.formNuevoCliente.controls.condicion.setValue(response['data'].contribuyente_condicion);
                this.formNuevoCliente.controls.ciu.setValue(response['data'].ciiu);
                // this.formNuevoCliente.controls.tipoCliente.setValue(response['data'].contribuyente_tipo);
                this.formNuevoCliente.controls.domicilioFiscal.setValue(response['data'].domicilio_fiscal);
                this.formNuevoCliente.controls.fechaInicioActividades.setValue(response['data'].fecha_actividad);
                this.formNuevoCliente.controls.estado.setValue(response['data'].contribuyente_estado);
                let key_representante_legal = Object.keys(response['data'].representante_legal)[0];
                this.formNuevoCliente.controls.actividadEconomica.setValue(response['data'].actividad_exterior);
                if (key_representante_legal != undefined) {
                    this.formNuevoCliente.controls.representantelegal.setValue(response['data'].representante_legal[key_representante_legal].nombre);
                }
                this.loadingConsultaRuc = false;
            },
            error => {
                this.loadingConsultaRuc = false;

            }
        );
    }
    validarBtnGuardar() {
        return true;
    }

    cancelarConnsultaRuc() {
        this.router.navigate(['/comercial/organizaciones/clientes']);
    }
    cancelar() {
        this.seccion = "datos_generales";
        this.AccionCancelar.emit();
    }
    siguiente() {
        if (this.seccion == "datos_riesgo") {
            this.seccion = "datos_finales";
        } else {
            this.seccion = "datos_riesgo";
        }
        console.log(this.formNuevoCliente.controls.ruc);
    }
    listarEmpresaTamanio() {
        this._nuevoService.listarEmpresaTamanio().subscribe(
            response => {
                response['data'].forEach((value, index) => {
                    this.tamanios.push({
                        id: value.id,
                        text: value.descripcion
                    });
                    if (this.formNuevoCliente.controls.tamanio.value == value.id) {
                        this.dataSelectedEmpresaTamanio.id = value.id;
                        this.dataSelectedEmpresaTamanio.text = value.descripcion;
                    }
                    console.log(this.formNuevoCliente.controls.tamanio.value, value.id);
                });
            },
            error => {
                console.log(error);
            }
        );
    }
    selectedEmpresaTamanio(event) {
        console.log(event);
        this.formNuevoCliente.controls.tamanio.setValue(event.id);

    }
    listarProvincias() {
        this.provincias = [];
        this._nuevoService.listarProvincias().subscribe(
            response => {
                // this.provincias = response['provincia'];
                response['provincia'].forEach(value => {
                    this.provincias.push({
                        id: value.id,
                        text: value.descripcion
                    });
                });
            },
            error => {
                console.log(error);
            }
        );
    }
    selectedProvincia(event) {
        this.formNuevoCliente.controls.provinciaId.setValue(event.id);
        this.dataSelectedDistrito.id = "";
        this.dataSelectedDistrito.text = "";
        this.formNuevoCliente.controls.distritoId.setValue("");
        this.listarDistritos()
    }
    listarDistritos() {
        this.distritos = [];
        this._nuevoService.listarDistrito(this.formNuevoCliente.controls.provinciaId.value).subscribe(
            response => {
                response['distrito'].forEach(value => {
                    this.distritos.push({
                        id: value.id,
                        text: value.nombre
                    });
                });
            },
            error => {
                console.log(error);
            }
        );
    }
    selectedDistritos(event) {
        this.formNuevoCliente.controls.distritoId.setValue(event.id);
    }
    listarEmpresaRegimenes() {
        this.regimenes = [];
        this._nuevoService.listarEmpresaRegimenes().subscribe(
            response => {
                response['data'].forEach((value, index) => {
                    this.regimenes.push({
                        id: value.id,
                        text: value.descripcion
                    });
                    console.log(this.dataSelectedRegimen.id, value.id);
                    if (this.dataSelectedRegimen.id == value.id) {
                        this.dataSelectedRegimen.text = value.descripcion;
                    }
                });
            },
            error => {
                console.log(error);
            }
        )
    }
    selectedRegimen(event) {
        this.formNuevoCliente.controls.regimenId.setValue(event.id);
    }

    listarEmpresaIncluidoLista() {
        this.incluidoListas = [];
        this._nuevoService.listarEmpresaIncluidoLista().subscribe(
            response => {
                // this.incluidoListas = response['data'];
                response['data'].forEach((value, index) => {
                    this.incluidoListas.push({
                        id: value.id,
                        text: value.descripcion
                    });
                    this.dataSelectedIncluidoLista.forEach((value_d, index_d, ) => {
                        if (value.id == value_d.id) {
                            this.dataSelectedIncluidoLista[index_d].text = value.descripcion;
                        }
                    });
                });
            },
            error => {
                console.log(error);
            }
        );
    }
    selectedEmpresaIncluidoLista(event) {
        this.formNuevoCliente.controls.incluidoListaId.setValue(event.id);
    }
    listarCanal() {
        this.canales = [];
        this._nuevoService.listarCanal().subscribe(
            response => {
                response['canal'].forEach(value => {
                    this.canales.push({
                        id: value.id,
                        text: value.descripcion
                    });
                });
            },
            error => {
                console.log(error);
            }, () => {
                if (this.dataSelectedCanal.id == 1) {
                    this.listarEjecutivos();
                } else if (this.dataSelectedCanal.id == 2) {
                    this.listarProveedores();
                } else if (this.dataSelectedCanal.id == 3) {
                    this.listarCampanias();
                }
            }
        );
    }
    selectedCanal(event) {
        console.log(event);
        this.campanias = [];
        this.ejecutivos = [];
        this.proveedores = [];
        this.paginaReferenciaCanal = 1;
        this.paginaEjecutivos = 1;
        this.paginaProveedores = 1;
        this.formNuevoCliente.controls.canalProspectoId.setValue(event.id);
        if (event.id == 1) {
            this.listarEjecutivos();
        } else if (event.id == 2) {
            this.listarProveedores();
        } else if (event.id == 3) {
            this.listarCampanias();
        }
    }
    listarCampanias() {
        this._nuevoService.listarCampania().subscribe(
            response => {
                response['data'].forEach((value, index) => {
                    this.campanias.push({
                        id: value.id,
                        text: value.descripcion
                    });
                });
            },
            error => {
                console.log(error);
            }
        );
    }
    listarEjecutivos(searchText: any = "", scrolling: boolean = false) {
        this.loadingEjecutivos = true;
        if (!scrolling) {
            this.ejecutivos = [];
            this.paginaReferenciaCanal = 1;
        } else {

            this.paginaReferenciaCanal++;
        }
        let data = {
            "nombres": searchText.toUpperCase(),
            "pagina": this.paginaReferenciaCanal,
            "numfilas": this.numfilas
        }
        this._nuevoService.listarEjecutivos(data).subscribe(
            response => {
                response['data'].forEach((value, index) => {
                    this.ejecutivos.push({
                        id: value.id,
                        text: value.nombre
                    });
                });
            },
            error => {
                console.log(error);
            },
            () => {
                this.loadingEjecutivos = false;
            }
        );
    }
    selectedEjecutivo(event) {
        this.formNuevoCliente.controls.proveedorId.setValue("");
        this.formNuevoCliente.controls.campaniaId.setValue("");
        this.formNuevoCliente.controls.ejecutivoId.setValue(event.id);
    }
    listarProveedores(searchText: any = "", scrolling: boolean = false) {
        this.loadingProveedores = true;
        if (!scrolling) {
            this.ejecutivos = [];
            this.paginaReferenciaCanal = 1;
        } else {

            this.paginaReferenciaCanal++;
        }
        let data = {
            "razonsocial": searchText.toUpperCase(),
            "pagina": this.paginaReferenciaCanal,
            "numfilas": this.numfilas
        }
        this._nuevoService.listarProveedores(data).subscribe(
            response => {
                response['proveedores'].forEach((value, index) => {
                    this.proveedores.push({
                        id: value.id,
                        text: value.raz_social
                    });
                });
            },
            error => {
                console.log(error);
            },
            () => {
                this.loadingProveedores = false;
            }
        );
    }
    selectedProveedor(event) {
        this.formNuevoCliente.controls.proveedorId.setValue(event.id);
        this.formNuevoCliente.controls.campaniaId.setValue("");
        this.formNuevoCliente.controls.ejecutivoId.setValue("");
    }
    selectedCampania(event) {
        this.formNuevoCliente.controls.proveedorId.setValue("");
        this.formNuevoCliente.controls.campaniaId.setValue(event.id);
        this.formNuevoCliente.controls.ejecutivoId.setValue("");
    }
    selectedIncluidoLista(event) {
        let ids: Array<any> = []
        event.forEach((value, index) => {
            ids.push(Number(value.id));
        });
        this.formNuevoCliente.controls.incluidoListaId.setValue(ids);
        console.log(event);
    }
    eliminarIncluidoLista(index) {
        console.log(index);
        this.dataSelectedIncluidoLista.splice(index, 1);
        let ids: Array<any> = []
        this.dataSelectedIncluidoLista.forEach((value, index) => {
            ids.push(Number(value.id));
        });
        this.formNuevoCliente.controls.incluidoListaId.setValue(ids);
    }

    atras() {
        if (this.seccion == "datos_riesgo") {
            this.seccion = "datos_generales";
        } else {
            this.seccion = "datos_riesgo";

        }
    }
    editar() {
        let clientes = RUTAS_COMERCIAL_ORGANIZACIONES.clientes;
        this.router.navigate([clientes.init + '/' + this.clienteId + '/' + clientes.editar]);
    }
    validarBtnSiguiente() {
        if (this.seccion == 'datos_generales') {
            if (
                this.validarBtnBuscarRuc() &&
                this.formNuevoCliente.controls.razonSocial.status == "VALID" &&
                (
                    (this.nuevo == true && this.btneditar == false) ||
                    (this.nuevo == false)
                )
            ) {
                return true;
            }
        } else if (this.seccion == "datos_riesgo") {
            console.log(this.formNuevoCliente.controls.pagWeb);
            if (
                this.formNuevoCliente.controls.nombreComercial.status == "VALID" &&
                this.formNuevoCliente.controls.tipoPersona.status == "VALID" &&
                this.formNuevoCliente.controls.constitucion.status == "VALID" &&
                this.formNuevoCliente.controls.segmento.status == "VALID" &&

                this.formNuevoCliente.controls.provinciaId.status == "VALID" &&

                this.formNuevoCliente.controls.canalProspectoId.status == "VALID" &&
                (
                    (
                        this.formNuevoCliente.controls.canalProspectoId.value == 1 &&
                        this.formNuevoCliente.controls.ejecutivoId.status == "VALID"
                    ) ||
                    (
                        this.formNuevoCliente.controls.canalProspectoId.value == 2 &&
                        this.formNuevoCliente.controls.proveedorId.status == "VALID"
                    ) ||
                    (
                        this.formNuevoCliente.controls.canalProspectoId.value == 3 &&
                        this.formNuevoCliente.controls.campaniaId.status == "VALID"
                    )
                )
            ) {
                let _return: boolean = true;
                if (
                    (
                        this.formNuevoCliente.controls.email.value != "" &&
                        this.formNuevoCliente.controls.email.value != null &&
                        this.formNuevoCliente.controls.email.status == "INVALID"
                    ) ||
                    (
                        this.formNuevoCliente.controls.pagWeb.value != "" &&
                        this.formNuevoCliente.controls.pagWeb.value != null &&
                        this.formNuevoCliente.controls.pagWeb.status == "INVALID"
                    )
                ) {
                    _return = false;
                }
                return _return;

            }
        }
        return false;
    }
    validarBtnBuscarRuc() {
        if (this.formNuevoCliente.controls.ruc.status == "VALID") {
            return true;
        }
        return false;
    }
    checkedTipoPersona(value) {
        if (this.formNuevoCliente.controls.tipoPersona.value == value) {
            this.formNuevoCliente.controls.tipoPersona.setValue("");

        } else {
            this.formNuevoCliente.controls.tipoPersona.setValue(value);
        }
    }
    checkedTipoConstitucion(value) {
        if (this.formNuevoCliente.controls.constitucion.value == value) {
            this.formNuevoCliente.controls.constitucion.setValue("");

        } else {
            this.formNuevoCliente.controls.constitucion.setValue(value);
        }
    }
    checkedTipoSegmento(value) {
        if (this.formNuevoCliente.controls.segmento.value == value) {
            this.formNuevoCliente.controls.segmento.setValue("");

        } else {
            this.formNuevoCliente.controls.segmento.setValue(value);
        }
    }
    checkedAccionistasPEP(value) {
        if (this.formNuevoCliente.controls.accionistasPep.value === value) {
            this.formNuevoCliente.controls.accionistasPep.setValue("");

        } else {
            this.formNuevoCliente.controls.accionistasPep.setValue(value);
        }
    }
    checkedAccionistaBenificioFinal(value) {
        if (this.formNuevoCliente.controls.accionistaBenificioFinal.value === value) {
            this.formNuevoCliente.controls.accionistaBenificioFinal.setValue("");

        } else {
            this.formNuevoCliente.controls.accionistaBenificioFinal.setValue(value);
        }
    }
    checkedSujetoObligado(value) {
        if (
            this.formNuevoCliente.controls.sujetoObligado.value === value
        ) {
            this.formNuevoCliente.controls.sujetoObligado.setValue("");

        } else {
            this.formNuevoCliente.controls.sujetoObligado.setValue(value);
        }
    }
    guardar() {
        swal({
            title: '¿Estás seguro de guardar los datos?',
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
                console.log(this.formNuevoCliente.controls);
                let data: any = {
                    "ruc": this.formNuevoCliente.controls.ruc.value,
                    "razon_social": this.formNuevoCliente.controls.razonSocial.value,
                    "nombre_comercial": this.formNuevoCliente.controls.nombreComercial.value,
                    "direccion_fiscal": this.formNuevoCliente.controls.domicilioFiscal.value,

                    "condicion": this.formNuevoCliente.controls.condicion.value,
                    "ciiu": this.formNuevoCliente.controls.ciu.value,
                    "tipo_cliente": 1,
                    "finicio_actividad": this.formNuevoCliente.controls.fechaInicioActividades.value,
                    "estado_sunat": this.formNuevoCliente.controls.estado.value,
                    "representante": this.formNuevoCliente.controls.representantelegal.value,
                    "actividad_economica": this.formNuevoCliente.controls.actividadEconomica.value,


                    "tipo_persona": Number(this.formNuevoCliente.controls.tipoPersona.value),
                    "constitucion": Number(this.formNuevoCliente.controls.constitucion.value),
                    "segmento": Number(this.formNuevoCliente.controls.segmento.value),
                    "num_empleados": Number(this.formNuevoCliente.controls.numEmpleados.value),
                    "tamanio": Number(this.formNuevoCliente.controls.tamanio.value),
                    "facturacion_anual": Number(this.formNuevoCliente.controls.facturacionAnual.value),
                    "telefono1": this.formNuevoCliente.controls.telefono.value,
                    "telefono2": this.formNuevoCliente.controls.telefono.value,
                    "iddistrito": Number(this.formNuevoCliente.controls.distritoId.value),
                    "idprovincia": Number(this.formNuevoCliente.controls.provinciaId.value),
                    "direccion_principal": this.formNuevoCliente.controls.dirPrincipal.value,

                    "idcanal": Number(this.formNuevoCliente.controls.canalProspectoId.value),
                    "idejecutivo": this.formNuevoCliente.controls.canalProspectoId.value == 1 ? Number(this.formNuevoCliente.controls.ejecutivoId.value) : 0,
                    "idproveedor": this.formNuevoCliente.controls.canalProspectoId.value == 2 ? Number(this.formNuevoCliente.controls.proveedorId.value) : 0,
                    "idcampania": this.formNuevoCliente.controls.canalProspectoId.value == 3 ? Number(this.formNuevoCliente.controls.campaniaId.value) : 0,

                    "pagina_web": this.formNuevoCliente.controls.pagWeb.value,
                    "email": this.formNuevoCliente.controls.email.value,


                    "codigo_sbs": this.formNuevoCliente.controls.codigoSbs.value,
                    "accionista_pep": this.formNuevoCliente.controls.accionistasPep.value,
                    "accionista_bef_final": this.formNuevoCliente.controls.accionistaBenificioFinal.value,
                    "sujeto_obligado": this.formNuevoCliente.controls.sujetoObligado.value,
                    "num_partida": this.formNuevoCliente.controls.nroPartida.value,
                    "idregimen": Number(this.formNuevoCliente.controls.regimenId.value),
                    "idsincluidos_lista": this.formNuevoCliente.controls.incluidoListaId.value

                };
                this.loadingConsultaRuc = true;
                if (this.clienteId == 0) {
                    this._nuevoService.nuevo(data).subscribe(
                        response => {
                            this.seccion = "datos_generales";
                            this.router.navigate(['/comercial/organizaciones/clientes']);
                            this.loadingConsultaRuc = false;

                        },
                        error => {
                            this.loadingConsultaRuc = false;

                            console.log(error);
                            // this.router.navigate(['/comercial/organizaciones/clientes']);
                        }
                    );

                } else {
                    data.id = Number(this.clienteId);
                    this._nuevoService.editar(data).subscribe(
                        response => {
                            this.loadingConsultaRuc = false;

                            this.seccion = "datos_generales";
                            this.router.navigate(['/comercial/organizaciones/clientes']);
                        },
                        error => {
                            this.loadingConsultaRuc = false;

                            console.log(error);
                            // this.router.navigate(['/comercial/organizaciones/clientes']);
                        }
                    );

                }
            }
        })
    }
}
