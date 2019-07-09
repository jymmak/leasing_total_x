import { NgModule, } from "@angular/core";
import { FormularioProveedoresComponent } from "./formulario-proveedores.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from "@angular/platform-browser";
import { DirectivasModule } from "src/app/directivas/directivas.module";
import { CabeceraBasicoModule } from "src/app/components/common/cabecera-de-pagina/cabecera-de-pagina.module";
import { SpinnerModule } from "src/app/components/common/spinner/spinner.module";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [FormularioProveedoresComponent],
    imports: [
        FormsModule,
        BrowserModule,
        CabeceraBasicoModule,
        SpinnerModule,
        RouterModule,
        DirectivasModule,
        ReactiveFormsModule,
    ],
    exports: [FormularioProveedoresComponent]
})

export class FormularioProveedoresModule { }
