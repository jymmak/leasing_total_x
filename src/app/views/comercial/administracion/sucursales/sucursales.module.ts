import { NgModule } from "@angular/core";
import { CabeceraBasicoModule } from "../../../../components/common/cabecera-de-pagina/cabecera-de-pagina.module";
import { BrowserModule } from '@angular/platform-browser';
import { SucursalesAdComponent } from "./sucursales.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AgmCoreModule } from "@agm/core";
import { environment } from "src/environments/environment";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NuevaSucursalComponent } from './nueva-sucursal/nueva-sucursal.component';


@NgModule({
    declarations: [SucursalesAdComponent, NuevaSucursalComponent],
    imports: [
        BrowserModule,
        CabeceraBasicoModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
        AgmCoreModule.forRoot({
            apiKey: environment.apiKey
        })
    ],
})

export class SucursalesAdModule { }
