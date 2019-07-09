import { NgModule } from "@angular/core";
import { SucursalesComponent } from "./sucursales.component";
import { FormularioSucursalesModule } from "./formulario-sucursales/formulario-sucursales.module";

import { SpinnerModule } from "../../../../../components/common/spinner/spinner.module";
import { CabeceraBasicoModule } from "../../../../../components/common/cabecera-de-pagina/cabecera-de-pagina.module";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SucursalContactoComponent } from './sucursal-contacto/sucursal-contacto.component';
import { NuevoSucursalComponent } from "./sucursal-contacto/nuevo-sucursal/nuevo-sucursal.component";
import { DirectivasModule } from "src/app/directivas/directivas.module";
import { NuevoContactoComponent } from "./sucursal-contacto/nuevo-contacto/nuevo-contacto.component";
import { DetalleSucursalComponent } from "./sucursal-contacto/detalle-sucursal/detalle-sucursal.component";
import { NuevoSucursalModule } from "./sucursal-contacto/nuevo-sucursal/nuevo-sucursal.module";


@NgModule({
    declarations: [SucursalesComponent,
        SucursalContactoComponent,
        NuevoContactoComponent, DetalleSucursalComponent],
    imports: [
        BrowserModule,
        FormsModule,
        FormularioSucursalesModule,
        CabeceraBasicoModule,
        SpinnerModule,
        DirectivasModule,
        NuevoSucursalModule,
        ReactiveFormsModule

    ],
})

export class SucursalesModule { }
