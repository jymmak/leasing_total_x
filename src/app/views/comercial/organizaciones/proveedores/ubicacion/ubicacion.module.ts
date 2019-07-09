import { NgModule } from "@angular/core";
import { UbicacionProveedoresComponent } from "./ubicacion.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { FormularioSucursalesModule } from "../sucursales/formulario-sucursales/formulario-sucursales.module";
import { CabeceraBasicoModule } from "src/app/components/common/cabecera-de-pagina/cabecera-de-pagina.module";
import { SpinnerModule } from "src/app/components/common/spinner/spinner.module";
import { AgmCoreModule } from "@agm/core";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from "src/environments/environment";


@NgModule({
    declarations: [UbicacionProveedoresComponent],
    imports: [
        BrowserModule,
        FormsModule,
        FormularioSucursalesModule,
        CabeceraBasicoModule,
        SpinnerModule,
        NgbModule.forRoot(),
        AgmCoreModule.forRoot({
            //apiKey: 'AIzaSyBy4Xx0uzXTf9dnk9n0BqpvhNe0il7Gd4Q'
            apiKey: environment.apiKey
        })
      ],
    exports: [UbicacionProveedoresComponent]
})

export class UbicacionModule {
}
