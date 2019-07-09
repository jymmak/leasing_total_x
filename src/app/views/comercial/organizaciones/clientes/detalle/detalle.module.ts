import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ClienteDetalleComponent } from "./detalle.component";
import { CabeceraBasicoModule } from "src/app/components/common/cabecera-de-pagina/cabecera-de-pagina.module";
@NgModule({
    declarations: [ClienteDetalleComponent],
    imports: [
        BrowserModule,
        RouterModule,
        CabeceraBasicoModule,
    ],
    exports: [
        ClienteDetalleComponent
    ]
})

export class DetalleClienteModule { }
