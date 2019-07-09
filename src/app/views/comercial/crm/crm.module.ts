import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SpinnerModule } from "../../../components/common/spinner/spinner.module";
import { ContactosModule } from "./contactos/contactos.module";
import { HistorialClientesModule } from "./historial-de-clientes/historial-de-clientes.module";
import { ReclamacionesModule } from "./reclamaciones/reclamaciones.module";



@NgModule({
    declarations: [],
    imports: [

        SpinnerModule,
        ContactosModule,
        HistorialClientesModule,
        ReclamacionesModule
    ],
    exports: [
    ]
})

export class CrmModule { }
