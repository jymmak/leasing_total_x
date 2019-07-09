import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivasModule } from "src/app/directivas/directivas.module";
import { TabBienesNuevoComponent } from "./nuevo.component";
import { SelectDefaulAsyncModule } from "src/app/components/common/selects/select-defaul-async/select-defaul-async.module";
@NgModule({
    declarations: [TabBienesNuevoComponent,
    ],
    exports: [
        TabBienesNuevoComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        DirectivasModule,
        SelectDefaulAsyncModule
    ],
})

export class TabBienesNuevoModule { }
