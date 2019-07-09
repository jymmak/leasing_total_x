import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CabeceraBasicoModule } from "../../../components/common/cabecera-de-pagina/cabecera-de-pagina.module";
import { FormsModule } from '@angular/forms';
import { CondicionesModule } from "./condiciones/condiciones.module";
import { ComisionesVentaModule } from "./comisiones-de-ventas/comisiones-de-ventas.module";
import { MantEjecutivosModule } from "./ejecutivos/ejecutivos.module";
import { SucursalesAdModule } from "./sucursales/sucursales.module";
import { CheckListModule } from "./checklist/checklist.module";



@NgModule({
    declarations: [],
    imports: [BrowserModule,
        CabeceraBasicoModule,
        FormsModule,
        CondicionesModule,
        ComisionesVentaModule,
        MantEjecutivosModule,
        SucursalesAdModule,
        CheckListModule,


    ],
    exports: [
    ]
})

export class AdministracionModule { }