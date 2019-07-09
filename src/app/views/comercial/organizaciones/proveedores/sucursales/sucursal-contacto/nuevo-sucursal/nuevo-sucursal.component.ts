import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import swal from 'sweetalert2';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NuevoSucursalService } from './nuevo-sucursal.service';
import { RUTAS_COMERCIAL_ORGANIZACIONES } from 'src/config/rutas-modulos/rutas-comercial';
declare var google;
declare var $: any;


@Component({
  selector: 'nuevo-sucursal',
  templateUrl: 'nuevo-sucursal.template.html',
})


export class NuevoSucursalComponent implements OnInit {
  location: any;
  public links: Array<any>;
  public distrito: Array<any>;
  public nombre: string;
  public formformularioSucursal: any;
  public departamento: Array<any>;
  public marca: Array<any>;
  public datosProveedor: Array<any>;
  public direccion: any;
  public provincias: any;
  private geocoder: any;

  public markers: any[];
  public marker: any[];
  public latitud: number;
  public latitudRegisto: number;
  public longitudRegisto: number;

  //select
  public idprov: number;
  public sucursal: number;
  public idtipobien: any;
  public iddistrito: any;
  public iddepartamento: any;
  public idprovincia: any;
  public idtiproveedor: any;
  public idtipo: Array<any>;

  lat: number = -12.0999595;
  lng: number = -76.9703576;
  zoom: number = 15;



  @ViewChild('jpg') jpgGoogle: ElementRef;
  @ViewChild('coord') coordenadas: ElementRef;
  titulo: string;
  constructor(private router: Router,
    private _formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private _sucrusalservice: NuevoSucursalService,

  ) {
    this.links = [
      { titulo: 'Nueva Sucursal', link: "/comercial/organizaciones/proveedores/sucursales" }
    ];
     this.latitudRegisto = -12.0999595;
     this.longitudRegisto= -76.9703576;
    this.idprov = 0;
    // validar la url
    this.activatedRoute.params.subscribe(params => {
      this.idprov = Number(params.id);
      this.sucursal = Number(params.sucurrsal);
      if (params.sucurrsal) {
        this.idprov = parseInt(params.id, 10);
        this.sucursal = parseInt(params.sucurrsal, 10);
        this.consultarSucursal();
        this.consultarProveedor(this.sucursal);
        this.links[0].titulo = "Editar Sucursal";
        this.titulo = "EDITAR SUCURSAL"
      } else {
        this.sucursal = 0;
        this.titulo = "NUEVA SUCURSAL "
      }
    });
  }

  consultarSucursal() {
    this._sucrusalservice.consultar(this.idprov).subscribe(
      response => {
        if (response['sucursal'].length == 0) {

        } else {
          this.initForm(response['sucursal'][0]);
        }

      },
      error => {
        console.log(error);
      }
    );
  }
  consultarProveedor(id) {
    this._sucrusalservice.consultar(id).subscribe(
      response => {
        this.initForm(response['sucursal'][0]);
        this.datosProveedor = response['sucursal']
        console.log(this.datosProveedor);


      },
      error => {
        console.log(error);
      }
    );
  }
  ngOnInit() {

    document.getElementById('coordenadas').addEventListener('click', () => {
      let obj = event['path'];
      console.log(obj);
      for (let index = 0; index < obj.length; index++) {
        const element = obj[index];
        console.log(element.value);
      }
    });

    this.initForm({});
    this.listarProvivincias()
    this.addMarkers();
  }


  addMarkers() {
    // this.datosProveedor.forEach(element => {
    //     // this.latitud = element.latitud,
    //     // this.longitud = element.longitud
    //     this.latitud = -12.0999595;
    //     this.longitud = -76.9703576;

    // });
    this.markers = this.marker = [
      {
        lat: -12.0999595,
        lng: -76.9703576,
        draggable: true,
        //   label: direccion

      },

    ]
  }

