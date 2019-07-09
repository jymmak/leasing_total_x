import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfDocumentosExpComponent } from './pdf-documentos-exp.component';
import { BrowserModule } from '@angular/platform-browser';
import { CabeceraBasicoModule } from 'src/app/components/common/cabecera-de-pagina/cabecera-de-pagina.module';
import { DirectivasModule } from 'src/app/directivas/directivas.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CabeceraBasicoModule,
    BrowserModule,
    DirectivasModule,
    FormsModule
  ],
  declarations: [PdfDocumentosExpComponent]
})
export class PdfDocumentosExpModule { }
