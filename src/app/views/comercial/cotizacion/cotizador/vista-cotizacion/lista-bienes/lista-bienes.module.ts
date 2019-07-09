import { NgModule } from "@angular/core";
import { ListaBienesComponent } from "./lista-bienes.component";
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";


@NgModule({
    declarations: [ListaBienesComponent],
    imports: [ 
        FormsModule,
        BrowserModule ,
        CommonModule
  
    ],
    exports: [ListaBienesComponent]
})

export class ListaBienesModule { }