  listarProvivincias() {
    this.provincias = [];
    this._sucrusalservice.listarProvincias().subscribe(
      response => {
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

  listarDistritos(id) {
    this.distrito = [];
    this._sucrusalservice.listarDistritos(id).subscribe(
      response => {
        response['distrito'].forEach(value => {
          this.distrito.push({
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


  capturaRDistrito(event) {
    this.iddistrito = parseInt(event.id, 10);
    this.formformularioSucursal.controls.iddist.setValue(this.iddistrito);
  }

  capturarProvincia(event) {
    this.idprovincia = parseInt(event.id, 10);
    this.formformularioSucursal.controls.idprovincia.setValue(this.idprovincia);
    this.listarDistritos(this.idprovincia )
  }

  initForm(data) {

    this.formformularioSucursal = new FormGroup({
      nombre: new FormControl(data.nombre ? data.nombre : "", [Validators.required]),
      idprovincia: new FormControl(data.idprovincia ? data.idprovincia : "", [Validators.required]),
      iddist: new FormControl(data.iddist ? data.iddist : "", [Validators.required]),
      direccion: new FormControl(data.direccion ? data.direccion : "", [Validators.required]),
      telefono: new FormControl(data.telefono ? data.telefono : ""),



    });

  }

  selectedContactos(event) {
    console.log(event);
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
        nombre: this.formformularioSucursal.controls.nombre.value,
        // provincia: this.formformularioSucursal.controls.idprovincia.value,
        iddistrito: this.formformularioSucursal.controls.iddist.value,
        direccion: this.formformularioSucursal.controls.direccion.value,
        telefono: this.formformularioSucursal.controls.telefono.value,
        latitud: this.latitudRegisto,
        longitud: this.longitudRegisto,
        celular: "",
        principal: true,
        idprov: this.idprov
      }

      if (this.sucursal == 0) {
        this._sucrusalservice.guardar(data).subscribe(
          response => {
            console.log(response);

            this.confirmarGuardarSucursal();
          },
          error => {

          }
        );
      } else {
        data.id = Number(this.sucursal);
        this._sucrusalservice.editar(data).subscribe(
          response => {
            this.confirmarGuardarSucursal();
          },
          error => {

            console.log(error);
          }
        );

      }
    });
  }

  confirmarGuardarSucursal() {
    let proveedores = RUTAS_COMERCIAL_ORGANIZACIONES.proveedores;
    this.router.navigate([proveedores.init + '/' + this.idprov + '/' + proveedores.sucursales.init]);

  }
  regresar() {
    let proveedores = RUTAS_COMERCIAL_ORGANIZACIONES.proveedores;
    this.router.navigate([proveedores.init + '/' + this.idprov + '/' + proveedores.sucursales.init]);

  }

  // onlyNumberKey(event) {
  //   return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57;
  // }

  validarTelefono(event) {
    console.log(event);

    this.formformularioSucursal.controls.telefono.setValue(event)

  }

  clickedMarker(event, i) {
    console.log(event);
    console.log(i);

  }

  clickedMarkesr(label: string, index: number) {
    alert(`clicked the marker: ${label || index}`)
  }

  markerDragEnd(m, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
    let obj = $event['coords'];
    console.log(m.lat, m.lng);
    var geocoder = new google.maps.Geocoder;
    this.geocodeLatLng(geocoder, m.lat, m.lng)
  }



  geocodeLatLng(geocoder, lat, lng) {
    var latlng = { lat: parseFloat(lat), lng: parseFloat(lng) };
    console.log(latlng);
    geocoder.geocode({ 'location': latlng }, (results, status) => {
      if (status === 'OK') {
        if (results[0]) {
          console.log(results[0].formatted_address);
          this.direccion = results[0].formatted_address
          this.latitudRegisto = lat
          this.longitudRegisto = lng
        } else {
          window.alert('No results found');
        }
      }
    });
  }

  geocodeAaddress(address) {
    console.log(address);

    var geocoder = new google.maps.Geocoder;
    geocoder.geocode({ 'address': address }, (results, status) => {
      if (status == google.maps.GeocoderStatus.OK) {
        if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
          var latitude = results[0].geometry.location.lat();
          var longitude = results[0].geometry.location.lng();
          console.log(latitude);

          // initialize(latitude, longitude);
        } else {
          alert("No results found");
        }
      }
    });
  }



}
