import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import swal from 'sweetalert2';
import { BibliotecaanexoService } from './biblioteca-anexo.service';

declare var $: any;
@Component({
  selector: 'app-biblioteca-anexo2',
  templateUrl: 'biblioteca-anexo2.component.html',
  providers: [
    BibliotecaanexoService
  ]
})
export class BibliotecaAnexo2Component implements OnInit, AfterViewInit {
  public links: Array<any>;
  public listaBibliotecaDetallada: Array<any>;
  public documento: string;
  public descargarBiblioteca: Array<any>;
  public tipoDocumentos: Array<any>;
  public selectItem: any;

  public fileToUpload: Array<File>;
  public dataFile: Array<any>;
  public loading: boolean;
  public bibliotecas: Array<any>;
  public idcliente: number;
  public numfilas: number;
  public buscar: any;
  public pagina: number;

  public loadingSubirArchivo: boolean;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _bibliotecaanexoService: BibliotecaanexoService
  ) {
    this.links = [

      { titulo: 'Detalle de Biblioteca de Anexo ' }
    ];
    this.selectItem = {};
    this.dataFile = [];
    this.tipoDocumentos = [];
    this.loading = false;
    this.idcliente = 0;
    this.buscar = "";
    this.numfilas = 10;
    this.loadingSubirArchivo = false;
    this.activatedRoute.params.subscribe(params => {
      console.log(params)
      if (params.id) {
        this.idcliente = Number(params.id);
      }
    });
  }

  ngOnInit() {
    this.listarTipoDocumentos();
    this.listarBibliotecas();
  }
  ngAfterViewInit() {
  }
  listarBibliotecas(scrolling: boolean = false) {
    this.loading = true;
    if (!scrolling) {
      this.bibliotecas = [];
      this.pagina = 1;
    } else {
      this.pagina++;
    }
    let data = {
      idcliente: this.idcliente,
      nombres: this.buscar,
      pagina: this.pagina,
      numfilas: this.numfilas,
      tipo_busqueda: "01"
    };
    this._bibliotecaanexoService.listarBibliotecas(data).subscribe(
      response => {
        response['data'].forEach(element => {
          this.bibliotecas.push(element);
        });
      },
      error => {

      },
      () => {
        this.loading = false;
      }
    );
  }

  listarTipoDocumentos() {
    this._bibliotecaanexoService.listarTipoDocumento().subscribe(
      response => {
        // this.tipoDocumentos = response['data'];
        response['data'].forEach((value, index) => {
          this.tipoDocumentos.push({
            id: value.id,
            text: value.descripcion
          })
        });
      },
      error => {
        console.log(error);
      }
    );
  }
  selectedTipoDocumentos(index, event) {
    // console.log(event);
    this.dataFile[index].tipo = event.id;
  }
  select(item) {
    this.selectItem = item;
  }

  eliminar(dato) {

  }
  descargarLista() {
    console.log(this.descargarBiblioteca);
  }
  editarCliente() {

  }
  cargaArchivo() {
    swal({
      title: '¿Estás seguro de guardar los archivos?',
      text: "",
      showCancelButton: true,
      reverseButtons: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      allowOutsideClick: false,
      allowEscapeKey: false,
    }).then((result) => {
      if (result.value) {
        this.loadingSubirArchivo = true;
        let formData: any = new FormData();
        formData.append('tipo_registro', "01");
        formData.append('idcliente', this.idcliente);
        this.dataFile.forEach((value, index) => {
          let nombre = "file[" + index + "][nombre]";
          let tipo = "file[" + index + "][tipo]";
          let fecha = "file[" + index + "][fecha]";
          formData.append(nombre, this.dataFile[index].file);
          formData.append(tipo, value.tipo);
          formData.append(fecha, moment(this.dataFile[index].file.lastModified).format('YYYY-MM-DD'));
        });
        console.log(formData);
        this._bibliotecaanexoService.uploadFile(formData)
          .then((response: any) => {
            this.loadingSubirArchivo = false;
            $("#modalCargarArcgivo").modal("hide");
            this.listarBibliotecas();

          }, error => {
            this.loadingSubirArchivo = false;
            console.log(error);
          });
      }
    });
  }
  closeCargaArchivo() {
    this.dataFile = [];
    $("#modalCargarArcgivo").modal("hide");
  }
  explorar() { }

  cancelarDetatallesBiblioteca() {
    this.router.navigate(['/comercial/organizaciones/clientes']);
  }
  nuevoSucursal() {
    this.router.navigate(['/comercial/organizaciones/clientes']);
  }
  fileChangeEvent(fileInput: any) {
    let fileToUpload = <Array<File>>fileInput.target.files;
    console.log(fileToUpload);
    for (let index = 0; index < fileToUpload.length; index++) {
      this.dataFile.push({
        nombre: fileToUpload[index].name,
        tipo: "",
        fecha: moment(fileToUpload[index].lastModified).format('DD/MM/YYYY'),
        file: fileToUpload[index]
      });
    }
  }
  eliminarArchivo(index) {
    this.dataFile.splice(index, 1)
  }
  validarBtnAceptar() {
    let val = true;
    this.dataFile.forEach((value, index) => {
      if (value.tipo == "") {
        val = false;
      }
    });
    if (this.dataFile.length == 0) {
      val = false;
    }
    return val;
  }
  verDocumentos() {
    $(document).fancybox([
      {
        src: 'https://source.unsplash.com/IvfoDk30JnI/1500x1000',
        opts: {
          caption: 'First caption',
          thumb: 'https://source.unsplash.com/IvfoDk30JnI/240x160'
        }
      },
      {
        src: 'https://source.unsplash.com/0JYgd2QuMfw/1500x1000',
        opts: {
          caption: 'Second caption',
          thumb: 'https://source.unsplash.com/0JYgd2QuMfw/240x160'
        }
      }
    ], {
        loop: true,
        thumbs: {
          autoStart: true
        }
      });

  }
}
