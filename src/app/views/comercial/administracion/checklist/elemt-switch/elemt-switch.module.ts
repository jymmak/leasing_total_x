import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { ElemtSwitchComponent } from "./elemt-switch.component";

import { RouterModule } from "@angular/router";


@NgModule({
    declarations: [ElemtSwitchComponent],
    imports: [
        FormsModule,
        BrowserModule,
        CommonModule,
        RouterModule,


    ],
    exports: [ElemtSwitchComponent]
})

export class ElemtSwitchModule {

}
