import { NgModule } from "@angular/core";
import { FormularioSucursalComponent } from "./formulario.component";
 
import { FormsModule } from '@angular/forms';
import { SpinnerModule } from "../../../../../../components/common/spinner/spinner.module";
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
        FormularioSucursalComponent
    ],
    imports: [
        BrowserModule,
       
        FormsModule,
        SpinnerModule
    ],
    exports: [
        FormularioSucursalComponent
    ]
})

export class FormularioSucursalModule {
}
