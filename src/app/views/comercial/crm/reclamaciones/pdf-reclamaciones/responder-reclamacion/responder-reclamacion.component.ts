import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RUTAS_COMERCIAL_CRM } from 'src/config/rutas-modulos/rutas-comercial';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
@Component({
  selector: 'app-responder-reclamacion',
  templateUrl: './responder-reclamacion.component.html',
})
export class ResponderReclamacionComponent implements OnInit {
  src = "/assets/img/CT-62.pdf";
  public hojaReclamacion: string
  public pdf: boolean = true;
  public btnResponder: boolean = false;
  public btnEnviarReclamacion: boolean = false;
  public btnPdf: boolean = true;
  public formularioReclamacion: boolean = false

  @Output() accionGuardar = new EventEmitter();
  @Output() Guardar = new EventEmitter();
  constructor(private router: Router) {
    this.hojaReclamacion = 'HR_00124'
  }


  ngOnInit() {
    this.cargarpdf();
  }

  cargarpdf() {
    this.src = "/assets/img/CT-62.pdf";
  }

  FormularioReclamacion() {
    this.pdf = false;
    this.btnPdf = false;
    this.btnResponder = true;
    this.formularioReclamacion = true;
  }


  atras() {

    let nuevaCondicion = RUTAS_COMERCIAL_CRM.crm.init;
    this.router.navigate([nuevaCondicion + '/' + RUTAS_COMERCIAL_CRM.crm.Reclamciones.reclamaciones]);

  }

  atrasPdf() {
    this.pdf = true;
    this.btnPdf = true;
    this.btnResponder = false;
    this.formularioReclamacion = false;
  }

  guardarReclamacion() {
    this.pdf = true;
    this.btnPdf = false;
    this.btnResponder = false;
    this.formularioReclamacion = false;
    this.btnEnviarReclamacion = true;
  }

  enviarFormReclamacion() {

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



  Aceptar() {
    swal({
      title: '!Genial operación exitosa¡',
      customClass: 'swal2-alert-success',
      confirmButtonText: 'Volver',
    }).then((result) => {
      if (result.value) {
        this.accionGuardar.emit();
      }
    });
  }

  atrasReclamacion() {
    this.pdf = false;
    this.btnPdf = false;
    this.btnResponder = true;
    this.formularioReclamacion = true;
  }

  atrasFormReclamacion(){
    this.pdf = false;
    this.btnPdf = false;
    this.btnResponder = true;
    this.formularioReclamacion = true;
    this.btnEnviarReclamacion = false;
  }
}
