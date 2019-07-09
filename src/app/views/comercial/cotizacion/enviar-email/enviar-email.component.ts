import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { RUTAS_COMERCIAL_COTIZACIONES } from 'src/config/rutas-modulos/rutas-comercial';
import { EnviarEmailModalComponent } from '../enviar-email-modal/enviar-email-modal.component';


@Component({
    selector: 'enviar-email-component',
    templateUrl: 'enviar-email.template.html',
    providers: [
    ]

})
export class EnviarEmailComponent implements OnInit, AfterViewInit {
    @ViewChild(EnviarEmailModalComponent) _enviarEmailModalComponent: EnviarEmailModalComponent;

    public links: Array<any>;

    constructor(private router: Router, ) {
        this.links = [
            { titulo: 'Vista previa de cotización', link: "" },
        ];
    }
    ngAfterViewInit() {
    }
    ngOnInit() {
        this._enviarEmailModalComponent.init();

    }
    guardarCotizacion() {
        this._enviarEmailModalComponent.init();
    }
    accionAtrasPdf() {
        this.router.navigate([RUTAS_COMERCIAL_COTIZACIONES.cotizaciones.init]);
    }
    emailEnviado(){
        this.router.navigate([RUTAS_COMERCIAL_COTIZACIONES.cotizaciones.init])
    }
}
