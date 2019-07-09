import { environment } from '../environments/environment';
export const API_URL: any = environment.API_URL;
export const SERVICIO_SEGURIDAD = {
    login: API_URL + 'login',
    logOut: '',
};
export const SERVICIO_UTILES = {

};
export const SERVICIO_MENU = {
    menu: API_URL + 'usuario/menu/'

};
export const SERVICIO_MODULO_COMERCIAL = {
    util: {
        listarMoneda: API_URL + 'moneda',
        listarTipoOperacion: API_URL + 'tipo_operacion',
        listarBienNiveles: API_URL + 'bien/nivel',
        listarBienSubNiveles: API_URL + 'bien/sub_nivel',
        listarBienTipos: API_URL + 'bien/tipo',
        listarBienClases: API_URL + 'bien/clase',
        listarBienMarcas: API_URL + 'marca_autos',
        listarEmpresaTamanio: API_URL + 'empresa/tamanio',
        listarEmpresaRegimenes: API_URL + 'empresa/regimenes',
        listarEmpresaIncluidoLista: API_URL + 'incluido/lista',
        listarDepartamentos: API_URL + 'departamento',
        listarProvincias: API_URL + 'provincia/',
        listarDistritos: API_URL + 'distrito/',
        listarCanal: API_URL + 'canal',
        listarCampania: API_URL + 'campania',
        listarCanalContacto: API_URL + 'canal/contacto',
        listarTipoDocumento: API_URL + "cliente/biblioteca/tipoarchivo/web/lista"
    },
    dashboard: {

    },
    planComercial: {

    },
    operaciones: {

    },
    fuerzaVenta: {

    },
    organizaciones: {
        clientes: {
            consulta_ruc: API_URL + 'cliente/ruc/web/',
            listar: API_URL + "cliente/web/lista",
            nuevo: API_URL + "cliente/web",
            // detalle: API_URL + "cliente/web/",
            detalle: API_URL + "cliente/detalle/web/",
            editar: API_URL + "cliente/web/",
            // editar: "",
            eliminar: API_URL + "cliente/web/delete/"
        },
        cliente_contactos: {
            listar: API_URL + 'cliente/contacto/web/lista',
            nuevo: API_URL + 'cliente/contacto/web',
            editar: API_URL + 'cliente/contacto/web/',
            ver: API_URL + 'cliente/contacto/web/',
            detalle: API_URL + 'cliente/contacto/detalle/web/',
            eliminar: API_URL + 'cliente/contacto/web/'
        },
        cliente_bibliotecas: {
            listar: API_URL + 'cliente/biblioteca/web/lista',
            nuevo: API_URL + 'cliente/biblioteca/web'
        },
        proveedores: {
            listar: API_URL + "proveedor/web/lista",
            eliminar: API_URL + "proveedor/web/delete/",
            nuevo: API_URL + "proveedor/web",
            consultar: API_URL + "proveedor/web/"
        },

        proveedores_ubicacion: {
            listar: API_URL + "",
        },
        proveedores_sucursales: {
            listar: API_URL + "proveedor/sucursal/web/lista",
            eliminar: API_URL + "proveedor/sucursal/web/delete/",
            consultar: API_URL + "proveedor/sucursal/web/",
            nuevo: API_URL + "/proveedor/sucursal/web",
            editar: API_URL + "/proveedor/sucursal/web",
        },
        proveedores_contactos:{
            listar: API_URL + "/proveedor/sucursal/contacto/web/lista",
            eliminar: API_URL + "/proveedor/sucursal/contacto/web/delete/",
            consultar: API_URL + "proveedor/sucursal/contacto/web/",
            nuevo: API_URL + "proveedor/sucursal/contacto/web",
            editar: API_URL + "proveedor/sucursal/contacto/web",
        },
        asignacionCartera: {
            listarEjecutivos: API_URL + 'cartera/ejecutivo/web/lista'
        }
    }
};
