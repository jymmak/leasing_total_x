import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ClienteViewComponent } from "./clientes.component";
import { CabeceraBasicoModule } from "../../../../components/common/cabecera-de-pagina/cabecera-de-pagina.module";
import { SpinnerModule } from "../../../../components/common/spinner/spinner.module";
// import { DetalleModule } from "./detalle/detalle.module";
import { RouterModule } from "@angular/router";
import { ROUTES } from "./cliente.routes";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { SucursalModule } from "./sucursal/sucursal.module";
import { DetalleClienteModule } from "./detalle/detalle.module";
import { ClienteBuscadorModule } from "./buscador/buscador.module";
import { ContactoModule } from "./contacto/contacto.module";
import { FormularioCliente1Module } from "./formulario-cliente/formulario-cliente1/formulario-cliente1.module";
import { BibliotecaAnexo2Module } from "./biblioteca-anexo/biblioteca-anexo2/biblioteca-anexo2.module";
import { BibliotecaAnexo1Module } from "./biblioteca-anexo/biblioteca-anexo1/biblioteca-anexo1.module";
import { InfoNegModule } from "./Info-neg/info-neg.module";
import { InfoComponent } from './info/info/info.component';
import { InfoModule } from "./info/info/info.module";
import { BusquedaAvanzadaModule } from "../../cotizacion/busqueda-avanzada/busqueda-avanzada.module";
import { DirectivasModule } from "src/app/directivas/directivas.module";
import { TruncatePipe } from "src/app/pipes/truncate.pepe";

@NgModule({
    declarations: [
        ClienteViewComponent,
        TruncatePipe
    ],
    imports: [
        BrowserModule,

        RouterModule.forRoot(ROUTES),
        ReactiveFormsModule,
        FormularioCliente1Module,
        BibliotecaAnexo1Module,
        BibliotecaAnexo2Module,
        CabeceraBasicoModule,
        InfoNegModule,
        SpinnerModule,
        // DetalleModule,
        ContactoModule,
        SucursalModule,
        DetalleClienteModule,
        ClienteBuscadorModule,
        FormsModule,
        InfoModule,
        BusquedaAvanzadaModule,
        DirectivasModule
    ],
    exports: [
    ]
})

export class ClienteViewModule { }
