import { NgModule } from "@angular/core";
import { CabeceraBasicoModule } from "../../../../components/common/cabecera-de-pagina/cabecera-de-pagina.module";
import { BrowserModule } from '@angular/platform-browser';
import { OrganigramaComponent } from "./organigrama.component";

@NgModule({
    declarations: [OrganigramaComponent],
    imports: [
        BrowserModule,
        CabeceraBasicoModule,
    ],
})

export class OrganigramaModule { }
