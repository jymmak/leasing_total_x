import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SelectDefaulAsyncComponent } from './select-defaul-async.component';
import { DirectivasModule } from 'src/app/directivas/directivas.module';

@NgModule({
  declarations: [
    SelectDefaulAsyncComponent,
  ],
  exports: [
    SelectDefaulAsyncComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DirectivasModule
  ],
})
export class SelectDefaulAsyncModule {}
