import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SpinnerModule } from "../../../components/common/spinner/spinner.module";
import { CierreModule } from "./proyeccion-de-cierre/proyeccion-de-cierre.module";
import { ListaOperacionesModule } from "./operaciones/operaciones.module";
import { ExpedienteModule } from "./expediente/expediente.module";
import { ControlOperacionesModule } from "./control-operaciones/control-operaciones.module";
import { ControlExpedienteModule } from "./control-expediente/control-expediente.module";


@NgModule({
    declarations: [],
    imports: [

        SpinnerModule,
        CierreModule,
        ListaOperacionesModule,
        ControlOperacionesModule,
        ExpedienteModule,
        ControlExpedienteModule
        
        
    ],
    exports: [
    ]
})

export class OperacionesModule { }
