import { Routes } from "@angular/router";
import { basicComponent } from "../../../../components/common/layouts/basic.component";
import { ContactoComponent } from "./contacto/contacto.component";
import { SucursalComponent } from "./sucursal/sucursal.component";

export const ROUTES: Routes = [
    {
        path: '', component: basicComponent,
        children: [

            { path: 'comercial/organizaciones/clientes/:numero_documento/contacto', component: ContactoComponent },
            { path: 'comercial/organizaciones/clientes/:numero_documento/sucursal', component: SucursalComponent },


        ]
    },
];




