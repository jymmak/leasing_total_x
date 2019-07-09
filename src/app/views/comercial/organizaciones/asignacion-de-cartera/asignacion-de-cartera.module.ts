import { NgModule } from "@angular/core";

import { CabeceraBasicoModule } from "../../../../components/common/cabecera-de-pagina/cabecera-de-pagina.module";
import { SpinnerModule } from "../../../../components/common/spinner/spinner.module";
import { BrowserModule } from '@angular/platform-browser';
import { CarteraComponent } from "./asignacion-de-cartera.component";
import { DirectivasModule } from "src/app/directivas/directivas.module";
import { FormsModule } from "@angular/forms";
import { AsignarClientesModule } from "./asignar-clientes/asignar-clientes.module";
import { AsignarProveedoresModule } from "./asignar-proveedores/asignar-proveedores.module";
import { CarteraEjecutivosModule } from "./cartera-ejecutivos/cartera-ejecutivos.module";



@NgModule({
    declarations: [CarteraComponent],
    imports: [
        BrowserModule,
        FormsModule,
        CabeceraBasicoModule,
        SpinnerModule,
        DirectivasModule,
        AsignarClientesModule,
        AsignarProveedoresModule,
        CarteraEjecutivosModule
   

    ],
})

export class CarteraModule { }
