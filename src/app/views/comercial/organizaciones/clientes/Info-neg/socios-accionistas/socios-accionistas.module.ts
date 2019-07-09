import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SociosAccionistasComponent } from './socios-accionistas.component';
import { RouterModule } from '@angular/router';
import { CabeceraBasicoModule } from 'src/app/components/common/cabecera-de-pagina/cabecera-de-pagina.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CabeceraBasicoModule
  ],
  declarations: [SociosAccionistasComponent]
})
export class SociosAccionistasModule { }
