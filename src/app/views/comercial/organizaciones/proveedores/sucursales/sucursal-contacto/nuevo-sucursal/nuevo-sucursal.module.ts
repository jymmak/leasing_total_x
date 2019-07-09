import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { DirectivasModule } from "src/app/directivas/directivas.module";
import { NuevoSucursalComponent } from "./nuevo-sucursal.component";
import { CabeceraBasicoModule } from "src/app/components/common/cabecera-de-pagina/cabecera-de-pagina.module";
import { RouterModule } from "@angular/router";
import { SpinnerModule } from "src/app/components/common/spinner/spinner.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AgmCoreModule } from "@agm/core";
import { environment } from "src/environments/environment";


@NgModule({
  exports: [NuevoSucursalComponent],
  imports: [
    FormsModule,
    BrowserModule,
    CabeceraBasicoModule,
    SpinnerModule,
    RouterModule,
    DirectivasModule,
    ReactiveFormsModule,
    AgmCoreModule

  ],
  declarations: [NuevoSucursalComponent]
})
export class NuevoSucursalModule { }
