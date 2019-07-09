import { NgModule } from "@angular/core";
import { TabDatosComponent } from "./tab-datos.component";
  
import { FormsModule } from '@angular/forms';





@NgModule({
    declarations: [TabDatosComponent],
    imports: [ 
        FormsModule,
       
    ],
    exports: [TabDatosComponent]
})

export class TabDatosModule { }
