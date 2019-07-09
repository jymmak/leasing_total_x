import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { RegistroComponent } from "./registro.component";
import { CabeceraBasicoModule } from "src/app/components/common/cabecera-agenda/cabecera-agenda.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DirectivasModule } from "src/app/directivas/directivas.module";
import { CommonModule } from "@angular/common";
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
    declarations: [RegistroComponent],
    imports: [
        BrowserModule,
        RouterModule,
        CabeceraBasicoModule,
        FormsModule,
        DirectivasModule,
        ReactiveFormsModule,
        CommonModule,
        SlickCarouselModule,
        NgbModule,
 
    
    ],
    exports: [
        RegistroComponent
    ]
})

export class RegistroModule { }
