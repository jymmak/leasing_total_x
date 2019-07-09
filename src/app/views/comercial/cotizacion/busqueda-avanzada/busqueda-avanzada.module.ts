import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BusquedaAvanzadaComponent } from "./busqueda-avanzada.component";
import { DirectivasModule } from "src/app/directivas/directivas.module";

declare var $: any;




@NgModule({
    declarations: [BusquedaAvanzadaComponent],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        DirectivasModule
    ],
    exports: [BusquedaAvanzadaComponent],

})

export class BusquedaAvanzadaModule {

}
