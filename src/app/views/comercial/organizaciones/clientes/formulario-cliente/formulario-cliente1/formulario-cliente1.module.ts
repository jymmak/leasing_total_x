import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CabeceraBasicoModule } from "src/app/components/common/cabecera-de-pagina/cabecera-de-pagina.module";
import { RouterModule } from "@angular/router";
import { SpinnerModule } from "src/app/components/common/spinner/spinner.module";
import { FormularioCliente1Component } from "./formulario-cliente1.component";
import { DirectivasModule } from "src/app/directivas/directivas.module";
import { SelectDefaulAsyncModule } from "src/app/components/common/selects/select-defaul-async/select-defaul-async.module";
import { MultiSelectModule } from "src/app/components/common/selects/multi-select/multi-select.module";

@NgModule({
    declarations: [FormularioCliente1Component],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        SpinnerModule,
        CabeceraBasicoModule,
        RouterModule,
        DirectivasModule,
        SelectDefaulAsyncModule,
        MultiSelectModule
    ],

})

export class FormularioCliente1Module {
}
