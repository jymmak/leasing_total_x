import { NgModule } from "@angular/core";
import { CabeceraBasicoModule } from "../../../../components/common/cabecera-de-pagina/cabecera-de-pagina.module";
import { BrowserModule } from '@angular/platform-browser';
import { PlanComponent } from "./crear-plan.component";

@NgModule({
    declarations: [PlanComponent],
    imports: [
        BrowserModule,
        CabeceraBasicoModule,
    ],
})

export class PlanModule { }
