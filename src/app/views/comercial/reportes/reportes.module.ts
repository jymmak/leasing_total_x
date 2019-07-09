import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CabeceraBasicoModule } from "../../../components/common/cabecera-de-pagina/cabecera-de-pagina.module";
 
import { FormsModule } from '@angular/forms';
import { ReportesComponent } from "./reportes.component";
import { DirectivasModule } from "src/app/directivas/directivas.module";
import { EjecutarComponent } from './ejecutar/ejecutar.component';
import { NgxDaterangepickerMd } from "ngx-daterangepicker-material";


@NgModule({
    declarations: [ReportesComponent, EjecutarComponent ],
    imports: [BrowserModule,
        CabeceraBasicoModule,
        FormsModule,
        DirectivasModule,
        NgxDaterangepickerMd.forRoot()


    
    ],
})

export class ReportesModule { }