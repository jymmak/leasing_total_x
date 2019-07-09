import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CabeceraBasicoModule } from "../../../../components/common/cabecera-de-pagina/cabecera-de-pagina.module";
import { ControlExpedienteComponent } from "./control-expediente.component";
import { DirectivasModule } from "src/app/directivas/directivas.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@NgModule({
    declarations: [ControlExpedienteComponent],
    imports: [
        BrowserModule,
        CabeceraBasicoModule,
        DirectivasModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
    ]
})

export class ControlExpedienteModule { }
