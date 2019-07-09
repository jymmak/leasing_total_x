import { NgModule } from "@angular/core";
import { CabeceraBasicoModule } from "../../../../components/common/cabecera-de-pagina/cabecera-de-pagina.module";
import { SpinnerModule } from "../../../../components/common/spinner/spinner.module";
import { BrowserModule } from '@angular/platform-browser';
import { EjecutivosComponent } from "./ejecutivos.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AsignarComponent } from './asignar/asignar.component';


@NgModule({
    declarations: [EjecutivosComponent, AsignarComponent],
    imports: [
        BrowserModule,
        CabeceraBasicoModule,
        SpinnerModule,
        FormsModule,
        ReactiveFormsModule,
    ],
})

export class EjecutivosModule { }
