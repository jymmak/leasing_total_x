import { NgModule } from "@angular/core";
import { TabGastosComponent } from "./tab-gastos.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BotonUpModule } from "../../../../../components/common/boton-up/boton-up.module";
declare var $: any;



@NgModule({
    declarations: [TabGastosComponent],
    imports: [ 
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        BotonUpModule
    ],
    exports: [TabGastosComponent]
})

export class TabGastosModule { }
