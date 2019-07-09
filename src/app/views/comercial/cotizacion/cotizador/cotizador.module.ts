import { NgModule } from "@angular/core";
import { CotizadorComponent } from "./cotizador.component";
import { CabeceraBasicoModule } from "../../../../components/common/cabecera-de-pagina/cabecera-de-pagina.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TabOperacionModule } from "./tab-operacion/tab-operacion.module";
import { TabGastosModule } from "./tab-gastos/tab-gastos.module";
import { TabFinanciamientoModule } from "./tab-financiamiento/tab-financiamiento.module";
import { VistaCotizacionModule } from './vista-cotizacion/vista-cotizacion.module';
// import { EnviarPdfModule } from "./cotizador-pdf/cotizador-pdf.module";
import { RouterModule } from "@angular/router";
import { CotizacionExpresModule } from "../cotizacion-expres/cotizacion-expres.module";
import { CotizacionesModule } from "../cotizaciones/cotizaciones.module";
import { PdfViewerModule } from 'ng2-pdf-viewer'; // <- import OrderModule
import { AngularMultiSelectModule } from "angular2-multiselect-dropdown";
import { EnviarEmailModalModule } from "../enviar-email-modal/enviar-email-modal.module";
import { GarantiasModule } from "./tab-financiamiento/garantias/garantias.module";
import { VistaConsultaRucModule } from "./consulta-ruc/consulta-ruc.module";
import { TabCotizacionModule } from "./tab-cotizacion/tab-cotizacion.module";
import { TabBienesModule } from "./tab-bienes/tab-bienes.module";
import { TabBienesNuevoModule } from "./tab-bienes/nuevo/nuevo.module";
import { EnviarPdfModule } from "./enviar-pdf/enviar-pdf.module";
import { CronogramaModule } from "./tab-financiamiento/cronograma/cronograma.module";
// import { EnviarPdfModule } from "./enviar-pdf/cotizador-pdf.module";

@NgModule({
    declarations: [CotizadorComponent],
    imports: [

        CabeceraBasicoModule,
        FormsModule,
        BrowserModule,
        ReactiveFormsModule,
        TabOperacionModule,
        TabGastosModule,
        TabFinanciamientoModule,
        TabCotizacionModule,
        VistaCotizacionModule,
        EnviarPdfModule,
        RouterModule,
        CotizacionExpresModule,
        CotizacionesModule,
        PdfViewerModule,
        AngularMultiSelectModule,
        EnviarEmailModalModule,
        GarantiasModule,
        VistaConsultaRucModule,
        TabBienesModule,
        TabBienesNuevoModule,
        CronogramaModule
    ],
})

export class CotizadorModule { }
