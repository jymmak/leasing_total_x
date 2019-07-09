import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CabeceraBasicoModule } from "../../../../components/common/cabecera-de-pagina/cabecera-de-pagina.module";
import { ExpedienteComponent } from "./expediente.component";
import { TrakingExpedienteComponent } from "./traking-expediente/traking-expediente.component";
import { ExpedienteDetalleComponent } from './expediente-detalle/expediente-detalle.component';
import { DocumentosExpedientesComponent } from './documentos-expedientes/documentos-expedientes.component';
import { DocumentosExpedientesModule } from "./documentos-expedientes/documentos-expedientes.module";
import { PdfDocumentosExpModule } from "./documentos-expedientes/pdf-documentos-exp/pdf-documentos-exp.module";
import { ChecklistModule } from "./documentos-expedientes/checklist/checklist.module";
import { ChecklistComponent } from "./documentos-expedientes/checklist/checklist.component";
import { DetalleTwoModule } from "./expediente-detalle/detalle-two/detalle-two.module";



@NgModule({
    declarations: [ExpedienteComponent, TrakingExpedienteComponent, ExpedienteDetalleComponent, DocumentosExpedientesComponent],
    imports: [
        BrowserModule,
        CabeceraBasicoModule,
        PdfDocumentosExpModule,
        ChecklistModule,
        DetalleTwoModule
    ],
    exports: [
    ]
})

export class ExpedienteModule { }
