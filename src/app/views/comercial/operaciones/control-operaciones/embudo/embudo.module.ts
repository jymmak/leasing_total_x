import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraBasicoComponent } from 'src/app/components/common/cabecera-de-pagina/basico.component';
import { BrowserModule } from '@angular/platform-browser';
import { CabeceraBasicoModule } from 'src/app/components/common/cabecera-de-pagina/cabecera-de-pagina.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivasModule } from 'src/app/directivas/directivas.module';
import { AngularMultiSelect } from 'angular2-multiselect-dropdown';
import { AngularHighchartsChartModule } from 'angular-highcharts-chart';
import { ChartModule } from 'angular-highcharts';


@NgModule({
  imports: [
    BrowserModule,
    CabeceraBasicoModule,
    DirectivasModule,
    FormsModule,
    ReactiveFormsModule,
    AngularHighchartsChartModule,
    ChartModule
    
  ],
  declarations: []
})
export class EmbudoModule { }
