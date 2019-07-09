import { NgModule } from "@angular/core";
import { ResumenFinanciamientoComponent  } from "./resumen-financiamiento.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";


@NgModule({
    declarations: [ResumenFinanciamientoComponent ],
    imports: [ 
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        CommonModule

    ],
    exports: [ResumenFinanciamientoComponent ]
})

export class ResumenFinanciamientoModule { }
