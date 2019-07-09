import { Routes } from "@angular/router";
import { basicComponent } from "../../components/common/layouts/basic.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

import { ReportesComponent } from "./reportes/reportes.component";
import { MapaComponent } from "./mapa/mapa.component";

// import { CotizacionComponent } from "./cotizacion/cotizacion.component";
import { CotizacionesComponent } from "./cotizacion/cotizaciones/cotizaciones.component";
import { CotizacionExpresComponent } from "./cotizacion/cotizacion-expres/cotizacion-expres.component";
import { CotizadorComponent } from "./cotizacion/cotizador/cotizador.component";
// import { BienesComponent } from "./cotizacion/cotizador/bienes/bienes.component";

import { ClienteViewComponent } from "./organizaciones/clientes/clientes.component";
import { CarteraComponent } from "./organizaciones/asignacion-de-cartera/asignacion-de-cartera.component";
import { ProveedoresComponent } from "./organizaciones/proveedores/proveedores.component";
import { SucursalesComponent } from "./organizaciones/proveedores/sucursales/sucursales.component";
import { ContactoComponent } from "./organizaciones/clientes/contacto/contacto.component";
import { FormularioContactoComponent } from "./organizaciones/clientes/contacto/formulario-contacto/formulario-contacto.component";
import { FormularioCliente1Component } from "./organizaciones/clientes/formulario-cliente/formulario-cliente1/formulario-cliente1.component";

import { BibliotecaAnexo1Component } from "./organizaciones/clientes/biblioteca-anexo/biblioteca-anexo1/biblioteca-anexo1.component";
import { BibliotecaAnexo2Component } from "./organizaciones/clientes/biblioteca-anexo/biblioteca-anexo2/biblioteca-anexo2.component";
import { InfoNegComponent } from "./organizaciones/clientes/Info-neg/info-neg.component";
import { AntecedentesComponent } from "./organizaciones/clientes/Info-neg/antecedentes/antecedentes.component";
import { PrincipalesActivosComponent } from "./organizaciones/clientes/Info-neg/principales-activos/principales-activos.component";
import { RefComercialesComponent } from "./organizaciones/clientes/Info-neg/ref-comerciales/ref-comerciales.component";
import { SociosAccionistasComponent } from "./organizaciones/clientes/Info-neg/socios-accionistas/socios-accionistas.component";
import { ClienteDetalleComponent } from "./organizaciones/clientes/detalle/detalle.component";
import { InfoComponent } from "./organizaciones/clientes/info/info/info.component";
import { UbicacionProveedoresComponent } from "./organizaciones/proveedores/ubicacion/ubicacion.component";
import { FormularioProveedoresComponent } from "./organizaciones/proveedores/formulario-proveedores/formulario-proveedores.component";
import { SucursalContactoComponent } from "./organizaciones/proveedores/sucursales/sucursal-contacto/sucursal-contacto.component";
import { NuevoSucursalComponent } from "./organizaciones/proveedores/sucursales/sucursal-contacto/nuevo-sucursal/nuevo-sucursal.component";
import { NuevoContactoComponent } from "./organizaciones/proveedores/sucursales/sucursal-contacto/nuevo-contacto/nuevo-contacto.component";
import { DetalleSucursalComponent } from "./organizaciones/proveedores/sucursales/sucursal-contacto/detalle-sucursal/detalle-sucursal.component";



import { AutomotrizComponent } from "./plan-comercial/sector-automotriz/sector-automotriz.component";
import { PlanComponent } from "./plan-comercial/crear-plan/crear-plan.component";
import { ProyeccionComponent } from "./plan-comercial/proyeccion-de-ventas/proyeccion-de-ventas.component";
import { SeguimientoComponent } from "./plan-comercial/seguimiento-plan/seguimiento-plan.component";
import { DashboComponent } from "./plan-comercial/sector-automotriz/dashboard/dashboard.component";


