import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivasModule } from 'src/app/directivas/directivas.module';
import { SelectDefaulAsyncModule } from 'src/app/components/common/selects/select-defaul-async/select-defaul-async.module';
import { NuevoComponent } from './nuevo.component';
@NgModule({
  exports: [NuevoComponent],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    DirectivasModule,
    SelectDefaulAsyncModule

  ],
  declarations: [NuevoComponent]
})
export class NuevoModule { }
