import { Routes } from "@angular/router";
import { basicComponent } from "../../components/common/layouts/basic.component";
import {AdmCotizacionComponent } from "./adm-cotizacion/adm-cotizacion.component";
import {ProductoComponent} from "./producto/producto.component";
import {SucursalComponent } from "./sucursal/sucursal.component"
import { DashboardComponent } from "./dashboard/dashboard.component";

export const ROUTES: Routes = [
    {
        path: '', component: basicComponent,
        children: [
            { path: 'legal/dashboard', component: DashboardComponent },
            { path: 'legal/adm-cotizacion', component: AdmCotizacionComponent },
            { path: 'legal/producto', component:ProductoComponent},
            { path: 'legal/sucursal', component: SucursalComponent },


        ]
    },
];
