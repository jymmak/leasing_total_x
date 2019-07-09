import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ClientebuscadorComponent } from "./buscador.component";
   
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [ClientebuscadorComponent],
    imports: [
        BrowserModule,
       
        ReactiveFormsModule
    ],
    exports: [
        ClientebuscadorComponent
    ]
})

export class ClienteBuscadorModule { }
