import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { RUTAS_COMERCIAL_ADMINISTRACION } from 'src/config/rutas-modulos/rutas-comercial';

@Component({
  selector: 'app-nueva-comision',
  templateUrl: './nueva-comision.component.html',
})
export class NuevaComisionComponent implements OnInit {
  public links: Array<any>;
  public formNuevoBien: FormGroup;
  constructor(private router: Router) {
    this.links = [
      { titulo: 'Crear Condiciones de Venta' },

  ];
   }

   ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.formNuevoBien = new FormGroup({
      
    });
  }

  guardar(){
    let nuevaCondicion = RUTAS_COMERCIAL_ADMINISTRACION.administracion.init;
    this.router.navigate([nuevaCondicion + '/' + RUTAS_COMERCIAL_ADMINISTRACION.administracion.comision.comisionesVenta]);
    
}
atras(){
    let nuevaCondicion = RUTAS_COMERCIAL_ADMINISTRACION.administracion.init;
    this.router.navigate([nuevaCondicion + '/' + RUTAS_COMERCIAL_ADMINISTRACION.administracion.comision.comisionesVenta]);
    
}
}
