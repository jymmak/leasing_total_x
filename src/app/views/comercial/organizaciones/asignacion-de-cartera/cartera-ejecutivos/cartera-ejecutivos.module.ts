import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { AgmCoreModule } from "@agm/core";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarteraEjecutivosComponent } from "./cartera-ejecutivos.component";
import { DirectivasModule } from "src/app/directivas/directivas.module";
import { SelectEjecModule } from "./select-ejec/select-ejec.module";


@NgModule({
    declarations: [CarteraEjecutivosComponent ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        CommonModule,
        DirectivasModule,
        SelectEjecModule
   
   
    ],
    exports: [CarteraEjecutivosComponent ]
})

export class CarteraEjecutivosModule { }
