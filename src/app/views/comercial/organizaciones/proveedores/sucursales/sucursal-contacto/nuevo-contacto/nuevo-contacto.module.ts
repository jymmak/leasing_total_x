import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CabeceraBasicoModule } from 'src/app/components/common/cabecera-de-pagina/cabecera-de-pagina.module';
import { RouterModule } from '@angular/router';
import { SpinnerModule } from 'src/app/components/common/spinner/spinner.module';
import { DirectivasModule } from 'src/app/directivas/directivas.module';

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    CabeceraBasicoModule,
    SpinnerModule,
    RouterModule,
    DirectivasModule,
    ReactiveFormsModule

  ],
  declarations: [NuevoContactoModule]
})
export class NuevoContactoModule { }
