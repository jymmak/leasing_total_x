import { NgModule } from "@angular/core";
import { TabOperacionComponent } from "./tab-operacion.component";
import { FormsModule } from '@angular/forms';




@NgModule({
    declarations: [TabOperacionComponent],
    imports: [ 
        FormsModule,
    ],
    exports: [TabOperacionComponent]
})

export class TabOperacionModule { }
