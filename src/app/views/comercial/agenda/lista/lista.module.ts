import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ListaComponent } from "./lista.component";
import { CabeceraBasicoModule } from "src/app/components/common/cabecera-agenda/cabecera-agenda.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { DirectivasModule } from "src/app/directivas/directivas.module";
import { InformeModule } from "../informe/informe.module";



@NgModule({
    declarations: [ListaComponent],
    imports: [
        BrowserModule,
        RouterModule,
        CabeceraBasicoModule,
        ReactiveFormsModule,
        FormsModule,
        DirectivasModule,
        InformeModule
       
    ],
    exports: [
        ListaComponent
    ]
})

export class ListaModule { }
