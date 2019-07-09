import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { CabeceraBasicoModule } from 'src/app/components/common/cabecera-de-pagina/cabecera-de-pagina.module';
import { DetalleTwoComponent } from './detalle-two/detalle-two.component';
import { DetalleTwoModule } from './detalle-two/detalle-two.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    CabeceraBasicoModule,
    DetalleTwoModule
  ],
  declarations: [DetalleTwoComponent]
})
export class ExpedienteDetalleModule { }
