import { AfterViewInit, Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { TabCotizacionService } from './tab-cotizacion.service';

@Component({
    selector: 'tab-cotizacion-componet',
    templateUrl: 'tab-cotizacion.template.html',
    providers: [
        TabCotizacionService
    ]
})
export class TabCotizacionComponent implements OnInit, AfterViewInit {
    public monedas: Array<any>;
    public tipoOperaciones: Array<any>;


    public datosMoneda: Array<any>;
    public tipoOperacion: Array<any>;
    public lugarDestino: Array<any>;
    public lstContacto: Array<any>;
    public formTabCotizacion: FormGroup;
    public optionsModel: number[];
    public verSeleccion: Array<any>;
    public contactos: Array<any>;
    public active: boolean;
    @Input() show: boolean = false;
    @Output() close = new EventEmitter();
    @Output() accionGuardar = new EventEmitter();
    @Output() accionAtras = new EventEmitter();
    public contactosSelecionados: Array<any>;
    constructor(
        private _tabCotizacionService: TabCotizacionService
    ) {
        this.monedas = [];
        this.tipoOperaciones = [];

        this.active = false;
        this.verSeleccion = [];
        this.contactos = [
            { id: 1, text: "Angel Mendoza", email: "angel@gmail.com" },
            { id: 2, text: "Carlos Perez", email: "carlos@gmail.com" },
            { id: 3, text: "José Pereira", email: "jose@gmail.com" },
            { id: 4, text: "Cristian Perazo", email: "cristian@gmail.com" },
            { id: 5, text: "Andrés Ricardo", email: "andres@gmail.com" },
            { id: 6, text: "Camila Rodriguez", email: "camila@gmail.com" },
            { id: 7, text: "Carla Rodriguez", email: "carla@gmail.com" },
            { id: 8, text: "Constanza Ruiz", email: "constanza@gmail.com" },
        ];
        this.contactosSelecionados = [];
    }
    ngAfterViewInit() {
    }
    initForm() {
        this.formTabCotizacion = new FormGroup({
            monedaId: new FormControl("", [Validators.required]),
            tipoOperacionId: new FormControl("", [Validators.required]),
            ligarDestinoId: new FormControl("", [Validators.required]),
            contactosId: new FormControl([], [Validators.required]),
        });

    }
    listarMoneda() {
        this.monedas = [];
        this._tabCotizacionService.listarMoneda().subscribe(
            response => {
                this.monedas = response['moneda'];
            },
            error => {

            }
        );
    }
    listarTipoOperacion() {
        this.tipoOperaciones = [];
        this._tabCotizacionService.listarTipoOperacion().subscribe(
            response => {
                this.tipoOperaciones = response['tipo_operacion'];
            },
            error => {

            }
        );
    }
    ngOnInit() {
        this.initForm();
        this.listarMoneda();
        this.listarTipoOperacion();

        this.lugarDestino = [
            { id: 1, value: 'ge', text: " " },
            { id: 1, value: 'ge', text: " Arequipa " },
            { id: 1, value: 'ge', text: " Cajamarca" },
            { id: 1, value: 'ge', text: " Chiclayo" },
            { id: 1, value: 'ge', text: " Cusco " },
            { id: 1, value: 'ge', text: " Huaraz " },
            { id: 1, value: 'ge', text: " Lima" },
            { id: 1, value: 'ge', text: " Piura" },
            { id: 1, value: 'ge', text: " Trujillo " }
        ];
        this.lstContacto = [
            { id: 1, value: 'angel mendoza', text: "Angel Mendoza  ", email: ' angel@gmial.com' },
            { id: 1, value: 'Carlos Perez', text: "Carlos Perez ", email: ' carlos@gmial.com' },
            { id: 1, value: 'Jose Pereira', text: "Jose Pereira ", email: ' jose@gmial.com' },
            { id: 1, value: 'Cristian Perazo ', text: "Cristian Perazo ", email: ' cristian@gmial.com' },
            { id: 1, value: 'Andres Ricardo', text: "Andres Ricardo ", email: ' andres@gmial.com' },
            { id: 1, value: 'Camila Rodriguez', text: "Camila Rodriguez ", email: ' camila@gmial.com' },
            { id: 1, value: 'Carla Rodriguez ', text: "Carla Rodriguez ", email: ' carla@gmial.com' },
            { id: 1, value: 'Constanza Ruiz ', text: "Carla Rodriguez ", email: ' constanza@gmial.com' },
            { id: 1, value: 'Cristian Perazo ', text: "Cristian Perazo ", email: ' cristian@gmial.com' },
            { id: 1, value: 'Andres Ricardo', text: "Andres Ricardo ", email: ' andres@gmial.com' },
            { id: 1, value: 'Camila Rodriguez', text: "Camila Rodriguez ", email: ' camila@gmial.com' },
            { id: 1, value: 'Carla Rodriguez ', text: "Carla Rodriguez ", email: ' carla@gmial.com' },
            { id: 1, value: 'Constanza Ruiz ', text: "Carla Rodriguez ", email: ' constanza@gmial.com' },
        ];
    }
    guardar() {
        this.accionGuardar.emit({ data: '' });
    }
    onSelectMoneda(event) {
        this.formTabCotizacion.controls.monedaId.setValue(event.id);
    }
    onSelectOperacion(event) {
        this.formTabCotizacion.controls.tipoOperacionId.setValue(event.id);
    }

    onSelectDestino(event) {
        this.formTabCotizacion.controls.ligarDestinoId.setValue(event.id);
    }

    eliminar(event) {
        let index: number = this.contactosSelecionados.findIndex(value => parseInt(event.id, 0) === value.id);
        this.contactosSelecionados.splice(index, 1);
        this.formTabCotizacion.controls.contactosId.setValue(this.contactosSelecionados);
    }
    selectChangeContacto($event) {
        this.contactosSelecionados = $event;
        this.formTabCotizacion.controls.contactosId.setValue($event);
        console.log(this.formTabCotizacion.controls);
    }
    atras() {
        this.accionAtras.emit();
    }
}
