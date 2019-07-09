import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CabeceraBasicoModule } from "src/app/components/common/cabecera-de-pagina/cabecera-de-pagina.module";
import { DirectivasModule } from "src/app/directivas/directivas.module";
import { CotizacionesComponent } from "./cotizaciones.component";
import { BusquedaAvanzadaModule } from "../busqueda-avanzada/busqueda-avanzada.module";

@NgModule({
    declarations: [CotizacionesComponent],
    imports: [
        BrowserModule,
        FormsModule,
        CabeceraBasicoModule,
        ReactiveFormsModule,
        BusquedaAvanzadaModule,
        DirectivasModule
    ],
    exports: [
    ]
})

export class CotizacionesModule { }
