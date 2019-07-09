import { NgModule } from "@angular/core";
import { SucursalComponent } from "./sucursal.component";
   
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CabeceraBasicoModule } from "../../../../../components/common/cabecera-de-pagina/cabecera-de-pagina.module";
import { SpinnerModule } from "../../../../../components/common/spinner/spinner.module";
import { BrowserModule } from '@angular/platform-browser';
import { FormularioSucursalModule } from "./formulario/formulario.module";
import { SucursalBuscadorModule } from "./buscador/buscador.module";
declare var $: any;




@NgModule({
    declarations: [SucursalComponent],
    imports: [
       
        CabeceraBasicoModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        SpinnerModule,
        FormularioSucursalModule,
        SucursalBuscadorModule
    ],
    exports: [SucursalComponent]
})

export class SucursalModule { }
