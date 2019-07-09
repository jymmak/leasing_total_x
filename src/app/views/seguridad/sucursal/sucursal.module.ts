import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {SucursalComponent} from "./sucursal.component";
import { CabeceraBasicoModule } from "src/app/components/common/cabecera-de-pagina/cabecera-de-pagina.module";


@NgModule({
    declarations: [SucursalComponent],
    imports: [BrowserModule,  
        CabeceraBasicoModule,
      ],
})

export class SucursalModule {}