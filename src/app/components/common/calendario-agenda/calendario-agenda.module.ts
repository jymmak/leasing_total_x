import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import { CalendarioAgendaComponent } from "./calendario-agenda.component";
import { CalendarioRightModule } from "./calendario-right/calendario-right.module";



@NgModule({
    declarations: [CalendarioAgendaComponent],
    imports     : [BrowserModule, 
        RouterModule,
        CalendarioRightModule
    ],
    exports: [CalendarioAgendaComponent]
})

export class CalendarioAgendaModule {}
