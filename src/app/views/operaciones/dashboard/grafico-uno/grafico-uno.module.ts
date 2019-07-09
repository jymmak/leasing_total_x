import { NgModule } from "@angular/core";
import { GraficoUnoComponent } from "./grafico-uno.component";
 
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'angular-highcharts';



@NgModule({
    declarations: [GraficoUnoComponent],
    imports: [ 
        FormsModule,
        ChartModule,
    ],
    exports: [GraficoUnoComponent]
})

export class GraficoUnoModule { }
