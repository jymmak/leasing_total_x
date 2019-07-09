import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { CabeceraBasicoModule } from 'src/app/components/common/cabecera-de-pagina/cabecera-de-pagina.module';
import { DocumentosExpedientesComponent } from './documentos-expedientes.component';
import { PdfDocumentosExpComponent } from './pdf-documentos-exp/pdf-documentos-exp.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { ChecklistModule } from './checklist/checklist.module';

@NgModule({
  imports: [
    CommonModule,
    CabeceraBasicoModule,
    BrowserModule,
    ChecklistModule
  ],
  declarations: [DocumentosExpedientesComponent]
})
export class DocumentosExpedientesModule { }
