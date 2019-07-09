import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RUTAS_COMERCIAL_OPERACIONES } from 'src/config/rutas-modulos/rutas-comercial';
import swal from 'sweetalert2';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
})
export class ChecklistComponent implements OnInit {
  public lstDocumentosFinancieros: Array<any>;
  public lstDocuemntosLegales: Array<any>;
  public selectItem: any;
  public links: Array<any>;
  public expedienteId: any;
  // public AccionGuardar: any;
  // public accionGuardar: any;
  @Output() AccionCancelar = new EventEmitter();
  @Output() AccionGuardar = new EventEmitter();
  @Output() accionGuardar = new EventEmitter();
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.selectItem = {};
    this.links = [
      { titulo: 'Checklist Comercial ' },
    ];
    this.activatedRoute.params.subscribe(params => {
      this.expedienteId = params.codigo;
    });
  }

  ngOnInit() {
    this.lstDocumentosFinancieros = [
      {
        id: 1,
        prioridad: 'P',
        tipo: 'PDTA',
        nombre: 'PDT Renta Anual Tercera Categoria (2)',
        comercial: true,
        Riesgos: false
      },
      {
        id: 2,
        prioridad: 'P',
        tipo: 'PDTA',
        nombre: 'PDT IGV Impuesto a la Renta (6)',
        comercial: true,
        Riesgos: false
      },
      {
        id: 3,
        prioridad: 'P',
        tipo: 'PDTA',
        nombre: 'Estado de Resultados a la Fecha ',
        comercial: true,
        Riesgos: false
      },
      {
        id: 4,
        prioridad: 'P',
        tipo: 'PDTA',
        nombre: 'Balance General a la Fecha ',
        comercial: true,
        Riesgos: false
      },
      {
        id: 5,
        prioridad: 'P',
        tipo: 'PDTA',
        nombre: 'Flujo de caja Proyectado',
        comercial: true,
        Riesgos: false
      },

    ]

    this.lstDocuemntosLegales = [
      {
        id: 6,
        prioridad: 'NP',
        tipo: 'FRUCT',
        nombre: 'Ficha Ruc',
        comercial: true,
        Riesgos: false
      },
      {
        id: 7,
        prioridad: 'NP',
        tipo: 'CONS',
        nombre: ' ',
        comercial: false,
        Riesgos: false
      },
      {
        id: 8,
        prioridad: 'P',
        tipo: 'CDNI',
        nombre: 'Copia de DNI (Socios) ',
        comercial: true,
        Riesgos: false
      },
      {
        id: 9,
        prioridad: 'P',
        tipo: 'CLIT',
        nombre: 'Copia Literal Actualizada ',
        comercial: true,
        Riesgos: false
      }

    ]
  }


  select(item) {

    this.selectItem = item;

  }
  checkedComercial(event) {
    console.log(event);

  }
  btnAtras() {
   
    this.router.navigate([RUTAS_COMERCIAL_OPERACIONES.expediente + '/' + this.expedienteId + '/' + RUTAS_COMERCIAL_OPERACIONES.expedientes.documentos]);
    // /comercial/operaciones/expediente/20180021/documentos
  }


  checklist() {
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

        this.AccionGuardar.emit({ data: '' });
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
}
