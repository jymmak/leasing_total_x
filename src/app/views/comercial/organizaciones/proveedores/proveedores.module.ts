import { NgModule } from "@angular/core";
import { ProveedoresComponent } from "./proveedores.component";
import { FormularioProveedoresModule } from "./formulario-proveedores/formulario-proveedores.module";
import { UbicacionModule } from "./ubicacion/ubicacion.module";
import { CabeceraBasicoModule } from "../../../../components/common/cabecera-de-pagina/cabecera-de-pagina.module";
import { SucursalesModule } from "./sucursales/sucursales.module";
import { SpinnerModule } from "../../../../components/common/spinner/spinner.module";
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { FormularioBuscarModule } from "./formulario-buscar/formulario-buscar.module";


@NgModule({
    declarations: [ProveedoresComponent],
    imports: [
        FormsModule,
        FormularioProveedoresModule,
        CabeceraBasicoModule,
        UbicacionModule,
        SucursalesModule,
        SpinnerModule,
        BrowserModule,
        ReactiveFormsModule,
        FormularioBuscarModule,

    ],
})

export class ProveedoresModule { }
