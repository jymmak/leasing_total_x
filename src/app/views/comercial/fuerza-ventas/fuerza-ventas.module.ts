import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';
import { DesempModule } from "./desemp/desemp.module";
import { OrganigramaModule } from "./organigrama/organigrama.module";
import { EjecutivosModule } from "./ejecutivos/ejecutivos.module";



@NgModule({
    declarations: [],
    imports: [BrowserModule,
        FormsModule,
        DesempModule,
        OrganigramaModule,
        EjecutivosModule

    ],
    exports: [
    ]
})

export class FuerzaVentasModule { }