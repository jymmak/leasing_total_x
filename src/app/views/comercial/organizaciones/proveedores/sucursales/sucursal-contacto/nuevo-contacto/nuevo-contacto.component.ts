import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NuevoContactoService } from './nuevo-contacto.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import { RUTAS_COMERCIAL_ORGANIZACIONES } from 'src/config/rutas-modulos/rutas-comercial';
import * as moment from 'moment';

@Component({
  selector: 'app-nuevo-contacto',
  templateUrl: './nuevo-contacto.component.html',
})
export class NuevoContactoComponent implements OnInit {
  public links: Array<any>;
  public formformularioContacto: any;
  public idContacto: number;
  public idProveedores: number;
  public idSucursal: number;
  public tipoContacto: boolean
  @ViewChild('fechaInicio') elFechaInicio: ElementRef;
  @Input() minDate: any;
  constructor(private router: Router,
    private _contactoService: NuevoContactoService,
    private activatedRoute: ActivatedRoute, ) {
    this.links = [
      { titulo: 'Nuevo Contacto' }
    ];
    this.idContacto = 0;
    this.idProveedores = 0;
    this.idSucursal = 0;
    this.tipoContacto = true;
   // this.minDate = new Date();
    this.activatedRoute.params.subscribe(params => {
      this.idSucursal = Number(params.sucursal);
      this.idContacto = Number(params.contacto);
      this.idProveedores = Number(params.proveedores);
      if (params.contacto) {
        this.idSucursal = parseInt(params.sucursal, 10);
        this.idContacto = parseInt(params.contacto, 10);
        this.idProveedores = parseInt(params.proveedores, 10);
        this.consultarContacto(this.idContacto);
      } else {
        this.idContacto = 0;
      }
    });
  }

  consultarContacto(id) {
    this._contactoService.consultar(id).subscribe(
      response => {
        console.log(response);

        this.initForm(response['contacto'][0]);


      },
      error => {
        console.log(error);
      }
    );

  }

  ngOnInit() {
    // this.minDate = moment().add(-18, 'y').format('YYYY');
    this.minDate = moment(this.minDate, "DD-MM-YYYY").add('years', -5);
    this.initForm({});
  }

  initForm(data) {
    this.formformularioContacto = new FormGroup({
      nombre: new FormControl(data.nombre ? data.nombre : "", [Validators.required]),
      apellido: new FormControl(data.apellido ? data.apellido : "", [Validators.required]),
      fnacimineto: new FormControl(data.fnacimineto ? data.fnacimineto : "", [Validators.required]),
      celular1: new FormControl(data.celular1 ? data.celular1 : "", [Validators.required]),
      celular2: new FormControl(data.celular2 ? data.celular2 : "", [Validators.required]),
      telefono: new FormControl(data.telefono ? data.telefono : "", [Validators.required]),
      cargo: new FormControl(data.cargo ? data.cargo : "", [Validators.required]),
      email: new FormControl(data.email ? data.email : "", [Validators.email]),
      tipoContacto: new FormControl(data.tipoContacto ? data.tipoContacto : 1, [Validators.required]), // nacional = 1 , extrangero = 2

    });

    if (data.fnacimineto) {
      this.elFechaInicio.nativeElement.value = moment(data.fnacimineto).format('DD/MM/YYYY');
    }

  }

  checkedTipoPersona(value) {

    this.formformularioContacto.controls.tipoContacto.setValue(value);
  }

  selectedFechaNacimiento(event) {
    this.formformularioContacto.controls.fnacimineto.setValue(event);

  }



  guardar() {
    swal({
      title: '¿Está seguro de guardar los datos?',
      text: "",
      showCancelButton: true,
      reverseButtons: true,
      cancelButtonClass: "mat-raised-button mat-primary",
      confirmButtonClass: "mat-raised-button mat-primary",
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      allowOutsideClick: false,
      allowEscapeKey: false,
      focusConfirm: false,
      focusCancel: false
    }).then((result) => {
      let data: any = {
        idsucursal: this.idSucursal,
        nombre: this.formformularioContacto.controls.nombre.value,
        apellido: this.formformularioContacto.controls.apellido.value,
        principal: this.formformularioContacto.controls.tipoContacto.value,
        fnacimiento: moment(this.formformularioContacto.controls.fnacimineto.value).format('YYYY-MM-DD'),
        celular1: this.formformularioContacto.controls.celular1.value,
        celular2: this.formformularioContacto.controls.celular2.value,
        telefono1: this.formformularioContacto.controls.telefono.value,
        cargo: this.formformularioContacto.controls.cargo.value,
        email: this.formformularioContacto.controls.email.value,
      }

      if (this.idContacto == 0) {
        this._contactoService.guardar(data).subscribe(
          response => {
            console.log(response);

            this.confirmarGuardarContacto();
          },
          error => {
            console.log(error);

          }
        );
      } else {
        data.id = Number(this.idContacto);
        this._contactoService.editar(data).subscribe(
          response => {
            this.confirmarGuardarContacto();
          },
          error => {
            console.log(error);
          }
        );

      }
    });
  }


  atras() {
    let proveedores = RUTAS_COMERCIAL_ORGANIZACIONES.proveedores;
    this.router.navigate([proveedores.init + '/' + this.idProveedores + '/' + proveedores.sucursales.init + '/' + this.idSucursal + '/' + proveedores.contacto.init]);
  }

  confirmarGuardarContacto() {
    let proveedores = RUTAS_COMERCIAL_ORGANIZACIONES.proveedores;
    this.router.navigate([proveedores.init + '/' + this.idProveedores + '/' + proveedores.sucursales.init + '/' + this.idSucursal + '/' + proveedores.contacto.init]);
  }


}
