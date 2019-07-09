import { NgModule } from "@angular/core";
import { TabContactoComponent } from "./tab-contacto.component";
import { FormsModule } from '@angular/forms';




@NgModule({
    declarations: [TabContactoComponent],
    imports: [
        FormsModule,

    ],
    exports: [TabContactoComponent]
})

export class TabContactoModule { }
