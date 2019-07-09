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
            { path: 'riesgos-admision/dashboard', component: DashboardComponent },
            { path: 'riesgos-admision/adm-cotizacion', component: AdmCotizacionComponent },
            { path: 'riesgos-admision/producto', component:ProductoComponent},
            { path: 'riesgos-admision/sucursal', component: SucursalComponent },


        ]
    },
];
