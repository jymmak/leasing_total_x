import { NgModule } from "@angular/core";
import { AsignarProveedoresComponent  } from "./asignar-proveedores.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { AgmCoreModule } from "@agm/core";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DirectivasModule } from "src/app/directivas/directivas.module";


@NgModule({
    declarations: [AsignarProveedoresComponent ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        CommonModule,
        DirectivasModule
   
    ],
    exports: [AsignarProveedoresComponent ]
})

export class AsignarProveedoresModule { }
