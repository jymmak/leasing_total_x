import { NgModule } from "@angular/core";
import { TabFinanciamientoComponent } from "./tab-financiamiento.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CronogramaModule } from "./cronograma/cronograma.module";
import { RouterModule } from "@angular/router";
import { ROUTES } from "./tab-financiamiento.routes";
import { BotonUpModule } from "../../../../../components/common/boton-up/boton-up.module";
import { RangoNumeroDirective } from "../../../../../directivas/rango-numero.directiva";
import { EnteroPositivoDirective } from "../../../../../directivas/entero-positivo.directive";
import { DirectivasModule } from "../../../../../directivas/directivas.module";
// import { GarantiasComponent } from './garantias/garantias.component';
import { CabeceraBasicoModule } from "src/app/components/common/cabecera-de-pagina/cabecera-de-pagina.module";
import { SpinnerModule } from "src/app/components/common/spinner/spinner.module";
 import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
  import { AngularMultiSelectModule } from "angular2-multiselect-dropdown";
// import { NuevaGarantiaComponent } from "./garantias/nueva-garantia/nueva-garantia.component";
import { MultiSelectModule } from "src/app/components/common/selects/multi-select/multi-select.module";

declare var $: any;
@NgModule({
    declarations: [
        TabFinanciamientoComponent,
        // GarantiasComponent,
        // NuevaGarantiaComponent
    ],
    imports: [
        CabeceraBasicoModule,
        FormsModule,
        // RouterModule.forRoot(ROUTES),
        ReactiveFormsModule,
        BrowserModule,
        CronogramaModule,
        BotonUpModule,
        DirectivasModule,
        SpinnerModule,
         MultiselectDropdownModule,
         MultiSelectModule
    ],
    exports: [TabFinanciamientoComponent]
})

export class TabFinanciamientoModule { }
