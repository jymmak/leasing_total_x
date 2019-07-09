import { NgModule } from "@angular/core";
import { CabeceraBasicoModule } from "../../../../components/common/cabecera-de-pagina/cabecera-de-pagina.module";
import { BrowserModule } from '@angular/platform-browser';
import { SpinnerModule } from "../../../../components/common/spinner/spinner.module";
import { MantEjecutivosComponent } from "./ejecutivos.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EditarEjecModule } from "./editar-ejec/editar-ejec.module";


@NgModule({
    declarations: [MantEjecutivosComponent],
    imports: [
        BrowserModule,
        CabeceraBasicoModule,
        SpinnerModule,
        FormsModule,
        ReactiveFormsModule,
        EditarEjecModule
    ],
})

export class MantEjecutivosModule { }
