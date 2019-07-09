import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformacionComponent } from './informacion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DirectivasModule } from 'src/app/directivas/directivas.module';

@NgModule({
  exports: [InformacionComponent],
  imports: [
    FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        DirectivasModule
  ],
  declarations: [InformacionComponent]
})
export class InformacionModule { }
