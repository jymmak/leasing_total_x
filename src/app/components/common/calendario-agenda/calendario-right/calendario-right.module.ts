import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import { CalendarioRightComponent } from "./calendario-right.component";




@NgModule({
    declarations: [CalendarioRightComponent],
    imports     : [BrowserModule, RouterModule],
    exports: [CalendarioRightComponent]
})

export class CalendarioRightModule {}
