import { NgModule } from "@angular/core";
 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { WINDOW_PROVIDERS } from "./windows.sercive";
import { BotonUpComponent } from "./boton-up.component";
declare var $: any;




@NgModule({
    declarations: [BotonUpComponent],
    imports: [ 
     
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
       
    ],
    exports: [BotonUpComponent],
    providers: [WINDOW_PROVIDERS]
})

export class BotonUpModule { }
