import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CabeceraBasicoModule } from "../../../components/common/cabecera-agenda/cabecera-agenda.module";
import { FormsModule } from '@angular/forms';
import { AgendaComponent } from "./agenda.component";
import { ListaModule } from "./lista/lista.module";
import { AgregarActividadModule } from "./agregar-actividad/agregar-actividad.module";


@NgModule({
    declarations: [AgendaComponent ],
    imports: [BrowserModule,
        CabeceraBasicoModule,
        FormsModule,
        ListaModule,
        AgregarActividadModule,
    
    
    ],
})

export class AgendaModule { }