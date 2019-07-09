import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RUTAS_COMERCIAL_CRM } from 'src/config/rutas-modulos/rutas-comercial';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-new-reclamacion',
  templateUrl: './new-reclamacion.component.html',
})
export class NewReclamacionComponent implements OnInit {
  src = "/assets/img/CT-62.pdf";
  public reclamacion1: boolean = true;
  public reclamacion2: boolean = false;
  public pdf: boolean = false;
  public btnPdf: boolean = false;
  public titel: boolean = true
  public links: Array<any>;
  public numReclamacion: String
  @Output() accionGuardar = new EventEmitter();
  @Output() Guardar = new EventEmitter();
  constructor(private router: Router) {
    this.links = [
      { titulo: 'Crear Reclamación' },
    ];
  }

  ngOnInit() {
    this.numReclamacion = 'REC - 00341'

    this.cargarpdf();
  }

  cargarpdf() {
    this.src = "/assets/img/CT-62.pdf";
  }

  siguiente() {
    this.reclamacion2 = true;
    this.reclamacion1 = false;
  }

  reclamacionOne() {

    this.reclamacion2 = false;
    this.reclamacion1 = true;


  }

  checkedComercial(event) {
    console.log(event);

  }

  atras() {
    let nuevaCondicion = RUTAS_COMERCIAL_CRM.crm.init;
    this.router.navigate([nuevaCondicion + '/' + RUTAS_COMERCIAL_CRM.crm.Reclamciones.reclamaciones]);

  }


  guardar() {
    this.reclamacion2 = false;
    this.reclamacion1 = false;
    this.pdf = true;
    this.titel = false;
    this.btnPdf = true;
  }

  enviarPdf() {

    swal({
      title: '¿Desea Confirmar el envio?',
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
        this.Aceptar();

        this.Guardar.emit({ data: '' });
      }
    });
  }



  // let nuevaCondicion = RUTAS_COMERCIAL_CRM.crm.init;
  // this.router.navigate([nuevaCondicion + '/' + RUTAS_COMERCIAL_CRM.crm.Reclamciones.pdf]);



  Aceptar() {
    swal({
      title: '!Genial operación exitosa¡',
      customClass: 'swal2-alert-success',
      confirmButtonText: 'Volver',
    }).then((result) => {
      if (result.value) {
        this.accionGuardar.emit();
        // this.inicio();
      }
    });
  }

  responderReclamacion() {
    let nuevaCondicion = RUTAS_COMERCIAL_CRM.crm.init;
    this.router.navigate([nuevaCondicion + '/' + RUTAS_COMERCIAL_CRM.crm.Reclamciones.pdf]);

  }
}
