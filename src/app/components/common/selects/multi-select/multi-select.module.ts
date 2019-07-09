import { NgModule } from '@angular/core';
import { MultiSelectComponent } from './multi-select.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MultiSelectComponent,
  ],
  exports: [
    MultiSelectComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
})
export class MultiSelectModule {}
