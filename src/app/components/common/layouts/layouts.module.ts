import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {blankComponent} from "./blank.component";
import {basicComponent} from "./basic.component";
import { CabeceraBasicoModule } from "../cabecera-de-pagina/cabecera-de-pagina.module";
import {NavigationModule} from "../navigation/navigation.module";
import {TopnavbarModule} from "../topnavbar/topnavbar.module"
import { LayoutsModulosComponent} from "./layouts-modulos.component"







@NgModule({
    declarations: [blankComponent, basicComponent, LayoutsModulosComponent],
    imports     : [BrowserModule, 
        RouterModule, 
        NavigationModule, 
        TopnavbarModule,
        CabeceraBasicoModule,
      
      
    
     
       ],
    exports: [blankComponent, basicComponent, LayoutsModulosComponent]
})

export class LayoutsModule {}
