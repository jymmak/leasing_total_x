import { Routes } from "@angular/router";
import { basicComponent } from "../../components/common/layouts/basic.component";
import {AdmCotizacionComponent } from "./adm-cotizacion/adm-cotizacion.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import {ProductoComponent} from "./producto/producto.component";
import {SucursalComponent } from "./sucursal/sucursal.component"


export const ROUTES: Routes = [
    {
        path: '', component: basicComponent,
        children: [
            { path: 'tesoreria/dashboard', component: DashboardComponent },
            { path: 'tesoreria/adm-cotizacion', component: AdmCotizacionComponent },
            { path: 'tesoreria/producto', component:ProductoComponent},
            { path: 'tesoreria/sucursal', component: SucursalComponent }


        ]
    },
];
