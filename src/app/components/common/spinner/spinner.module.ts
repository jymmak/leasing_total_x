import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { SpinnerBasicoComponent } from "./basico.component";

@NgModule({
    declarations: [SpinnerBasicoComponent],
    imports: [BrowserModule,
        RouterModule],
    exports: [SpinnerBasicoComponent]
})

export class SpinnerModule { }
