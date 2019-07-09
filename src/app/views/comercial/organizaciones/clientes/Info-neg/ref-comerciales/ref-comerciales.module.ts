import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RefComercialesComponent } from './ref-comerciales.component';
import { RouterModule } from '@angular/router';
import { CabeceraBasicoModule } from 'src/app/components/common/cabecera-de-pagina/cabecera-de-pagina.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CabeceraBasicoModule
  ],
  declarations: [RefComercialesComponent]
})
export class RefComercialesModule { }
