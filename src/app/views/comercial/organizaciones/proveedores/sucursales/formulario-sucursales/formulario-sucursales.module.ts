import { NgModule } from "@angular/core";
import { FormularioSucursalesComponent } from "./formulario-sucursales.component";
 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TabDatosModule } from "./tab-datos/tab-datos.module";
import { TabContactoModule } from "./tab-contacto/tab-contacto.module";



@NgModule({
    declarations: [FormularioSucursalesComponent],
    imports: [
       
        FormsModule,
        TabDatosModule,
        TabContactoModule,
        BrowserModule,
        ReactiveFormsModule,
    ],
    exports: [FormularioSucursalesComponent]
})

export class FormularioSucursalesModule { }
