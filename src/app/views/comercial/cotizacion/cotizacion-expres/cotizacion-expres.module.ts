import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CabeceraBasicoModule } from "src/app/components/common/cabecera-de-pagina/cabecera-de-pagina.module";
import { DirectivasModule } from "src/app/directivas/directivas.module";
import { BusquedaAvanzadaModule } from "../busqueda-avanzada/busqueda-avanzada.module";
// import { VistaConsultaRucModule } from "../consulta-ruc/consulta-ruc.module";
// import { FormularioEmailModule } from "../formulario-email/formulario-email.module";
import { SpinnerModule } from "src/app/components/common/spinner/spinner.module";
import { CotizacionExpresComponent } from "./cotizacion-expres.component";

@NgModule({
    declarations: [CotizacionExpresComponent],
    imports: [
        BrowserModule,
        FormsModule,
        CabeceraBasicoModule,
        SpinnerModule,
        // FormularioEmailModule,
        // VistaConsultaRucModule,
        ReactiveFormsModule,
        BusquedaAvanzadaModule,
        DirectivasModule
    ],
    exports: [
    ]
})

export class CotizacionExpresModule { }
