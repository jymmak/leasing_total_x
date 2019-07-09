import { Routes } from "@angular/router";
import { basicComponent } from "../../components/common/layouts/basic.component";
import {AdmCotizacionComponent } from "./adm-cotizacion/adm-cotizacion.component";

import { DashboardComponent } from "./dashboard/dashboard.component";

export const ROUTES: Routes = [
    {
        path: '', component: basicComponent,
        children: [
            { path: 'sistemas/dashboard', component: DashboardComponent },
            { path: 'sistemas/adm-cotizacion', component: AdmCotizacionComponent },
  


        ]
    },
];
