import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CotizadorModule } from "./cotizador/cotizador.module";
import { SpinnerModule } from "../../../components/common/spinner/spinner.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { BusquedaAvanzadaModule } from "./busqueda-avanzada/busqueda-avanzada.module";
import { CabeceraBasicoModule } from "src/app/components/common/cabecera-de-pagina/cabecera-de-pagina.module";
import { DirectivasModule } from "src/app/directivas/directivas.module";
import { EnviarEmailModule } from "./enviar-email/enviar-email.module";
import { VerPdfModule } from "./ver-pdf/ver-pdf.module";

@NgModule({
    declarations: [],
    imports: [
        BrowserModule,
        FormsModule,
        CabeceraBasicoModule,
        CotizadorModule,
        SpinnerModule,
        ReactiveFormsModule,
        BusquedaAvanzadaModule,
        DirectivasModule,
        EnviarEmailModule,
        VerPdfModule
    ],
    exports: [
    ]
})

export class CotizacionModule { }
