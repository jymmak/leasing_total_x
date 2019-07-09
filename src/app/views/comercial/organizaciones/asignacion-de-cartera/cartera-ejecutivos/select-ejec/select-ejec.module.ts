import { NgModule } from "@angular/core";
import { SelectEjecComponent  } from "./select-ejec.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { DirectivasModule } from "src/app/directivas/directivas.module";



@NgModule({
    declarations: [SelectEjecComponent ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        CommonModule,
        BrowserModule,
        DirectivasModule

    ],
    exports: [SelectEjecComponent ]
})

export class SelectEjecModule { }
