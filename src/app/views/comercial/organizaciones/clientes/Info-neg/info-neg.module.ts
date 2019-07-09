import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoNegComponent } from './info-neg.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerModule } from 'src/app/components/common/spinner/spinner.module';
import { RouterModule } from '@angular/router';
import { CabeceraBasicoModule } from 'src/app/components/common/cabecera-de-pagina/cabecera-de-pagina.module';
import { DirectivasModule } from 'src/app/directivas/directivas.module';
import { AntecedentesModule } from './antecedentes/antecedentes.module';
import { PrincipalesActivosModule } from './principales-activos/principales-activos.module';
import { RefComercialesModule } from './ref-comerciales/ref-comerciales.module';
import { SociosAccionistasModule } from './socios-accionistas/socios-accionistas.module';

@NgModule({
  declarations: [InfoNegComponent,  ],
  imports: [
    BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        SpinnerModule,
        CabeceraBasicoModule,
        RouterModule,
        DirectivasModule,
        AntecedentesModule,
        PrincipalesActivosModule,
        RefComercialesModule,
        SociosAccionistasModule,
        RefComercialesModule,
        PrincipalesActivosModule
  ],
})
export class InfoNegModule { }
