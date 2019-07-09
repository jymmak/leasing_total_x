import { NgModule } from "@angular/core";
import { SpinnerModule } from "../../../components/common/spinner/spinner.module";
import { ClienteViewModule } from "./clientes/clientes.module";
import { CarteraModule } from "./asignacion-de-cartera/asignacion-de-cartera.module";
import { ProveedoresModule } from "./proveedores/proveedores.module";

@NgModule({
    declarations: [],
    imports: [
        // RouterModule.forRoot(ROUTES),
        SpinnerModule,
        ProveedoresModule,
        ClienteViewModule,
        CarteraModule
      
    ],
    exports: [
    ]
})

export class OrganizacionesModule { }
