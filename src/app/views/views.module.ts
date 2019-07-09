import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";


import { AdministracionModule } from "./administracion/administracion.module"
import { CobranzasModule } from "./cobranzas/cobranzas.module"
import { ComercialModule } from "./comercial/comercial.module";
import { ContabilidadModule } from "./contabilidad/contabilidad.module";
import { FinanzasModule } from "./finanzas/finanzas.module";
import { LegalModule } from "./legal/legal.module";
import { MantenimientoModule } from "./mantenimiento/mantenimiento.module";
import { MarketingModule } from "./marketing/marketing.module";
import { OperacionesModule } from "./operaciones/operaciones.module";
import { RecursosHumanosModule } from "./recursos-humanos/recursos-humanos.module";
import { RiesgosAdmisionModule } from "./riesgos-admision/riesgos-admision.module";
import { RiesgosControlModule } from "./riesgos-control/riesgos-control.module";
import { SeguridadModule } from "./seguridad/seguridad.module";
import { SistemasModule } from "./sistemas/sistemas.module";
import { TesoreriaModule } from "./tesoreria/tesoreria.module";




@NgModule({
    declarations: [],
    imports: [BrowserModule,
        AdministracionModule,
        CobranzasModule,
        ComercialModule,
        ContabilidadModule,
        FinanzasModule,
        LegalModule,
        MantenimientoModule,
        MarketingModule,
        OperacionesModule,
        RecursosHumanosModule,
        RiesgosAdmisionModule,
        RiesgosControlModule,
        SeguridadModule,
        SistemasModule,
        TesoreriaModule


    ],
})

export class ViewsModule { }
