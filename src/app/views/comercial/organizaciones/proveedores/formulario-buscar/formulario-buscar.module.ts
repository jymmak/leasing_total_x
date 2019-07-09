import { NgModule } from "@angular/core";
import { FormularioBuscarComponent } from "./formulario-buscar.component";
   
import { FormsModule } from '@angular/forms';
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations: [FormularioBuscarComponent],
    imports: [
        
        FormsModule,
        BrowserModule,
    ],
    exports: [FormularioBuscarComponent]
})

export class FormularioBuscarModule { }