import { DesempComponent } from "./fuerza-ventas/desemp/desemp.component";
import { EjecutivosComponent } from "./fuerza-ventas/ejecutivos/ejecutivos.component";
// import { OrganigramaComponent } from "./fuerza-ventas/organigrama/organigrama.component";
import { OrganigramaComponent } from "./fuerza-ventas/organigrama/organigrama.component";

import { CierreComponent } from "./operaciones/proyeccion-de-cierre/proyeccion-de-cierre.component";
import { ListaOperacionesComponent } from "./operaciones/operaciones/operaciones.component";
import { ExpedienteComponent } from "./operaciones/expediente/expediente.component"
import { TrakingExpedienteComponent } from "./operaciones/expediente/traking-expediente/traking-expediente.component";
import { ExpedienteDetalleComponent } from "./operaciones/expediente/expediente-detalle/expediente-detalle.component";
import { DocumentosExpedientesComponent } from "./operaciones/expediente/documentos-expedientes/documentos-expedientes.component";




import { AgendaComponent } from "./agenda/agenda.component";
import { CondicionesComponent } from "./administracion/condiciones/condiciones.component";
// import { SegurosComponent } from "./administracion/seguros/seguros.component";
// import { TipoOperacionComponent } from "./administracion/tipo-operacion/tipo-operacion.component";
// import { BienesAdComponent } from "./administracion/bienes-administracion/bienes.component";
// import { SucursalesAdComponent } from "./administracion/sucursales-administracion/sucursales.component";



import { ComisionesVentaComponent } from "./administracion/comisiones-de-ventas/comisiones-de-ventas.component";
import { MantEjecutivosComponent } from "./administracion/ejecutivos/ejecutivos.component";
import { EditarEjecComponent } from "./administracion/ejecutivos/editar-ejec/editar-ejec.component";


import { ContactosComponent } from "./crm/contactos/contactos.component";
import { ReclamacionesComponent } from "./crm/reclamaciones/reclamaciones.component";
import { HistorialClientesComponent } from "./crm/historial-de-clientes/historial-de-clientes.component";
import { RUTAS_COMERCIAL_COTIZACIONES, RUTAS_COMERCIAL_OPERACIONES, RUTAS_COMERCIAL_ORGANIZACIONES, RUTAS_COMERCIAL_FUERZASVENTAS, RUTAS_COMERCIAL_AGENDA, RUTAS_COMERCIAL_MAPA, RUTAS_COMERCIAL_ADMINISTRACION, RUTAS_COMERCIAL_CRM, RUTAS_COMERCIAL_REPORTES } from "src/config/rutas-modulos/rutas-comercial";
import { PdfDocumentosExpComponent } from "./operaciones/expediente/documentos-expedientes/pdf-documentos-exp/pdf-documentos-exp.component";
import { ChecklistComponent } from "./operaciones/expediente/documentos-expedientes/checklist/checklist.component";
import { DetalleTwoComponent } from "./operaciones/expediente/expediente-detalle/detalle-two/detalle-two.component";
import { InformacionComponent } from "./operaciones/operaciones/informacion/informacion.component";
import { DetallesComponent } from "./operaciones/operaciones/detalles/detalles.component";
import { AsignarComponent } from "./fuerza-ventas/ejecutivos/asignar/asignar.component";
import { EnviarEmailComponent } from "./cotizacion/enviar-email/enviar-email.component";
import { VerPdfComponent } from "./cotizacion/ver-pdf/ver-pdf.componet";
import { ControlExpedienteComponent } from "./operaciones/control-expediente/control-expediente.component";
import { ControlOperacionesComponent } from "./operaciones/control-operaciones/control-operaciones.component";
import { EmbudoComponent } from "./operaciones/control-operaciones/embudo/embudo.component";
import { ListaComponent } from "./agenda/lista/lista.component";
import { AgregarActividadComponent } from "./agenda/agregar-actividad/agregar-actividad.component";
import { InformeComponent } from "./agenda/informe/informe.component";
import { BuscarUbicacionComponent } from "./mapa/buscar-ubicacion/buscar-ubicacion.component";
import { ContactoDetalleComponent } from "./organizaciones/clientes/contacto/detalle/detalle.component";
import { NuevoComponent } from "./administracion/condiciones/nuevo/nuevo.component";
import { NuevaComisionComponent } from "./administracion/comisiones-de-ventas/nueva-comision/nueva-comision.component";
import { NewContactoComponent } from "./crm/contactos/new-contacto/new-contacto.component";
import { NewReclamacionComponent } from "./crm/reclamaciones/new-reclamacion/new-reclamacion.component";
import { PdfReclamacionesComponent } from "./crm/reclamaciones/pdf-reclamaciones/pdf-reclamaciones.component";
import { RegistroComponent } from "./agenda/registro/registro.component";
import { EjecutarComponent } from "./reportes/ejecutar/ejecutar.component";
import { ResponderReclamacionComponent } from "./crm/reclamaciones/pdf-reclamaciones/responder-reclamacion/responder-reclamacion.component";
import { SucursalesAdComponent } from "./administracion/sucursales/sucursales.component";
import { CheckListComponent } from "./administracion/checklist/checklist.component";
import { NuevaSucursalComponent } from "./administracion/sucursales/nueva-sucursal/nueva-sucursal.component";


