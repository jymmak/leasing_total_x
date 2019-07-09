import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
import { RUTAS_COMERCIAL_COTIZACIONES } from 'src/config/rutas-modulos/rutas-comercial';
import { EnviarEmailModalComponent } from '../enviar-email-modal/enviar-email-modal.component';
@Component({
    selector: 'page-cotizador',
    templateUrl: 'cotizador.template.html',
    providers: [
    ]
})
export class CotizadorComponent implements OnInit, AfterViewInit {
    public links: Array<any>;
    public el: any;
    public seccion: any; // cotizar, agregar_bien
    @ViewChild('progressbar') progressbar: ElementRef;
    @ViewChild(EnviarEmailModalComponent) _enviarEmailModalComponent: EnviarEmailModalComponent;

    public bienes: Array<any>;
    constructor(private activatedRoute: ActivatedRoute, private router: Router, ) {
        // this.progressbar = this.progressbar as HTMLObjectElement;
        this.links = [
            { titulo: 'Cotización', link: "/comercial/cotizacion" },
        ];
        this.seccion = "consulta_ruc";
        this.bienes = [
            { id: 1, tipo: "Vehículos", marca: 'Volvo', modelo: '720', anio: 2007, valorUnitario: 60000, cantidad: 2 }
        ];
    }

    getChildIndex(child) {
        let parent = child.parentNode;
        let children = parent.children;
        let child_total = children.length - 1;
        let index = 0;
        for (let i = 0; i <= child_total; i++) {
            if (child === children[i]) {
                index = i;
                break;
            }
        }
        return index;
    }
    next() {
        this.el = this.progressbar.nativeElement as HTMLObjectElement;
        let activo = this.el.querySelector(".progressbar_header .active");
        let seccion_activa = this.el.querySelector(".progressbar_container > .active");
        let index = this.getChildIndex(seccion_activa);
        this.el.querySelector(".progressbar_header").children[index].classList.remove('active');
        this.el.querySelector(".progressbar_header").children[index + 1].classList.add('active');
        this.el.querySelector(".progressbar_header").children[index].classList.add('iconCheck');
        this.el.querySelector(".progressbar_container").children[index].classList.remove('active');
        this.el.querySelector(".progressbar_container").children[index + 1].classList.add('active');
        console.log(index);
    }
    after() {
        console.log("after");
        let el = this.progressbar.nativeElement as HTMLObjectElement;
        let activo = el.querySelector(".progressbar_header .active");
        let seccion_activa = el.querySelector(".progressbar_container > .active");
        let index = this.getChildIndex(seccion_activa);
        console.log(seccion_activa);
        el.querySelector(".progressbar_header").children[index].classList.remove('active');
        el.querySelector(".progressbar_header").children[index - 1].classList.add('active');
        el.querySelector(".progressbar_header").children[index].classList.remove('iconCheck');
        el.querySelector(".progressbar_container").children[index].classList.remove('active');
        el.querySelector(".progressbar_container").children[index - 1].classList.add('active');
        console.log(index);

    }
    ngAfterViewInit() {

        if (this.activatedRoute.snapshot.queryParams['tab'] === 'bienes') {
            //this.posicionActual = 0;
            this.next();
        } else if (this.activatedRoute.snapshot.queryParams['tab'] === 'financiamiento') {
            console.log(this.activatedRoute.snapshot.queryParams['tab']);
            this.next(); this.next();

        } else if (this.activatedRoute.snapshot.queryParams['tab'] === 'gastos') {
            this.next(); this.next(); this.next();
        }
    }

    ngOnInit() {
    }
    cargarPdf() {
        console.log();
        // this.router.navigate([RUTAS_COMERCIAL_COTIZACIONES.cotizador.pdf]);
    }
    agregarBien(event) {
        console.log(event);
        this.links[0].titulo = event;
        this.seccion = "agregar_bien";
    }
    cancelarBien(event) {
        this.links[0].titulo = "Cotización";
        this.seccion = "cotizar";
    }
    guardarBien(event) {
        this.links[0].titulo = "Cotización";
        this.seccion = "cotizar";
        this.bienes.push(
            { id: this.bienes.length + 1, tipo: "Vehículos", marca: 'Volvo', modelo: '720', anio: 2007, valorUnitario: 60000, cantidad: 2 }

        )

    }
    guardarTabCotizacion(event) {
        this.next();
    }
    guardarTabBienes() {
        this.next();
    }
    guardarTabFinanciamiento(event) {
        this.next();
    }
    guardarTabgastos($event) {
        this.links[0].titulo = "Vista previa de cotización";
        this.seccion = 'ver_pdf';
    }
    guardarCotizacion() {
        this._enviarEmailModalComponent.init();
    }
    emailEnviado() {
        this.router.navigate([RUTAS_COMERCIAL_COTIZACIONES.cotizaciones.init])
    }
    agregarGrantias() {
        this.links[0].titulo = "Lista de Grantías";
        this.seccion = 'contenido_grantias'
    }
    cancelarGrantia() {
        this.links[0].titulo = "Lista de Grantías";
    }
    agregarGrantia() {
        this.links[0].titulo = "Registro de Grantías";

    }
    accionAtrasGrantia() {
        this.links[0].titulo = "Cotización";
        this.seccion = "cotizar";
    }
    accionAtrasPdf() {
        this.links[0].titulo = "Cotización";
        this.seccion = "cotizar";
    }
    accionGuardarConsultaRuc() {
        this.links[0].titulo = "Cotización";
        this.seccion = "cotizar";

    }
    accionAtrasTabCotizacion() {
        this.links[0].titulo = "Cotización";
        this.seccion = "consulta_ruc";
    }
    verCronograma() {
        this.links[0].titulo = "Cronograma";
        this.seccion = 'contenido_cronograma'
    }
    accionAtrasCronograma() {
        this.links[0].titulo = "Cotización";
        this.seccion = "cotizar";
    }

}
