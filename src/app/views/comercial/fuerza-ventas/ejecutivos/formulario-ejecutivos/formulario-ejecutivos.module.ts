import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { SpinnerModule } from "../../../../../components/common/spinner/spinner.module";
import { BrowserModule } from '@angular/platform-browser';
import { FormularioEjecutivosComponent } from "./formulario-ejecutivos.component";

@NgModule({
    declarations: [
        FormularioEjecutivosComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        SpinnerModule
    ],
    exports: [
        FormularioEjecutivosComponent
    ]
})

export class FormularioEjecutivosModule { }
