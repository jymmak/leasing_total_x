import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import { DashboardComponent } from "./dashboard.component";
import { CabeceraBasicoModule } from "../../../components/common/cabecera-de-pagina/cabecera-de-pagina.module";
 
import { FormsModule } from '@angular/forms';

import { GraficoUnoModule } from "./grafico-uno/grafico-uno.module";
import { GraficoDosModule } from "./grafico-dos/grafico-dos.module";
import { GraficoTresModule } from "./grafico-tres/grafico-tres.module";
import { BotonUpModule } from "src/app/components/common/boton-up/boton-up.module";
import { DirectivasModule } from "src/app/directivas/directivas.module";


@NgModule({
    declarations: [DashboardComponent],
    imports: [BrowserModule, 
        CabeceraBasicoModule,
        FormsModule, 
       DirectivasModule,
        GraficoUnoModule,
        GraficoDosModule,
        GraficoTresModule,
        BotonUpModule,
     
    ],
})

export class DashboardModule {}