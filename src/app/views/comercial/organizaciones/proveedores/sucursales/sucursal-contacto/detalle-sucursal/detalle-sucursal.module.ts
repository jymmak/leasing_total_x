import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import {DetalleSucursalComponent } from "./detalle-sucursal.component";
import { CabeceraBasicoModule } from "src/app/components/common/cabecera-de-pagina/cabecera-de-pagina.module";
@NgModule({
    declarations: [DetalleSucursalComponent],
    imports: [
        BrowserModule,
        RouterModule,
        CabeceraBasicoModule,
    ],
    exports: [
        DetalleSucursalComponent
    ]
})

export class DetalleSucursalModule { }
