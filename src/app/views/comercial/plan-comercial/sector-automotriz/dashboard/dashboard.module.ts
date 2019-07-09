import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DashboComponent } from "./dashboard.component";
import { CabeceraBasicoModule } from "src/app/components/common/cabecera-de-pagina/cabecera-de-pagina.module";
import { SpinnerModule } from "src/app/components/common/spinner/spinner.module";


declare var $: any;




@NgModule({
    declarations: [DashboComponent],
    imports: [
        CabeceraBasicoModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        SpinnerModule,
    
    ],
    exports: [DashboComponent]
})

export class DashboModule { }
