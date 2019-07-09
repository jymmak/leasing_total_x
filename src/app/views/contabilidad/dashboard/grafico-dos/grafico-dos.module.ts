import { NgModule } from "@angular/core";
import { GraficoDosComponent } from "./grafico-dos.component";
 
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'angular-highcharts';



@NgModule({
    declarations: [GraficoDosComponent ],
    imports: [ 
        FormsModule,
        ChartModule,
    ],
    exports: [GraficoDosComponent ]
})

export class GraficoDosModule { }
