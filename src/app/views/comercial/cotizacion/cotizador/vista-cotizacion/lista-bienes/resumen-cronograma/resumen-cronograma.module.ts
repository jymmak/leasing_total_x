import { NgModule } from "@angular/core";
import { ResumenCronogramaComponent} from "./resumen-cronograma.component";
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";


@NgModule({
    declarations: [ResumenCronogramaComponent],
    imports: [ 
        FormsModule,
        BrowserModule,
        CommonModule,
       

    ],
    exports: [ResumenCronogramaComponent]
})

export class ResumenCronogramaModule { }
