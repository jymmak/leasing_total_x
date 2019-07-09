import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerModule } from 'src/app/components/common/spinner/spinner.module';
import { CabeceraBasicoModule } from 'src/app/components/common/cabecera-de-pagina/cabecera-de-pagina.module';
import { RouterModule } from '@angular/router';
import { DirectivasModule } from 'src/app/directivas/directivas.module';
import { BibliotecaAnexo2Component } from './biblioteca-anexo2.component';
import { SelectDefaulAsyncModule } from 'src/app/components/common/selects/select-defaul-async/select-defaul-async.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SpinnerModule,
    CabeceraBasicoModule,
    RouterModule,
    DirectivasModule,
    SelectDefaulAsyncModule,

  ],
  declarations: [BibliotecaAnexo2Component]
})
export class BibliotecaAnexo2Module { }
