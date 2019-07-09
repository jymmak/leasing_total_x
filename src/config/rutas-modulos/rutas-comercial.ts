let modulo = "comercial/";

let item = modulo + "dashboard";
export const RUTAS_COMERCIAL_DASHBOART = {
    dashboard: item
};

item = modulo + "organizaciones/";
export const RUTAS_COMERCIAL_ORGANIZACIONES = {
    organizaciones: item + "organizaciones",

    proveedores: {
        init: item + "proveedores",
        nuevo: item + "proveedores/nuevo",
        editar:  "editar",

        ubicacion:  "ubicacion",
        sucursales: {
            init:  "sucursales" ,
            nuevo: "sucursales/nuevo",
            editar: "sucursales/editar",
        },

        contacto: {
            init:  "contacto",
            nuevo:   "contacto/nuevo",
            editar:  "editar"


        }
       
    },
    clientes: {

        init: item + "clientes",
        nuevo: item + "clientes/nuevo",
        editar: "editar",
        detalle: "detalle",
        contacto: {
            init: "contactos",
            nuevo: "contactos/nuevo",
            detalle: "detalle",
            editar: "editar",
        },
        biblioteca: {
            init: "biblioteca",
        }
    }

};

item = modulo + "cotizaciones/";
export const RUTAS_COMERCIAL_COTIZACIONES = {
    cotizaciones: {
        init: item + "cotizaciones",
        nuevo: item + "cotizaciones/nuevo",
        editar: "editar",
        enviarEmail: 'enviar-email',
        verPdf: 'ver-pdf'
    },
    cotizacionExpres: item + "cotizacion-express",
};
item = modulo + "operaciones/";
export const RUTAS_COMERCIAL_OPERACIONES = {
    proyeccionCierre: item + "proyeccion-de-cierre",
    expediente: item + "expediente",
    expedientes: {
        trakingExpediente: item + "traking-expediente",
        detalle: "detalle",
        documentos: "documentos",
        pdf: "pdf",
        checklist: "checklist",
        detalleTwo: "detalleTwo"
    },

    informacion: item + "informacion",
    Operaciones: {
        init: item + "operaciones",
        detalles: "detalles"
    },
    controlExpediente: item + "control-expediente",
    controlOperaciones: item + "control-operaciones",
    controlOperacion: {
        init: item + "controlOperaciones",
        embudo: " embudo"
    }

};


item = modulo + "fuerza-de-ventas/";
export const RUTAS_COMERCIAL_FUERZASVENTAS = {
    orgranigrama: item + "organigrama",
    desempeño: item + "desempeno",
    ejecutivo: item + "ejecutivos",

    ejecutivos: {
        asignar: "asignar"
    },



};
item = modulo + "agenda";
export const RUTAS_COMERCIAL_AGENDA = {
    agenda: {
        init: item,
        lista: item + "/lista",
        agregarActividad: item + "/agregar-actividad",
        informe: "informe",
        registro: item + "/registro",
        editar: "editar"

    }
};


item = modulo + "mapa";
export const RUTAS_COMERCIAL_MAPA = {
    mapa: {
        init: item,
        ubicacion: "buscar-ubicacion",



    }
};


item = modulo + "administracion";
export const RUTAS_COMERCIAL_ADMINISTRACION = {
    administracion: {
        init: item,
        condiciones: {
            condicion: "condiciones",
            nuevo: "nuevo"
        },
        comision: {
            comisionesVenta: 'comisiones-de-ventas',
            nuevoComision: 'nuevo'
        },
        checklist:{
            checklist:'checklist',
            editar:'editar'
        },

        sucursales:{
            sucursales:'sucursales',
            nuevo:'nueva-sucursal'
        },
        ejecutivos:{
            ejecutivos : 'ejecutivos',
            editar: 'editar-ejec'
        }

    
    }
};

item = modulo + "crm";
export const RUTAS_COMERCIAL_CRM = {

    crm: {
        init: item,
        contactos: {
            contactos: "contactos",
            nuevo: "nuevo"
        },
        historial: 'historial-de-clientes',
        Reclamciones: {
            reclamaciones: 'reclamaciones',
            // nuevo: 'new-reclamaciones',
            nuevo: "reclamaciones/nuevo",
            pdf:  'pdf',
            responder:  'responder',
            reclamacionResponder: 'reclamacion'

        }

    }
};

item = modulo + "reportes";
export const RUTAS_COMERCIAL_REPORTES = {

    reportes: {
        init: item,
        ejecutar: "ejecutar"


    }
};