let expediente = RUTAS_COMERCIAL_OPERACIONES.expedientes;
let clientes = RUTAS_COMERCIAL_ORGANIZACIONES.clientes;
let proveedores = RUTAS_COMERCIAL_ORGANIZACIONES.proveedores;
let cotizaciones = RUTAS_COMERCIAL_COTIZACIONES.cotizaciones;
console.log(clientes.contacto.init);
export const ROUTES: Routes = [
    {
        path: '', component: basicComponent,
        children: [

            // Organizaciones

            { path: clientes.init, component: ClienteViewComponent },
            { path: clientes.init + '/:id/' + clientes.contacto.init, component: ContactoComponent },
            { path: clientes.init + '/:id/' + clientes.contacto.nuevo, component: FormularioContactoComponent },
            { path: clientes.init + '/:id/' + clientes.contacto.init + '/:id_contacto/' + clientes.contacto.editar, component: FormularioContactoComponent },
            { path: clientes.init + '/:id/' + clientes.contacto.init + '/:id_contacto/' + clientes.contacto.detalle, component: ContactoDetalleComponent },
            { path: RUTAS_COMERCIAL_ORGANIZACIONES.clientes.nuevo, component: FormularioCliente1Component },
            { path: clientes.init + '/:id/' + clientes.editar, component: FormularioCliente1Component },
            { path: clientes.init + '/:id/' + clientes.detalle, component: ClienteDetalleComponent },
            { path: 'comercial/organizaciones/clientes/biblioteca-anexo/biblioteca-anexo1', component: BibliotecaAnexo1Component },
            { path: clientes.init + '/:id/' + clientes.biblioteca.init, component: BibliotecaAnexo2Component },
            { path: 'comercial/organizaciones/asignacion-de-cartera', component: CarteraComponent },
            { path: 'comercial/organizaciones/clientes/Info-neg', component: InfoNegComponent },
            { path: 'comercial/organizaciones/clientes/Info-neg/antecedentes', component: AntecedentesComponent },
            { path: 'comercial/organizaciones/clientes/Info-neg/principales-activos', component: PrincipalesActivosComponent },
            { path: 'comercial/organizaciones/clientes/Info-neg/ref-comerciales', component: RefComercialesComponent },
            { path: 'comercial/organizaciones/clientes/Info-neg/socios-accionistas', component: SociosAccionistasComponent },
            { path: 'comercial/organizaciones/clientes/info', component: InfoComponent },

            { path: proveedores.init, component: ProveedoresComponent },
            { path: proveedores.nuevo, component: FormularioProveedoresComponent },
            { path: proveedores.init + '/:id/' + proveedores.editar, component: FormularioProveedoresComponent },
            { path: proveedores.init + '/:id/' + proveedores.sucursales.init, component: SucursalesComponent },
            { path: proveedores.init + '/:id/' + proveedores.sucursales.nuevo, component: NuevoSucursalComponent },
            { path: proveedores.init + '/:id/' + proveedores.sucursales.init  + '/:sucurrsal/' +    proveedores.sucursales.editar, component: NuevoSucursalComponent },
            { path: proveedores.init + '/:id/' + proveedores.sucursales.init + '/:sucurrsal/' + proveedores.contacto.init  , component: SucursalContactoComponent },
            { path: proveedores.init + '/:id/' + proveedores.sucursales.init + '/:sucurrsal/' + proveedores.ubicacion, component: UbicacionProveedoresComponent },
            { path: proveedores.init + '/:proveedores/' + proveedores.contacto.init  + '/:sucursal/' +  proveedores.contacto.nuevo, component: NuevoContactoComponent },
            { path: proveedores.init + '/:proveedores/' + proveedores.contacto.init + '/:sucursal/' + proveedores.contacto.init  + '/:contacto/' + proveedores.contacto.editar, component: NuevoContactoComponent },




            // Dashboard
            { path: 'comercial/dashboard', component: DashboardComponent },

            // Cotizacion
            { path: cotizaciones.init, component: CotizacionesComponent },
            { path: cotizaciones.nuevo, component: CotizadorComponent },
            { path: cotizaciones.init + '/:codigo/' + cotizaciones.editar, component: CotizadorComponent },
            { path: cotizaciones.init + '/:codigo/' + cotizaciones.enviarEmail, component: EnviarEmailComponent },
            { path: cotizaciones.init + '/:codigo/' + cotizaciones.verPdf, component: VerPdfComponent },
            { path: RUTAS_COMERCIAL_COTIZACIONES.cotizacionExpres, component: CotizacionExpresComponent },
            // { path: RUTAS_COMERCIAL_COTIZACIONES.consultaRuc, component: VistaConsultaRucComponent },
            // { path: RUTAS_COMERCIAL_COTIZACIONES.cotizador.bienes, component: BienesComponent },
            // { path: RUTAS_COMERCIAL_COTIZACIONES.cotizador.bienes_1, component: Bienes1Component },
            // { path: RUTAS_COMERCIAL_COTIZACIONES.cotizador.bienes_2, component: Bienes2Component },
            // { path: RUTAS_COMERCIAL_COTIZACIONES.cotizador.pdf, component: CotizadorPdfComponent },
            // { path: RUTAS_COMERCIAL_COTIZACIONES.cotizador.cronograma, component: CronogramaComponent },
            // { path: RUTAS_COMERCIAL_COTIZACIONES.cotizador.garantias.init, component: GarantiasComponent },
            // { path: RUTAS_COMERCIAL_COTIZACIONES.cotizador.garantias.nuevo, component: NuevaGarantiaComponent },


            // Plan Comercial
            { path: 'comercial/plan-comercial/sector-automotriz', component: AutomotrizComponent },
            { path: 'comercial/plan-comercial/sector-automotriz/dashboard', component: DashboComponent },
            { path: 'comercial/plan-comercial/crear-plan', component: PlanComponent },
            { path: 'comercial/plan-comercial/proyeccion-de-ventas', component: ProyeccionComponent },
            { path: 'comercial/plan-comercial/seguimiento-plan', component: SeguimientoComponent },

            // Fuerza de Ventas
            { path: RUTAS_COMERCIAL_FUERZASVENTAS.desempeño, component: DesempComponent },
            { path: RUTAS_COMERCIAL_FUERZASVENTAS.ejecutivo, component: EjecutivosComponent },
            { path: RUTAS_COMERCIAL_FUERZASVENTAS.orgranigrama, component: OrganigramaComponent },
            { path: RUTAS_COMERCIAL_FUERZASVENTAS.ejecutivo + '/' + RUTAS_COMERCIAL_FUERZASVENTAS.ejecutivos.asignar, component: AsignarComponent },

            // Operaciones
            { path: RUTAS_COMERCIAL_OPERACIONES.proyeccionCierre, component: CierreComponent },
            { path: RUTAS_COMERCIAL_OPERACIONES.Operaciones.init, component: ListaOperacionesComponent },
            { path: RUTAS_COMERCIAL_OPERACIONES.Operaciones.init + '/' + RUTAS_COMERCIAL_OPERACIONES.Operaciones.detalles, component: DetallesComponent },
            { path: RUTAS_COMERCIAL_OPERACIONES.informacion, component: InformacionComponent },
            { path: RUTAS_COMERCIAL_OPERACIONES.controlOperaciones, component: ControlOperacionesComponent },
            { path: RUTAS_COMERCIAL_OPERACIONES.controlOperaciones + '/' + RUTAS_COMERCIAL_OPERACIONES.controlOperacion.embudo, component: EmbudoComponent },
            { path: RUTAS_COMERCIAL_OPERACIONES.expediente, component: ExpedienteComponent },
            { path: RUTAS_COMERCIAL_OPERACIONES.expedientes.trakingExpediente, component: TrakingExpedienteComponent },
            { path: RUTAS_COMERCIAL_OPERACIONES.expediente + '/:codigo/' + RUTAS_COMERCIAL_OPERACIONES.expedientes.detalle, component: ExpedienteDetalleComponent },
            { path: RUTAS_COMERCIAL_OPERACIONES.expediente + '/:codigo/' + RUTAS_COMERCIAL_OPERACIONES.expedientes.documentos, component: DocumentosExpedientesComponent },
            { path: RUTAS_COMERCIAL_OPERACIONES.expediente + '/:codigo/' + expediente.documentos + '/' + expediente.pdf, component: PdfDocumentosExpComponent },
            { path: RUTAS_COMERCIAL_OPERACIONES.expediente + '/:codigo/' + expediente.checklist, component: ChecklistComponent },
            { path: RUTAS_COMERCIAL_OPERACIONES.expediente + '/:codigo/' + RUTAS_COMERCIAL_OPERACIONES.expedientes.detalleTwo, component: DetalleTwoComponent },
            { path: RUTAS_COMERCIAL_OPERACIONES.controlExpediente, component: ControlExpedienteComponent },

            // Adnministración

            { path: RUTAS_COMERCIAL_ADMINISTRACION.administracion.init + '/' + RUTAS_COMERCIAL_ADMINISTRACION.administracion.condiciones.condicion, component: CondicionesComponent },
            { path: RUTAS_COMERCIAL_ADMINISTRACION.administracion.init + '/' + RUTAS_COMERCIAL_ADMINISTRACION.administracion.condiciones.condicion + '/' + RUTAS_COMERCIAL_ADMINISTRACION.administracion.condiciones.nuevo, component: NuevoComponent },
            { path: RUTAS_COMERCIAL_ADMINISTRACION.administracion.init + '/' + RUTAS_COMERCIAL_ADMINISTRACION.administracion.comision.comisionesVenta, component: ComisionesVentaComponent },
            { path: RUTAS_COMERCIAL_ADMINISTRACION.administracion.init + '/' + RUTAS_COMERCIAL_ADMINISTRACION.administracion.comision.comisionesVenta + '/' + RUTAS_COMERCIAL_ADMINISTRACION.administracion.comision.nuevoComision, component: NuevaComisionComponent },
            { path: RUTAS_COMERCIAL_ADMINISTRACION.administracion.init + '/' + RUTAS_COMERCIAL_ADMINISTRACION.administracion.checklist.checklist, component: CheckListComponent },
            { path: RUTAS_COMERCIAL_ADMINISTRACION.administracion.init + '/' + RUTAS_COMERCIAL_ADMINISTRACION.administracion.sucursales.sucursales, component: SucursalesAdComponent },
            { path: RUTAS_COMERCIAL_ADMINISTRACION.administracion.init + '/' + RUTAS_COMERCIAL_ADMINISTRACION.administracion.sucursales.nuevo, component: NuevaSucursalComponent },
            { path: RUTAS_COMERCIAL_ADMINISTRACION.administracion.init + '/' + RUTAS_COMERCIAL_ADMINISTRACION.administracion.ejecutivos.ejecutivos, component: MantEjecutivosComponent },
            { path: RUTAS_COMERCIAL_ADMINISTRACION.administracion.init + '/' + RUTAS_COMERCIAL_ADMINISTRACION.administracion.ejecutivos.ejecutivos + '/' + RUTAS_COMERCIAL_ADMINISTRACION.administracion.ejecutivos.editar, component: EditarEjecComponent },
            // { path: 'comercial/administracion/ejecutivos', component: MantEjecutivosComponent },
            // { path: 'comercial/administracion/ejecutivos/editar-ejec', component: EditarEjecComponent },



            // Crm
            { path: RUTAS_COMERCIAL_CRM.crm.init + '/' + RUTAS_COMERCIAL_CRM.crm.contactos.contactos, component: ContactosComponent },
            { path: RUTAS_COMERCIAL_CRM.crm.init + '/' + RUTAS_COMERCIAL_CRM.crm.contactos.nuevo, component: NewContactoComponent },
            { path: RUTAS_COMERCIAL_CRM.crm.init + '/' + RUTAS_COMERCIAL_CRM.crm.historial, component: HistorialClientesComponent },
            { path: RUTAS_COMERCIAL_CRM.crm.init + '/' + RUTAS_COMERCIAL_CRM.crm.Reclamciones.reclamaciones, component: ReclamacionesComponent },
            { path: RUTAS_COMERCIAL_CRM.crm.init + '/' + RUTAS_COMERCIAL_CRM.crm.Reclamciones.nuevo, component: NewReclamacionComponent },
            { path: RUTAS_COMERCIAL_CRM.crm.init + '/:id/' + RUTAS_COMERCIAL_CRM.crm.Reclamciones.pdf, component: PdfReclamacionesComponent },
            { path: RUTAS_COMERCIAL_CRM.crm.init + '/:id/' + RUTAS_COMERCIAL_CRM.crm.Reclamciones.responder, component: ResponderReclamacionComponent },
            // { path: RUTAS_COMERCIAL_CRM.crm.init + '/' + RUTAS_COMERCIAL_CRM.crm.Reclamciones.reclamacionResponder, component: ResponderReclamacionComponent },


            // Reportes
            { path: RUTAS_COMERCIAL_REPORTES.reportes.init, component: ReportesComponent },
            { path: RUTAS_COMERCIAL_REPORTES.reportes.init + '/' + RUTAS_COMERCIAL_REPORTES.reportes.ejecutar, component: EjecutarComponent },

            //   { path: 'comercial/reportes', component: ReportesComponent },
            // Mapa
            { path: RUTAS_COMERCIAL_MAPA.mapa.init, component: MapaComponent },
            { path: RUTAS_COMERCIAL_MAPA.mapa.init + '/' + RUTAS_COMERCIAL_MAPA.mapa.ubicacion, component: BuscarUbicacionComponent },

            // Agenda
            { path: RUTAS_COMERCIAL_AGENDA.agenda.init, component: AgendaComponent },
            { path: RUTAS_COMERCIAL_AGENDA.agenda.lista, component: ListaComponent },
            { path: RUTAS_COMERCIAL_AGENDA.agenda.agregarActividad, component: AgregarActividadComponent },
            { path: RUTAS_COMERCIAL_AGENDA.agenda.lista + '/:id/' + RUTAS_COMERCIAL_AGENDA.agenda.informe, component: InformeComponent },
            { path: RUTAS_COMERCIAL_AGENDA.agenda.init + '/:event_id/' + RUTAS_COMERCIAL_AGENDA.agenda.editar, component: AgregarActividadComponent },
            { path: RUTAS_COMERCIAL_AGENDA.agenda.lista + '/:id/' + RUTAS_COMERCIAL_AGENDA.agenda.editar, component: AgregarActividadComponent },
            { path: RUTAS_COMERCIAL_AGENDA.agenda.registro, component: RegistroComponent },
        ]
    },
];