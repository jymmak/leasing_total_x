import { NgModule } from "@angular/core";
import { CabeceraBasicoModule } from "../../../../../components/common/cabecera-de-pagina/cabecera-de-pagina.module";
import { BrowserModule } from '@angular/platform-browser';
import { EditarEjecComponent } from "./editar-ejec.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { DirectivasModule } from "src/app/directivas/directivas.module";


@NgModule({
    declarations: [EditarEjecComponent],
    imports: [
        BrowserModule,
        CabeceraBasicoModule,
        ReactiveFormsModule,
        FormsModule,
        DirectivasModule
    ],
})

export class EditarEjecModule { }
