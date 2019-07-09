import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AdmCotizacionComponent } from "./adm-cotizacion.component";
 
import { CabeceraBasicoModule } from "../../../components/common/cabecera-de-pagina/cabecera-de-pagina.module";



@NgModule({
    declarations: [AdmCotizacionComponent],
    imports: [
        BrowserModule, 
       
        CabeceraBasicoModule,
    ],
})

export class AdmCotizacionModule { }