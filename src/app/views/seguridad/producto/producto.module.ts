import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ProductoComponent } from "./producto.component";
import { CabeceraBasicoModule } from "src/app/components/common/cabecera-de-pagina/cabecera-de-pagina.module";


@NgModule({
    declarations: [ProductoComponent],
    imports: [
        BrowserModule, 
       
        CabeceraBasicoModule,
    ],
})

export class ProductoModule { }