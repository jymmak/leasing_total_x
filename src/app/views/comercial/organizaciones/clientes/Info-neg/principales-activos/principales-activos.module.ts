import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalesActivosComponent } from './principales-activos.component';
import { RouterModule } from '@angular/router';
import { CabeceraBasicoModule } from 'src/app/components/common/cabecera-de-pagina/cabecera-de-pagina.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CabeceraBasicoModule,
    RouterModule
  ],
  declarations: [PrincipalesActivosComponent]
})
export class PrincipalesActivosModule { }
