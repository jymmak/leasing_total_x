import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ROUTES } from "./comercial.routes";
import { OperacionesModule } from "./operaciones/operaciones.module";
import { DashboardModule } from "./dashboard/dashboard.module";
import { ReportesModule } from "./reportes/reportes.module";
import { AdministracionModule } from "./administracion/administracion.module";
import { CotizacionModule } from "./cotizacion/cotizacion.module";
import { PlanComercialModule } from "./plan-comercial/plan-comercial.module";
import { MapaModule } from "./mapa/mapa.module";
import { OrganizacionesModule } from "./organizaciones/organizaciones.module";
import { FuerzaVentasModule } from "./fuerza-ventas/fuerza-ventas.module";
import { AgendaModule } from "./agenda/agenda.module";
import { AuthGuard } from "../../../config/auth.guard";
import { CrmModule } from "./crm/crm.module";







@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(ROUTES),
        BrowserModule,
        OrganizacionesModule,
        OperacionesModule,
        DashboardModule,
        CrmModule,
        AgendaModule,
        PlanComercialModule,
        ReportesModule,
        AdministracionModule,
        CotizacionModule,
        MapaModule,
        FuerzaVentasModule,
    


    ],
    providers: [
        AuthGuard
    ]
})

export class ComercialModule { }
