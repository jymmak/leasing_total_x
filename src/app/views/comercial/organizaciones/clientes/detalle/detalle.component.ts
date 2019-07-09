import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DetalleService } from './detalle.service';

declare var $: any;

@Component({
    selector: 'cliente-detalle',
    templateUrl: 'detalle.template.html',

    providers: [
        DetalleService
    ]
})
export class ClienteDetalleComponent implements OnInit {
    public links: Array<any>;
    public detalleCliente: boolean = true;
    public detalleCliente2: boolean = false;
    public detalleCliente3: boolean = false;
    public btn1: boolean = true;
    public btn2: boolean = false;
    public btn3: boolean = false;
    public datosRiesgos: boolean = false;
    public spinner: boolean;
    public informacion: boolean;
    public ruc: number;
    public razonSocial: string;
    public razonComercial: string;
    public tipoCliente: string;
    public tipoPersona: string;
    public constitucion: string;
    public estado: string;
    public condicion: string;
    public fechaIni: string;
    public representanteLegal: string;
    public domicilioFiscal: string;
    public actividadEconomica: string;
    public partidaRegional: any;
    public ciiu: number;
    public codigoSbs: number;
    public segmento: string;
    public pgWeb: string;
    public codUbigeo: any;
    public numEmpleado: number;
    public correo: string;
    public canalProspecto: string;
    public tamano: string;
    public telefono: string;
    public refCanal: string;
    public factAnual: string;
    public provincia: string;
    public valorCliente: string;
    // public clienteDesde: string;
    public distrito: string;
    public actualizado: string;
    public antiguedad: string;
    public dirPrincipal: string;
    public accionista: string;
    public regimenSujeto: string;
    public accionistaBenfFinal: string;
    public incluidoListas: string;
    public antiguedadCliente: string;
    public sujetoObligado: string;
    public codigoSBS: number;
    public codigoCU: any;
    public partidaRegistral: any
    public clienteId: any;
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private _detalleService: DetalleService
    ) {
        this.spinner = false;
        this.informacion = false;
        this.links = [
            { titulo: 'Detalle de Cliente' },

        ];
        this.activatedRoute.params.subscribe(params => {
            console.log(params)
            if (params.id) {
                this.clienteId = params.id;
                this.links[0].titulo = "Editar Cliente";
                this.verCliente();
            }

        });
    }
    verCliente() {
        this._detalleService.detalle(this.clienteId).subscribe(
            response => {
                let cliente = response['data'][0];
                this.ruc = cliente.ruc;
                this.razonSocial = cliente.razon_social;
                this.razonComercial = cliente.nom_comercial;
                this.tipoCliente = cliente.idtipocliente;
                this.tipoPersona = cliente.idtipo_persona; // nacional = 1 , extrangero = 2
                this.constitucion = cliente.idconstitucion; // natrural = 1 , jurídica = 2 
                this.estado = cliente.estado_sunat;
                this.condicion = cliente.condicion_sunat;
                this.fechaIni = cliente.finicioactividad;
                this.representanteLegal = cliente.representante;
                this.domicilioFiscal = cliente.direccion_fiscal;
                this.actividadEconomica = cliente.actividad_economica;
                this.codigoSbs = cliente.codigo_sbs;
                this.ciiu = cliente.ciiu;
                this.partidaRegional = cliente.num_partida;
                this.antiguedadCliente = cliente.antiguedad;
                this.segmento = cliente.idsegmento == 1 ? 'Minorista' : 'No Minorista';
                this.pgWeb = cliente.pagina_web;
                this.codUbigeo = cliente.ubigeo;
                this.numEmpleado = cliente.nempleados;
                this.correo = cliente.email;
                this.canalProspecto = cliente.idcanal;
                this.tamano = cliente.tamanio;
                this.telefono = cliente.telf1;
                let refCanal = "";
                if (cliente.idproveedor != null) {
                    refCanal = cliente.idproveedor
                }
                if (cliente.idejecutivo != null) {
                    refCanal = cliente.idejecutivo
                }
                if (cliente.idcampania != null) {
                    refCanal = cliente.idcampania
                }
                this.refCanal = refCanal;

                this.factAnual = cliente.facturacion_anual;
                this.provincia = cliente.idprovincia;
                // this.valorCliente = "--";
                // this.clienteDesde = "--";
                this.distrito = cliente.iddistrito;
                this.actualizado = cliente.fecha_actual;
                this.antiguedad = cliente.antiguedad;
                this.dirPrincipal = cliente.direccion_principal;
                this.accionista = cliente.accionista_pep;
                this.regimenSujeto = cliente.idregimen;
                this.accionistaBenfFinal = cliente.accionista_beff;
                this.incluidoListas = cliente.incluidolista;
                this.sujetoObligado = cliente.sujeto_obligado;
                // this.codigoSBS = codigo_sbs;
                this.codigoCU = cliente.ciiu;
                this.partidaRegistral = cliente.num_partida;

            },
            error => {
                console.log(error);
            }
        );
    }
    ngOnInit(): void {

    }
    init() {
        this.informacion = !this.informacion;
    }

    clientedetalle2() {
        this.datosRiesgos = false;
        this.btn1 = false;
        this.btn2 = true;
        this.btn3 = false;
        this.detalleCliente = false;
        this.detalleCliente2 = true;
        this.detalleCliente3 = false;
    }
    clientedetalle3() {
        this.datosRiesgos = false;
        this.btn1 = false;
        this.btn2 = false;
        this.btn3 = true;
        this.detalleCliente = false;
        this.detalleCliente2 = false;
        this.detalleCliente3 = true;
    }
    btnAtras2() {
        this.datosRiesgos = false;
        this.btn1 = true;
        this.btn2 = false;
        this.btn3 = false;
        this.detalleCliente = true;
        this.detalleCliente2 = false;
        this.detalleCliente3 = false;

    }
    btnAtras3() {
        this.datosRiesgos = false;
        this.btn2 = true;
        this.btn3 = false;
        this.detalleCliente = false;
        this.detalleCliente2 = true;
        this.detalleCliente3 = false;
    }

    // clientedetalle3() {
    //     this.router.navigate(['/comercial/organizaciones/cliente']);
    // }

    btnVolver() {
        this.router.navigate(['/comercial/organizaciones/clientes']);
    }

    confirmarDetallesCliente() {
        this.router.navigate(['/comercial/organizaciones/clientes']);
    }
}

