import { NgModule } from "@angular/core";
import { CabeceraBasicoModule } from "../../../../components/common/cabecera-de-pagina/cabecera-de-pagina.module";
import { BrowserModule } from '@angular/platform-browser';
import { DesempComponent } from "./desemp.component";
import { Ng2GoogleChartsModule } from 'ng2-google-charts';


@NgModule({
    declarations: [DesempComponent],
    imports: [
        BrowserModule,
        CabeceraBasicoModule,
        Ng2GoogleChartsModule,
    ],
})

export class DesempModule { }
