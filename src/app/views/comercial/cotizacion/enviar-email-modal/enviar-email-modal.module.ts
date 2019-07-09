import { NgModule, } from "@angular/core";
   
import { FormsModule } from '@angular/forms';
import { BrowserModule } from "@angular/platform-browser";
import { DirectivasModule } from "src/app/directivas/directivas.module";
import { EnviarEmailModalComponent } from "./enviar-email-modal.component";

@NgModule({
    declarations: [EnviarEmailModalComponent],
    imports: [
        
        FormsModule, 
        BrowserModule,
        DirectivasModule,
        
    ],
    exports: [EnviarEmailModalComponent]
})

export class EnviarEmailModalModule { }
