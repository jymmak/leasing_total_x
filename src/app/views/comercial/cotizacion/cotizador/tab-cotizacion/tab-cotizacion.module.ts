import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DirectivasModule } from "src/app/directivas/directivas.module";
import { MultiselectDropdownModule } from "angular-2-dropdown-multiselect";
import { MultiSelectModule } from "src/app/components/common/selects/multi-select/multi-select.module";
import { TabCotizacionComponent } from "./tab-cotizacion.component";


@NgModule({
    declarations: [TabCotizacionComponent],
    imports: [
        FormsModule,
        BrowserModule,
        ReactiveFormsModule,
        DirectivasModule,
        MultiselectDropdownModule,
        MultiSelectModule
    ],
    exports: [TabCotizacionComponent]
})

export class TabCotizacionModule { }
