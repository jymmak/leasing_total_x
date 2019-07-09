import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RUTAS_COMERCIAL_ADMINISTRACION } from 'src/config/rutas-modulos/rutas-comercial';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
})
export class NuevoComponent implements OnInit {
  public links: Array<any>;
  public formNuevoBien: FormGroup;
  public teamin: string;
  constructor(private router: Router) {
    this.links = [
      { titulo: 'Crear Condiciones de Financiamiento' },

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
console.log(this.teamin);
let nuevaCondicion = RUTAS_COMERCIAL_ADMINISTRACION.administracion.init;
this.router.navigate([nuevaCondicion + '/' + RUTAS_COMERCIAL_ADMINISTRACION.administracion.condiciones.condicion ]);

}

atras(){
  let nuevaCondicion = RUTAS_COMERCIAL_ADMINISTRACION.administracion.init;
  this.router.navigate([nuevaCondicion + '/' + RUTAS_COMERCIAL_ADMINISTRACION.administracion.condiciones.condicion ]);
  
}

}
