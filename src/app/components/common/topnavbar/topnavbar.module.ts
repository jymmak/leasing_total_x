import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { TopnavbarComponent } from "./topnavbar.component";
import { RouterModule } from "@angular/router";
import { TopnavbarModulosComponent } from "./topnavbar-modulos.component";
import { FormsModule } from "@angular/forms";


@NgModule({
    declarations: [TopnavbarComponent, TopnavbarModulosComponent],
    imports: [BrowserModule,
        FormsModule,
        RouterModule,
    ],
    exports: [TopnavbarComponent, TopnavbarModulosComponent],
})

export class TopnavbarModule { }
