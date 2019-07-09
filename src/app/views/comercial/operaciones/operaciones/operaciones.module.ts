import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CabeceraBasicoModule } from "../../../../components/common/cabecera-de-pagina/cabecera-de-pagina.module";
import { InfoModule } from "../../organizaciones/clientes/info/info/info.module";
import { InformacionModule } from "./informacion/informacion.module";
import { DetallesComponent } from './detalles/detalles.component';
import { ListaOperacionesComponent } from "./operaciones.component";


@NgModule({
    declarations: [ListaOperacionesComponent, DetallesComponent],
    imports: [
        BrowserModule,
        CabeceraBasicoModule,
        InformacionModule,
        InfoModule

    ],
    exports: [
    ]
})

export class ListaOperacionesModule { }
