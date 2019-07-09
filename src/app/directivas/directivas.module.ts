import { NgModule } from "@angular/core";
import { EnteroPositivoDirective } from "./entero-positivo.directive";
import { RangoNumeroDirective } from "./rango-numero.directiva";
import { Select2Directive } from "./select2.directives";
import { InfiniteScrollDirective } from "./infinite-scroll";
import { DatepickerDirective } from "./datepicker.directives";
import { Rangedatepicker } from "./rangedatepicker";
@NgModule({
    declarations: [
        EnteroPositivoDirective,
        RangoNumeroDirective,
        Select2Directive,
        InfiniteScrollDirective,
        DatepickerDirective,
        Rangedatepicker
    ],
    imports: [

    ],
    exports: [
        EnteroPositivoDirective,
        RangoNumeroDirective,
        Select2Directive,
        InfiniteScrollDirective,
        DatepickerDirective,
        Rangedatepicker

    ],
    providers: [
    ]
})

export class DirectivasModule { }
