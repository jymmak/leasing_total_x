import { NgModule } from "@angular/core";
import { GraficoTresComponent } from "./grafico-tres.component";

import { FormsModule } from '@angular/forms';
import { ChartModule } from 'angular-highcharts';



@NgModule({
    declarations: [GraficoTresComponent],
    imports: [
        FormsModule,
        ChartModule,
    ],
    exports: [GraficoTresComponent]
})

export class GraficoTresModule { }
