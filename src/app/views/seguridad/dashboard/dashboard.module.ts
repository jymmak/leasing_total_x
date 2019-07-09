import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import { DashboardComponent } from "./dashboard.component";
import { FormsModule } from '@angular/forms';
import { GraficoUnoModule } from "./grafico-uno/grafico-uno.module";
import { GraficoDosModule } from "./grafico-dos/grafico-dos.module";
import { GraficoTresModule } from "./grafico-tres/grafico-tres.module";
import { CabeceraBasicoModule } from "src/app/components/common/cabecera-de-pagina/cabecera-de-pagina.module";

@NgModule({
    declarations: [DashboardComponent],
    imports: [BrowserModule, 
        CabeceraBasicoModule,
        FormsModule, 
       
        GraficoUnoModule,
        GraficoDosModule,
        GraficoTresModule
    ],
})

export class DashboardModule {}