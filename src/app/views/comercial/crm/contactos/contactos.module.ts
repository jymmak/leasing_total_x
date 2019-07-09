import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CabeceraBasicoModule } from "../../../../components/common/cabecera-de-pagina/cabecera-de-pagina.module";
import { ContactosComponent } from "./contactos.component";
import { FormsModule } from "@angular/forms";
import { DirectivasModule } from "src/app/directivas/directivas.module";
import { NewContactoComponent } from './new-contacto/new-contacto.component';



@NgModule({
    declarations: [ContactosComponent, NewContactoComponent],
    imports: [
        BrowserModule,
        CabeceraBasicoModule,
        FormsModule,
        DirectivasModule
    ],
    exports: [
    ]
})

export class ContactosModule { }
