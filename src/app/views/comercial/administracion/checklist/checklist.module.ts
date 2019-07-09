import { NgModule } from "@angular/core";
import { CabeceraBasicoModule } from "../../../../components/common/cabecera-de-pagina/cabecera-de-pagina.module";
import { BrowserModule } from '@angular/platform-browser';
import { CheckListComponent } from "./checklist.component";
import { SpinnerModule } from "src/app/components/common/spinner/spinner.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ElemtSwitchModule } from "./elemt-switch/elemt-switch.module";





@NgModule({
    declarations: [CheckListComponent ],
    imports: [
        BrowserModule,
        CabeceraBasicoModule,
        SpinnerModule,
        FormsModule,
        ReactiveFormsModule,
        ElemtSwitchModule
      
    ],
})

export class CheckListModule{ }
