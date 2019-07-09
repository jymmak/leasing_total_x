import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ROUTES } from "./tesoreria.routes";
import { AdmCotizacionModule } from "./adm-cotizacion/adm-cotizacion.module";
import { DashboardModule } from "./dashboard/dashboard.module";
import { ProductoModule } from "./producto/producto.module";
import { SucursalModule } from "./sucursal/sucursal.module";

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(ROUTES),
        BrowserModule,
        AdmCotizacionModule,
        DashboardModule,
        ProductoModule,
        SucursalModule,
    ],
})

export class TesoreriaModule { }
