import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevaGarantiaComponent } from './nueva-garantia.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CabeceraBasicoModule } from 'src/app/components/common/cabecera-de-pagina/cabecera-de-pagina.module';
import { BrowserModule } from '@angular/platform-browser';
import { DirectivasModule } from 'src/app/directivas/directivas.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    CabeceraBasicoModule,
    DirectivasModule,
    ReactiveFormsModule
  ],
  declarations: [NuevaGarantiaComponent],
  exports:[
    NuevaGarantiaComponent
  ]
})
export class NuevaGarantiaModule { }
