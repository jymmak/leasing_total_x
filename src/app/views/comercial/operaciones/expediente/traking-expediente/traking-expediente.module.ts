import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrakingExpedienteComponent } from './traking-expediente.component';
import { CabeceraBasicoModule } from 'src/app/components/common/cabecera-de-pagina/cabecera-de-pagina.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    CabeceraBasicoModule,
  ],
  declarations: [TrakingExpedienteComponent]
})
export class TrakingExpedienteModule { }
