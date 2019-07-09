import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { VistaConsultaRucComponent } from "./consulta-ruc.component";
import { DirectivasModule } from "src/app/directivas/directivas.module";
@NgModule({
    declarations: [VistaConsultaRucComponent],
    imports: [
        FormsModule,
        BrowserModule,
        ReactiveFormsModule,
        DirectivasModule
    ],
    exports: [VistaConsultaRucComponent],
    providers: [
    ]
})

export class VistaConsultaRucModule { }
