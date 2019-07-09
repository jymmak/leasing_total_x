import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import { CabeceraBasicoComponent } from "./basico.component";
import { CalendarioPrincipalModule } from "../calendario-principal/calendario-principal.module";


@NgModule({
    declarations: [CabeceraBasicoComponent],
    imports     : [
        BrowserModule,
         RouterModule,
         CalendarioPrincipalModule
       
        ],
    exports: [CabeceraBasicoComponent]
})

export class CabeceraBasicoModule {}
