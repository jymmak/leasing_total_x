import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivasModule } from 'src/app/directivas/directivas.module';
import { FormsModule } from '@angular/forms';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  imports: [
    CommonModule,
    DirectivasModule,
    FormsModule,
    PdfViewerModule,

  ],
  declarations: []
})
export class NewReclamacionModule { }
