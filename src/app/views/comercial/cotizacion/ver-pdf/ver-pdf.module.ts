import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CabeceraBasicoModule } from "src/app/components/common/cabecera-de-pagina/cabecera-de-pagina.module";
import { EnviarPdfModule } from "../cotizador/enviar-pdf/enviar-pdf.module";
import { EnviarEmailModalModule } from "../enviar-email-modal/enviar-email-modal.module";
import { VerPdfComponent } from "./ver-pdf.componet";

@NgModule({
    declarations: [VerPdfComponent],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        CabeceraBasicoModule,
        EnviarPdfModule,
        EnviarEmailModalModule
    ],
    exports: [
        VerPdfComponent
    ]
})

export class VerPdfModule { }
