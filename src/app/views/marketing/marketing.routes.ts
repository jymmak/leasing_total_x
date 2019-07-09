import { Routes } from "@angular/router";
import { basicComponent } from "../../components/common/layouts/basic.component";
import { AdmCotizacionComponent } from "./adm-cotizacion/adm-cotizacion.component";
import { ProductoComponent } from "./producto/producto.component";
import { SucursalComponent } from "./sucursal/sucursal.component"
import { DashboardComponent } from "./dashboard/dashboard.component";



export const ROUTES: Routes = [
    {
        path: '', component: basicComponent,
        children: [
            { path: 'marketing/dashboard', component: DashboardComponent },
            { path: 'marketing/adm-cotizacion', component: AdmCotizacionComponent },
            { path: 'marketing/producto', component: ProductoComponent },
            { path: 'marketing/sucursal', component: SucursalComponent },


        ]
    },
];
