import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { EnviarPdfComponent } from "./enviar-pdf.component";
import { DirectivasModule } from "src/app/directivas/directivas.module";
import { CabeceraBasicoModule } from "src/app/components/common/cabecera-de-pagina/cabecera-de-pagina.module";
import { RouterModule } from "@angular/router";
import { PdfViewerModule } from "ng2-pdf-viewer";

@NgModule({
    declarations: [EnviarPdfComponent],
    imports: [
        FormsModule,
        BrowserModule,
        CommonModule,
        CabeceraBasicoModule,
        DirectivasModule,
        RouterModule,
        PdfViewerModule

    ],
    exports: [EnviarPdfComponent]
})

export class EnviarPdfModule {

}
