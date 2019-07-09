import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CabeceraBasicoModule } from "../../../components/common/cabecera-de-pagina/cabecera-de-pagina.module";
import { FormsModule } from '@angular/forms';
import { MapaComponent } from "./mapa.component";
import { AgmCoreModule } from "@agm/core";
import { environment } from "src/environments/environment";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { DirectivasModule } from "src/app/directivas/directivas.module";
import { BuscarUbicacionComponent } from './buscar-ubicacion/buscar-ubicacion.component';

@NgModule({
    declarations: [MapaComponent, BuscarUbicacionComponent ],
    imports: [BrowserModule,
        CabeceraBasicoModule,
        FormsModule,
        DirectivasModule,
        NgbModule.forRoot(),
            AgmCoreModule.forRoot({
            apiKey: environment.apiKey
        })
    
    ],

    exports: [MapaComponent]

})

export class MapaModule { }