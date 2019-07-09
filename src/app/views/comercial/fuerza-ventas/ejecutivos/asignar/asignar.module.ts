import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsignarComponent } from './asignar.component';
import { CabeceraBasicoModule } from 'src/app/components/common/cabecera-de-pagina/cabecera-de-pagina.module';

@NgModule({
  imports: [
    CommonModule,
    CabeceraBasicoModule,
  ],
  declarations: [AsignarComponent]
})
export class AsignarModule { }
