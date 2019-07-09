import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ContactobuscadorComponent } from "./buscador.component";
 
@NgModule({
    declarations: [ContactobuscadorComponent],
    imports: [
        BrowserModule,
         
    ],
    exports: [
        ContactobuscadorComponent
    ]
})

export class ContactoBuscadorModule { }
