import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleTwoComponent } from './detalle-two.component';
import { BrowserModule } from '@angular/platform-browser';
import { CabeceraBasicoModule } from 'src/app/components/common/cabecera-de-pagina/cabecera-de-pagina.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    CabeceraBasicoModule,
  ],
  declarations: [DetalleTwoComponent]
})
export class DetalleTwoModule { }
