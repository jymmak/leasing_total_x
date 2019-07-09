import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CabeceraBasicoModule } from "../../../../components/common/cabecera-de-pagina/cabecera-de-pagina.module";
import { HistorialClientesComponent } from "./historial-de-clientes.component";
import { FormsModule } from "@angular/forms";
import { DirectivasModule } from "src/app/directivas/directivas.module";


@NgModule({
    declarations: [HistorialClientesComponent],
    imports: [
        BrowserModule,
        CabeceraBasicoModule,
        FormsModule,
        DirectivasModule
    ],
    exports: [
    ]
})

export class HistorialClientesModule { }
