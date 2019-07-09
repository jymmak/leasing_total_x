import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CabeceraBasicoModule } from 'src/app/components/common/cabecera-de-pagina/cabecera-de-pagina.module';
import { InfoComponent } from './info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DirectivasModule } from 'src/app/directivas/directivas.module';
declare var $: any;

@NgModule({
  declarations: [InfoComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    DirectivasModule
  ],
  exports: [InfoComponent],
})
export class InfoModule { }
