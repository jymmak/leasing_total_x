import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ROUTES } from "./contabilidad.routes";
import { AdmCotizacionModule } from "./adm-cotizacion/adm-cotizacion.module";
import { ProductoModule } from "./producto/producto.module";
import { SucursalModule } from "./sucursal/sucursal.module";
import { DashboardModule } from "./dashboard/dashboard.module";


@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(ROUTES),
        BrowserModule,
        AdmCotizacionModule,
        ProductoModule,
        SucursalModule,
        DashboardModule
    ],
})

export class ContabilidadModule { }
