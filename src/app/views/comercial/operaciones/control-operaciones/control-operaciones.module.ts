import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CabeceraBasicoModule } from "../../../../components/common/cabecera-de-pagina/cabecera-de-pagina.module";
import { ControlOperacionesComponent } from "./control-operaciones.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EmbudoComponent } from './embudo/embudo.component';
import { AngularHighchartsChartModule } from "angular-highcharts-chart";
import { ChartModule } from "angular-highcharts";
import { DirectivasModule } from "src/app/directivas/directivas.module";



@NgModule({
    declarations: [ControlOperacionesComponent, EmbudoComponent],
    imports: [
        BrowserModule,
        CabeceraBasicoModule,
        FormsModule,
        AngularHighchartsChartModule,
        ChartModule,
        DirectivasModule
        
    ],
    exports: [
    ]
})

export class ControlOperacionesModule { }
