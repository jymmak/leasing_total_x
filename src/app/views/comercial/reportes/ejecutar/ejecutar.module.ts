import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraBasicoModule } from 'src/app/components/common/cabecera-de-pagina/cabecera-de-pagina.module';
import { FormsModule } from '@angular/forms';
import { DirectivasModule } from 'src/app/directivas/directivas.module';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

@NgModule({
  imports: [
    CommonModule,
    CabeceraBasicoModule,
    FormsModule,
    DirectivasModule,
  ],
  declarations: []
})
export class EjecutarModule { }
