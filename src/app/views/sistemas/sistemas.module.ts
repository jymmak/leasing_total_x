import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ROUTES } from "./sistemas.routes";
import { AdmCotizacionModule } from "./adm-cotizacion/adm-cotizacion.module";

import { DashboardModule } from "./dashboard/dashboard.module";


@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(ROUTES),
        BrowserModule,
        AdmCotizacionModule,

        DashboardModule
    ],
})

export class SistemasModule { }
