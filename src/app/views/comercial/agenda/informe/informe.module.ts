import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { CabeceraBasicoModule } from "src/app/components/common/cabecera-agenda/cabecera-agenda.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { DirectivasModule } from "src/app/directivas/directivas.module";
import { PdfViewerModule } from "ng2-pdf-viewer";
import { InformeComponent } from "./informe.component";

@NgModule({
    declarations: [InformeComponent],
    imports: [
        BrowserModule,
        RouterModule,
        CabeceraBasicoModule,
        ReactiveFormsModule,
        FormsModule,
        DirectivasModule,
        PdfViewerModule
       
    ],
    exports: [
        InformeComponent
    ]
})

export class InformeModule { }
