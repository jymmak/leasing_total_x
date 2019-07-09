import { NgModule } from "@angular/core";
import { CronogramaComponent } from "./cronograma.component";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CabeceraBasicoModule } from "src/app/components/common/cabecera-de-pagina/cabecera-de-pagina.module";
import { SpinnerModule } from "src/app/components/common/spinner/spinner.module";
import { BotonUpModule } from "src/app/components/common/boton-up/boton-up.module";

declare var $: any;




@NgModule({
    declarations: [CronogramaComponent],
    imports: [
        CabeceraBasicoModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        SpinnerModule,
        BotonUpModule
    ],
    exports: [CronogramaComponent],
})

export class CronogramaModule { }
