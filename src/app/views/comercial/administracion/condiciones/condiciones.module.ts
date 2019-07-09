import { NgModule } from "@angular/core";
import { CabeceraBasicoModule } from "../../../../components/common/cabecera-de-pagina/cabecera-de-pagina.module";
import { BrowserModule } from '@angular/platform-browser';
import { CondicionesComponent } from "./condiciones.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DirectivasModule } from "src/app/directivas/directivas.module";
import { NuevoComponent } from './nuevo/nuevo.component';

@NgModule({
    declarations: [CondicionesComponent, NuevoComponent],
    imports: [
        BrowserModule,
        CabeceraBasicoModule,
        FormsModule,
        DirectivasModule,
        ReactiveFormsModule
    ],
})

export class CondicionesModule { }
