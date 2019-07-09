import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';
import { AutomotrizModule } from "./sector-automotriz/sector-automotriz.module";
import { PlanModule } from "./crear-plan/crear-plan.module";
import { ProyeccionModule } from "./proyeccion-de-ventas/proyeccion-de-ventas.module";
import { SeguimientoModule } from "./seguimiento-plan/seguimiento-plan.module";



@NgModule({
    declarations: [],
    imports: [BrowserModule,
        FormsModule,
        AutomotrizModule,
        PlanModule,
        ProyeccionModule,
        SeguimientoModule

    ],
    exports: [
    ]
})

export class PlanComercialModule { }