import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { RUTAS_COMERCIAL_CRM } from 'src/config/rutas-modulos/rutas-comercial';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-pdf-reclamaciones',
  templateUrl: './pdf-reclamaciones.component.html',
})
export class PdfReclamacionesComponent implements OnInit {
  src = "/assets/img/CT-62.pdf";
  public links: Array<any>;
  public mostrarPdf: any
  public activePdf: boolean = false
  public responder: boolean = false
  public Pdf: boolean = true
  public fileUrl : any; 
  @ViewChild('pdf') createPdfs: ElementRef;
  @Output() accionGuardar = new EventEmitter();
  @Output() Guardar = new EventEmitter();

  constructor(private router: Router, private sanitizer: DomSanitizer) {
    this.links = [
      { titulo: 'Hoja de Reclamación' },
    ];
  }

  ngOnInit() {

    let param = this.router.parseUrl(this.router.url);
    this.mostrarPdf = param.queryParams[0];

    if (this.mostrarPdf === 'pdf') {
      this.activePdf = true;
      this.Pdf = false;
    } else if (this.mostrarPdf === 'responder') {
      this.activePdf = false;
      this.Pdf = false;
      this.responder = true;
    }
    const data = this.src;
    const blob = new Blob([data], { type: 'application/octet-stream' });

    this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
    this.cargarpdf();
  }

  cargarpdf() {
    this.src = "/assets/img/CT-62.pdf";
  }


  atras() {
    // let nuevaCondicion = RUTAS_COMERCIAL_CRM.crm.init;
    // this.router.navigate([nuevaCondicion + '/' + RUTAS_COMERCIAL_CRM.crm.Reclamciones.nuevo]);
    let nuevaCondicion = RUTAS_COMERCIAL_CRM.crm.init;
    this.router.navigate([nuevaCondicion + '/' + RUTAS_COMERCIAL_CRM.crm.Reclamciones.reclamaciones]);

  }



  inicio() {
    let nuevaCondicion = RUTAS_COMERCIAL_CRM.crm.init;
    this.router.navigate([nuevaCondicion + '/' + RUTAS_COMERCIAL_CRM.crm.Reclamciones.reclamaciones]);

  }

  responderReclamacion(){
    let nuevaCondicion = RUTAS_COMERCIAL_CRM.crm.init;
    this.router.navigate([nuevaCondicion + '/' + RUTAS_COMERCIAL_CRM.crm.Reclamciones.reclamacionResponder]);

  }
}
