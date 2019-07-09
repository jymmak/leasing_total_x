import { NgModule } from "@angular/core";
import { TabBienesComponent } from "./tab-bienes.component";
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
@NgModule({
    declarations: [TabBienesComponent],
    imports: [
        FormsModule,
        BrowserModule,
        CommonModule,
    ],
    exports: [TabBienesComponent]
})

export class TabBienesModule {

}
