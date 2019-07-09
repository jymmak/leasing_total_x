import { NgModule } from "@angular/core";
import { AsignarClientesComponent  } from "./asignar-clientes.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { DirectivasModule } from "src/app/directivas/directivas.module";



@NgModule({
    declarations: [AsignarClientesComponent ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        CommonModule,
        DirectivasModule

    ],
    exports: [AsignarClientesComponent ]
})

export class AsignarClientesModule { }
