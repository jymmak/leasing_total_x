import { NgModule } from "@angular/core";
import { ContactoComponent } from "./contacto.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CabeceraBasicoModule } from "../../../../../components/common/cabecera-de-pagina/cabecera-de-pagina.module";
import { SpinnerModule } from "../../../../../components/common/spinner/spinner.module";
import { BrowserModule } from '@angular/platform-browser';
import { ContactoBuscadorModule } from "./buscador/buscador.module";
import { FormularioContactoModule } from "./formulario-contacto/formulario-contacto.module";
import { DetalleContactoModule } from "./detalle/detalle.module";
import { DirectivasModule } from "src/app/directivas/directivas.module";
declare var $: any;
@NgModule({
    declarations: [ContactoComponent],
    imports: [
        CabeceraBasicoModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        SpinnerModule,
        ContactoBuscadorModule,
        FormularioContactoModule,
        DetalleContactoModule,
        DirectivasModule
    ],
    exports: [ContactoComponent]
})

export class ContactoModule { }
