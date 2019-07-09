import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CabeceraBasicoModule } from "../../../../components/common/cabecera-de-pagina/cabecera-de-pagina.module";
import { ReclamacionesComponent } from "./reclamaciones.component";
import { FormsModule } from "@angular/forms";
import { NewReclamacionComponent } from './new-reclamacion/new-reclamacion.component';
import { DirectivasModule } from "src/app/directivas/directivas.module";
import { PdfReclamacionesComponent } from './pdf-reclamaciones/pdf-reclamaciones.component';
import { PdfViewerModule } from "ng2-pdf-viewer";
import { ResponderReclamacionComponent } from "./pdf-reclamaciones/responder-reclamacion/responder-reclamacion.component";


@NgModule({
    declarations: [ReclamacionesComponent, NewReclamacionComponent, PdfReclamacionesComponent, ResponderReclamacionComponent],
    imports: [
        BrowserModule,
        CabeceraBasicoModule,
        FormsModule,
        DirectivasModule,
        PdfViewerModule
    ],
    exports: [
    ]
})

export class ReclamacionesModule { }
