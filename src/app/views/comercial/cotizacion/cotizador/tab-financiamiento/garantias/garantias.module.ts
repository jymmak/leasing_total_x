import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SpinnerModule } from 'src/app/components/common/spinner/spinner.module';
import { BotonUpModule } from 'src/app/components/common/boton-up/boton-up.module';
import { GarantiasComponent } from './garantias.component';
import { CabeceraBasicoModule } from 'src/app/components/common/cabecera-de-pagina/cabecera-de-pagina.module';
import { NuevaGarantiaModule } from './nueva-garantia/nueva-garantia.module';

@NgModule({
  imports: [
    CabeceraBasicoModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    SpinnerModule,
    BotonUpModule,
    NuevaGarantiaModule
  ],
  declarations: [GarantiasComponent],
  exports: [
    GarantiasComponent
  ]
})
export class GarantiasModule { }
