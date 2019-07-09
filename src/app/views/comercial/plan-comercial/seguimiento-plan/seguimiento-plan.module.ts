import { NgModule } from "@angular/core";
import { CabeceraBasicoModule } from "../../../../components/common/cabecera-de-pagina/cabecera-de-pagina.module";
import { BrowserModule } from '@angular/platform-browser';
import { SeguimientoComponent } from "./seguimiento-plan.component";

@NgModule({
    declarations: [SeguimientoComponent],
    imports: [
        BrowserModule,
        CabeceraBasicoModule,
    ],
})

export class SeguimientoModule { }
