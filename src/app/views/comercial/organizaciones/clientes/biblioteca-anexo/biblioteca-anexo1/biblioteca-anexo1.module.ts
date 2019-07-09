import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BibliotecaAnexo1Component } from './biblioteca-anexo1.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerModule } from 'src/app/components/common/spinner/spinner.module';
import { CabeceraBasicoModule } from 'src/app/components/common/cabecera-de-pagina/cabecera-de-pagina.module';
import { RouterModule } from '@angular/router';
import { DirectivasModule } from 'src/app/directivas/directivas.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SpinnerModule,
    CabeceraBasicoModule,
    RouterModule,
    DirectivasModule
  ],
  declarations: [ BibliotecaAnexo1Component]
})
export class BibliotecaAnexo1Module { }
