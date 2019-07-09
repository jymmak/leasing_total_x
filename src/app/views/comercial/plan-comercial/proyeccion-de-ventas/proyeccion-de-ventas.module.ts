import { NgModule } from "@angular/core";
import { CabeceraBasicoModule } from "../../../../components/common/cabecera-de-pagina/cabecera-de-pagina.module";
import { BrowserModule } from '@angular/platform-browser';
import { ProyeccionComponent } from "./proyeccion-de-ventas.component";

@NgModule({
    declarations: [ProyeccionComponent],
    imports: [
        BrowserModule,
        CabeceraBasicoModule,
    ],
})

export class ProyeccionModule { }
