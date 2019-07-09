import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CabeceraBasicoModule } from "../../../../components/common/cabecera-de-pagina/cabecera-de-pagina.module";
import { BrowserModule } from '@angular/platform-browser';
import { AutomotrizComponent } from "./sector-automotriz.component";
import { SpinnerModule } from "src/app/components/common/spinner/spinner.module";
import { DashboModule } from "./dashboard/dashboard.module";






@NgModule({
    declarations: [AutomotrizComponent],
    imports: [
        BrowserModule,
        CabeceraBasicoModule,
        FormsModule,
        SpinnerModule,
        ReactiveFormsModule,
        DashboModule,
      
     
      
    ],
})

export class AutomotrizModule { }
