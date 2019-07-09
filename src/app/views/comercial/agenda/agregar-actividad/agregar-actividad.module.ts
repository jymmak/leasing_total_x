import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AgregarActividadComponent } from "./agregar-actividad.component";
import { CabeceraBasicoModule } from "src/app/components/common/cabecera-agenda/cabecera-agenda.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RegistroModule } from "../registro/registro.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AgmCoreModule } from "@agm/core";
import { environment } from "src/environments/environment";
import { DirectivasModule } from "src/app/directivas/directivas.module";

@NgModule({
    declarations: [AgregarActividadComponent],
    imports: [
        BrowserModule,
        RouterModule,
        CabeceraBasicoModule,
        FormsModule,
        DirectivasModule,
        ReactiveFormsModule,
        CommonModule,
        RegistroModule,
        NgbModule.forRoot(),
        AgmCoreModule.forRoot({
            apiKey: environment.apiKey
        })

    ],
    exports: [
        AgregarActividadComponent
    ]
})

export class AgregarActividadModule { }
