import { NgModule } from "@angular/core";
import { CabeceraBasicoModule } from "../../../../../../components/common/cabecera-de-pagina/cabecera-de-pagina.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { FormularioContactoComponent } from "./formulario-contacto.component";
import { DirectivasModule } from "src/app/directivas/directivas.module";
import { SelectDefaulAsyncModule } from "src/app/components/common/selects/select-defaul-async/select-defaul-async.module";

@NgModule({
    declarations: [FormularioContactoComponent],
    imports: [

        CabeceraBasicoModule,
        FormsModule,
        BrowserModule,
        ReactiveFormsModule,
        RouterModule,
        DirectivasModule,
        SelectDefaulAsyncModule,

    ],
})

export class FormularioContactoModule { }
