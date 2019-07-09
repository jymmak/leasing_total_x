import { Component, OnInit } from '@angular/core';
import { RUTAS_COMERCIAL_CRM } from 'src/config/rutas-modulos/rutas-comercial';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-contacto',
  templateUrl: './new-contacto.component.html',
})
export class NewContactoComponent implements OnInit {
	public links: Array<any>;

  constructor(private router: Router,) {
    
		this.links = [
			{ titulo: 'Crear Contacto' },
		];

   }

  ngOnInit() {
  }

  guardar(){
    let nuevaCondicion = RUTAS_COMERCIAL_CRM.crm.init;
		this.router.navigate([nuevaCondicion + '/' +  RUTAS_COMERCIAL_CRM.crm.contactos.contactos]);


  }

  atras(){
    let nuevaCondicion = RUTAS_COMERCIAL_CRM.crm.init;
		this.router.navigate([nuevaCondicion + '/' +  RUTAS_COMERCIAL_CRM.crm.contactos.contactos]);


  }

}
