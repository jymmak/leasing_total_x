import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ModulosComponent } from "./modulos.component";
import { TopnavbarModule } from "../../components/common/topnavbar/topnavbar.module"
import { CabeceraBasicoModule } from "../../components/common/cabecera-de-pagina/cabecera-de-pagina.module";

@NgModule({
    declarations: [ModulosComponent],
    imports: [BrowserModule,
        TopnavbarModule,
        CabeceraBasicoModule
    ],
})

export class ModulosModule { }