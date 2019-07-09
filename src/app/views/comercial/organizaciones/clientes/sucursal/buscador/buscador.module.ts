import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { SucursalbuscadorComponent } from "./buscador.component";
 
@NgModule({
    declarations: [SucursalbuscadorComponent],
    imports: [
        BrowserModule,
         
    ],
    exports: [
        SucursalbuscadorComponent
    ]
})

export class SucursalBuscadorModule { }
