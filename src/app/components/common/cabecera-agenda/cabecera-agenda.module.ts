import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import { CabeceraBasicoComponent } from "./basico.component";
import { CalendarioAgendaModule } from "../calendario-agenda/calendario-agenda.module";



@NgModule({
    declarations: [CabeceraBasicoComponent],
    imports     : [
        BrowserModule,
         RouterModule,
         CalendarioAgendaModule
       
        ],
    exports: [CabeceraBasicoComponent]
})

export class CabeceraBasicoModule {}
