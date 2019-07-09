import { NgModule } from "@angular/core";
import { CabeceraBasicoModule } from "../../../../components/common/cabecera-de-pagina/cabecera-de-pagina.module";
import { BrowserModule } from '@angular/platform-browser';
import { ComisionesVentaComponent } from "./comisiones-de-ventas.component";
import { FormsModule } from "@angular/forms";
import { NuevaComisionComponent } from './nueva-comision/nueva-comision.component';

@NgModule({
    declarations: [ComisionesVentaComponent, NuevaComisionComponent, NuevaComisionComponent],
    imports: [
        BrowserModule,
        CabeceraBasicoModule,
        FormsModule
    ],
})

export class ComisionesVentaModule { }
