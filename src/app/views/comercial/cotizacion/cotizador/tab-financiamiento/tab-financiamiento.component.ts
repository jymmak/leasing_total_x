import { Component, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import * as moment from 'moment';
import { RUTAS_COMERCIAL_COTIZACIONES } from 'src/config/rutas-modulos/rutas-comercial';
declare var $: any;




@Component({
    selector: 'tab-financiamiento',
    templateUrl: 'tab-financiamiento.template.html',
    providers: [

    ]
})

export class TabFinanciamientoComponent implements AfterViewInit, OnInit {
    @Output() accionGuardar = new EventEmitter();
    @Output() accionAtras = new EventEmitter();
    @Output() accionAgregarGrantias = new EventEmitter();

    tabfinanControl: FormGroup;
    optionsModel: number[];
    myOptions: Array<any>;

    public resultado_busqueda: boolean;
    public boxCuotaVariable: boolean = false;
    public formCotizacion: any;
    public tipoCuota: boolean;
    public cuotaInicial: any;
    public meses: Array<any>;
    public plazo: Array<any>;
    public inicial: Array<any>;
    public periodo: Array<any>;
    public opcion: Array<any>;
    public mes: Array<any>;
    public fecha_inicio: any;
    public lstOptionBienes: Array<any>;
    public opcionPlazo: string;
    public opcionInicial: string;
    public opcionperiodo: string;
    public opcionCompra: string;
    public cuotaVariable: String;
    public tea: String;
    public fechaIni: Date;
    public textMeses: any;
    public mesesSelecionados: Array<any>;

    constructor(private router: Router, private formBuilder: FormBuilder) {
        this.resultado_busqueda = false;
        this.tipoCuota = true;
        this.cuotaInicial = "";
        this.meses = [];
        this.fecha_inicio = new Date(2018, 10, 10);
        this.textMeses = "";
        this.mesesSelecionados = [];
    }
    ngAfterViewInit() {
        console.log("datepicker");
        $('#datepicker').datepicker({
            language: 'es',
            format: "dd/mm/yyyy",
            inline: false,
            autoClose: true,
            minDate: new Date()
        });
        let elem = document.getElementsByClassName('multi-select Activo')
        console.log(elem);

    }

    ngOnInit(): void {

        this.lstOptionBienes = [];
        this.tabfinanControl = new FormGroup({
            cuota: new FormControl("", [Validators.required]),
            fechaIni: new FormControl(""),
            tea: new FormControl("", [Validators.required]),
            plazo: new FormControl("", [Validators.required]),
            inicial: new FormControl("", [Validators.required]),
            periodo: new FormControl("", [Validators.required]),
            opcion: new FormControl("", [Validators.required]),
            mes: new FormControl("", [Validators.required]),

        });
        this.plazo = [
            { id: 1, value: '-1', text: " " },
            { id: 2, value: '12', text: "12 meses" },
            { id: 3, value: '24', text: "24 meses" },
            { id: 4, value: '36', text: "36 meses" },
            { id: 5, value: '48', text: "48 meses" },
        ];
        this.inicial = [
            { id: 1, value: 'ge', text: "" },
            { id: 2, value: '0', text: "0%" },
            { id: 3, value: '5', text: "5% " },
            { id: 4, value: '10', text: "10% " },
            { id: 5, value: '15', text: "15% " },
            { id: 5, value: '20', text: "20% " }
        ];
        this.periodo = [
            { id: 1, value: 'ge', text: "<div class='font'></div> " },
            { id: 2, value: '1', text: " 1 mese" },
            { id: 3, value: '2', text: " 2 meses" },
            { id: 4, value: '3', text: " 3 meses" },
        ];
        this.opcion = [
            { id: 1, value: 'ge', text: "s/.350 " },
            { id: 2, value: 'ge', text: "s/.350" },
            { id: 3, value: 'ge', text: "s/.850" },
            { id: 4, value: 'ge', text: "s/.450" },
            { id: 5, value: 'ge', text: "s/.250" }
        ];
        this.mes = [
            { id: 1, value: 'ge', text: " " },
            { id: 2, value: 'ge', text: " Enero" },
            { id: 3, value: 'ge', text: " Febrero " },
            { id: 4, value: 'ge', text: " Marzo " },
            { id: 5, value: 'ge', text: " Abril" },
            { id: 6, value: 'ge', text: " Mayo " },
            { id: 7, value: 'ge', text: " Junio " },
        ];

        this.myOptions = [

            { id: 1, text: 'Enero ' },
            { id: 1, text: 'Febrero ' },
            { id: 2, text: ' Marzo' },
            { id: 3, text: ' Abril' },
            { id: 4, text: ' Mayo' },
            { id: 5, text: ' Junio' },
            { id: 6, text: 'Julio' },
            { id: 7, text: 'Agosto' },
            { id: 8, text: ' septiembre' },
            { id: 9, text: 'octubre' },
            { id: 10, text: 'noviembre ' },
            { id: 11, text: 'diciembre ' },
        ];

    }

    onChange(event) {
        console.log(event);
        console.log(this.mes);
        console.log(this.optionsModel);
    }

    consultar() {
        this.resultado_busqueda = true;
        if (this.formCotizacion.get("cuota").value === "1") {

        }
    }
    close() {
        this.formCotizacion.reset();
        this.resultado_busqueda = false;
    }
    cronograma() {
        // this.router.navigate([RUTAS_COMERCIAL_COTIZACIONES.cotizador.cronograma]);

    }
    changeFechaInicio(event) {
        this.meses = [];
        console.log(event);
        let mes: any = moment(event.value).format('M');
        let meses = [
            'Enero',
            'Febrero',
            'Marzo',
            'Abril',
            'Mayo',
            'Junio',
            'Julio',
            'Agosto',
            'Setiembre',
            'Octubre',
            'Noviembre',
            'Diciembre'
        ];
        for (let index = mes; 12 > index; index++) {
            this.meses.push(meses[index]);
        }
        for (let index = 0; index < mes; index++) {
            this.meses.push(meses[index]);
        }
        console.log(this.meses);
    }

    aplicarCotizacion() {
        console.log("desa");
        console.log(this.cuotaVariable);
        this.lstOptionBienes = [];
        this.opcionPlazo = "";
        this.opcionInicial = "";
        this.opcionperiodo = "";
        this.opcionCompra = " ";
        this.cuotaVariable = " ";
        this.tea = " ";
    }

    variableCuota() {
        this.boxCuotaVariable = true;
        this.agregarClaseButon();
        $(".borderIzquierdo").removeClass("borderIzquierdo").addClass("borderIzquierdo-after");
        $(".borderDerecho-after").removeClass("borderDerecho-after").addClass("borderDerecho");

    }
    fijaCuota() {
        this.boxCuotaVariable = false;
        $(".borderDerecho").removeClass("borderDerecho").addClass("borderDerecho-after");
        $(".borderIzquierdo-after").removeClass("borderIzquierdo-after").addClass("borderIzquierdo");

        this.agregarClaseButon();
    }
    capturarplazo(event) {
        this.opcionPlazo = event.text;
        this.lstOptionBienes.push(this.opcionPlazo);
        this.lstOptionBienes.push(this.tea);
        this.lstOptionBienes.push(this.fechaIni);
        this.agregarClaseButon();
    }
    capturarInicial(event) {
        this.opcionInicial = event.text;
        this.lstOptionBienes.push(this.opcionInicial);
        this.agregarClaseButon();
    }
    capturarPeriodo(event) {
        this.opcionperiodo = event.text;
        this.lstOptionBienes.push(this.opcionperiodo);
        this.agregarClaseButon();
    }
    capturarOpcionCompra(event) {
        this.opcionCompra = event.text;
        this.lstOptionBienes.push(this.opcionCompra);
        this.agregarClaseButon();
        console.log(this.lstOptionBienes);
    }

    capturarOpcionMes(event) {
        console.log(event);
    }

    saveData(event) {
        console.log(event);
    }

    garantias() {
        this.accionAgregarGrantias.emit();
        // this.router.navigate([RUTAS_COMERCIAL_COTIZACIONES.cotizador.garantias.init]);
    }

    agregarClaseButon() {
        if (this.lstOptionBienes.length > 6) {
            $(".btn-rounded").addClass("btnAplicar");
            $("#aplicar").removeAttr("disabled");
        } else {
            $(".btn-rounded").removeClass("btnAplicar");
        }
    }
    selectChangeMeses(data) {
        this.mesesSelecionados = data;
        this.textMeses = "";
        this.mesesSelecionados.forEach((value, index) => {
            this.textMeses += value.text.substring(0, 3);
            if (this.mesesSelecionados.length - 1 > index) {
                this.textMeses += " - ";
            }

        });
        console.log(event);
    }
    atras() {
        this.accionAtras.emit();
    }
    guardar() {
        this.accionGuardar.emit({ data: '' });
    }
}



