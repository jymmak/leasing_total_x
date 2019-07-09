import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { CabeceraBasicoModule } from 'src/app/components/common/cabecera-de-pagina/cabecera-de-pagina.module';
import { ResponderReclamacionComponent } from './responder-reclamacion/responder-reclamacion.component';

@NgModule({
  imports: [
    CommonModule,
    PdfViewerModule,
    CabeceraBasicoModule
  ],
  declarations: [ResponderReclamacionComponent]
})
export class PdfReclamacionesModule { }
