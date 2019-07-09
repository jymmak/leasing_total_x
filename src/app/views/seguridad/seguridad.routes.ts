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
            { path: 'seguridad/dashboard', component: DashboardComponent },
            { path: 'seguridad/adm-cotizacion', component: AdmCotizacionComponent },
            { path: 'seguridad/producto', component:ProductoComponent},
            { path: 'seguridad/sucursal', component: SucursalComponent },


        ]
    },
];
