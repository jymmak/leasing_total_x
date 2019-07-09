import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import { CalendarioPrincipalComponent } from "./calendario-principal.component";
import { CalendarioRightModule } from "./calendario-right/calendario-right.module";



@NgModule({
    declarations: [CalendarioPrincipalComponent],
    imports     : [BrowserModule, 
        RouterModule,
        CalendarioRightModule
    ],
    exports: [CalendarioPrincipalComponent]
})

export class CalendarioPrincipalModule {}
