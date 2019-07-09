import { NgModule } from "@angular/core";
import { VistaCotizacionComponent } from "./vista-cotizacion.component";
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { ListaBienesModule } from "./lista-bienes/lista-bienes.module";
import { ResumenFinanciamientoModule } from "./resumen-financiamiento/resumen-financiamiento.module";
// import { FormularioEmailModule } from "../../formulario-email/formulario-email.module";
import { ResumenCronogramaModule } from "./lista-bienes/resumen-cronograma/resumen-cronograma.module";





@NgModule({
    declarations: [VistaCotizacionComponent],
    imports: [
       
        FormsModule,
        BrowserModule,
        CommonModule,
        ListaBienesModule,
        ResumenFinanciamientoModule,
        ResumenCronogramaModule,
        // FormularioEmailModule 


    ],
    exports: [VistaCotizacionComponent]
})

export class VistaCotizacionModule { }
