import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SERVICIO_MENU } from '../../../config/services';
@Injectable()
export class ModulosService {

  constructor(private _http?: HttpClient) { }

  menu() {
    let data = [
      {
        id: 1,
        modulo: 'Comercial',
        url: 'comercial',
        menu: [
          {
            nombre: 'DASHBOARD',
            url: 'dashboard',
            icono: 'mdi mdi-home-outline',
            sub_menu: [],
            "position": false

          },
          {
            nombre: 'PLAN COMERCIAL',
            url: 'plan-comercial',
            icono: 'mdi mdi-content-copy',
            sub_menu: [
              {
                nombre: 'Sector Automotriz',
                url: 'sector-automotriz',
              },
              {
                nombre: 'Proyección de Ventas',
                url: 'proyeccion-de-ventas',
              },
              {
                nombre: 'Crear Plan',
                url: 'crear-plan',
              },
              {
                nombre: 'Seguimiento de PC',
                url: 'seguimiento-plan',
              },
            ],
            "position": false

          },
          {
            nombre: 'OPERACIONES',
            url: 'operaciones',
            icono: 'mdi mdi-settings-outline',
            sub_menu: [
              {
                nombre: 'Operaciones',
                url: 'operaciones',
              },
              {
                nombre: 'Expedientes',
                url: 'expediente',
              },
              {
                nombre: 'Control Expedientes',
                url: 'control-expediente',
              },
              {
                nombre: ' Control de Operaciones',
                url: 'control-operaciones',
              },
              {
                nombre: 'Proyeccion de cierre',
                url: 'proyeccion-de-cierre',
              },
            ],
            "position": false
          },
          {
            nombre: 'ORGANIZACIONES',
            url: 'organizaciones',
            icono: 'mdi mdi-account-outline',
            sub_menu: [
              {
                nombre: 'Clientes',
                url: 'clientes',
              },
              {
                nombre: 'Proveedores',
                url: 'proveedores',
              },
              {
                nombre: 'Asignación de cartera',
                url: 'asignacion-de-cartera',
              },

            ],
            "position": false
          },
          {
            nombre: 'FUERZA DE VENTAS',
            url: 'fuerza-ventas',
            icono: 'mdi mdi-briefcase-outline',
            sub_menu: [
              {
                nombre: 'Organigrama',
                url: 'organigrama',
              },
              {
                nombre: 'Ejecutivos',
                url: 'ejecutivos',
              },
              {
                nombre: 'Desempeño',
                url: 'desemp',
              },

            ],
            "position": false
          },
          {
            nombre: 'COTIZACIONES',
            url: 'cotizacion',
            icono: 'mdi mdi-cash-usd',
            sub_menu: [
              {
                nombre: 'Cotizaciones',
                url: 'cotizaciones',
              },
              {
                nombre: 'Cotizacion Express',
                url: 'cotizacion-expres',
              },
            ],
            "position": false
          },
          {
            nombre: 'AGENDA',
            url: 'agenda',
            icono: 'mdi mdi-calendar-range',
            sub_menu: [

            ],
            "position": false
          },
          {
            nombre: 'MAPA',
            url: 'mapa',
            icono: 'mdi mdi-web',
            sub_menu: [
            ],
            "position": false
          },
          {
            nombre: 'CRM',
            url: 'crm',
            icono: 'mdi mdi-tag-outline',
            sub_menu: [
              {
                nombre: 'Contactos',
                url: 'contactos',
              },
              {
                nombre: 'Historial de Clientes',
                url: 'historial-de-clientes',
              },
              {
                nombre: 'Reclamaciones',
                url: 'reclamaciones',
              },
            ],
            "position": false
          },
          {
            nombre: 'REPORTES',
            url: 'reportes',
            icono: 'mdi mdi-file-document-box-outline',
            sub_menu: [],
            "position": false
          },
          {
            nombre: 'ADMINISTRACIÓN',
            url: 'administracion',
            icono: 'mdi mdi-puzzle-outline',
            sub_menu: [
              {
                nombre: 'Condiciones',
                url: 'condiciones',
              },
              {
                nombre: 'Comisiones de venta',
                url: 'comisiones-de-ventas',
              },
              {
                nombre: 'Ejecutivos',
                url: 'ejecutivos',
              },
              {
                nombre: 'Sucursales',
                url: 'sucursales',
              },
              {
                nombre: 'Checklist Comercial',
                url: 'checklist',
              },
            



            ],
            "position": false
          },


        ]

      },
      {
        id: 2,
        modulo: 'Marketing',
        url: 'marketing',
        menu: [
          {
            nombre: 'Dashboard',
            url: 'dashboard',
            icono: 'mdi mdi-home-outline',
            sub_menu: [],
            "position": false
          },
          {
            nombre: 'Campañas',
            url: 'publicidad',
            icono: 'mdi mdi-home-outline',
            sub_menu: [
              {
                nombre: 'Crear Campaña',
                url: 'crear-publicidad',
              },
              {
                nombre: 'Crear Actividades',
                url: 'crear-actividades',
              },
              {
                nombre: 'Ingresos y Gastos',
                url: 'ingresos-gastos',
              },
              {
                nombre: 'Tracking',
                url: 'tracking',
              },
              {
                nombre: 'Reporte',
                url: 'reporte',
              },

            ],
            "position": false

          },
          // {
          //   nombre: 'producto',
          //   url: 'producto',
          //   icono: 'fa fa-cubes',
          //   sub_menu: []
          // },
          // {
          //   nombre: 'sucursal',
          //   url: 'sucursal',
          //   icono: 'fas fa-building',
          //   sub_menu: []
          // },
        ]

      },
      {
        id: 3,
        modulo: 'Operaciones',
        url: 'operaciones',
        logo: 'O',
        menu: [
          {
            nombre: 'Dashboard',
            url: 'dashboard',
            icono: 'mdi mdi-home-outline',
            sub_menu: [],
            "position": false
          },
          {
            nombre: 'ADM.Cotización',
            url: 'adm-cotizacion',
            icono: 'mdi mdi-home-outline',
            sub_menu: [],
            "position": false
          },
          {
            nombre: 'producto',
            url: 'producto',
            icono: 'mdi mdi-home-outline',
            sub_menu: [],
            "position": false
          },
          {
            nombre: 'sucursal',
            url: 'sucursal',
            icono: 'mdi mdi-home-outline',
            sub_menu: [],
            "position": false
          },
        ]
      },
      {
        id: 4,
        modulo: 'Riesgos Admisión',
        url: 'riesgos-admision',
        logo: 'RA',
        menu: [
          {
            nombre: 'Dashboard',
            url: 'dashboard',
            icono: 'mdi mdi-home-outline',
            sub_menu: [],
            "position": false
          },
          {
            nombre: 'ADM.Cotización',
            url: 'adm-cotizacion',
            icono: 'mdi mdi-home-outline',
            sub_menu: [],
            "position": false
          },
          {
            nombre: 'producto',
            url: 'producto',
            icono: 'mdi mdi-home-outline',
            sub_menu: [],
            "position": false
          },
          {
            nombre: 'sucursal',
            url: 'sucursal',
            icono: 'mdi mdi-home-outline',
            sub_menu: [],
            "position": false
          },
        ]
      },
      {
        id: 5,
        modulo: 'Riesgos Control',
        url: 'riesgos-control',
        logo: 'RC',
        menu: [
          {
            nombre: 'Dashboard',
            url: 'dashboard',
            icono: 'mdi mdi-home-outline',
            sub_menu: [],
            "position": false
          },
          {
            nombre: 'ADM.Cotización',
            url: 'adm-cotizacion',
            icono: 'mdi mdi-home-outline',
            sub_menu: [],
            "position": false
          },
          {
            nombre: 'producto',
            url: 'producto',
            icono: 'mdi mdi-home-outline',
            sub_menu: [],
            "position": false
          },
          {
            nombre: 'sucursal',
            url: 'sucursal',
            icono: 'mdi mdi-home-outline',
            sub_menu: [],
            "position": false
          },
        ]
      },
      {
        id: 6,
        modulo: 'Legal',
        url: 'legal',
        logo: 'L',
        menu: [
          {
            nombre: 'Dashboard',
            url: 'dashboard',
            icono: 'mdi mdi-home-outline',
            sub_menu: [],
            "position": false
          },
          {
            nombre: 'ADM.Cotización',
            url: 'adm-cotizacion',
            icono: 'mdi mdi-home-outline',
            sub_menu: [],
            "position": false
          },
          {
            nombre: 'producto',
            url: 'producto',
            icono: 'mdi mdi-home-outline',
            sub_menu: [],
            "position": false
          },
          {
            nombre: 'sucursal',
            url: 'sucursal',
            icono: 'mdi mdi-home-outline',
            sub_menu: [],
            "position": false
          },
        ]
      },
      {
        id: 7,
        modulo: 'Cobranzas',
        url: 'cobranzas',
        logo: 'CO',
        menu: [
          {
            nombre: 'Dashboard',
            url: 'dashboard',
            icono: 'mdi mdi-home-outline',
            sub_menu: [],
            "position": false
          },
          {
            nombre: 'ADM.Cotización',
            url: 'adm-cotizacion',
            icono: 'mdi mdi-home-outline',
            sub_menu: [],
            "position": false
          },
          {
            nombre: 'producto',
            url: 'producto',
            icono: 'mdi mdi-home-outline',
            sub_menu: [],
            "position": false
          },
          {
            nombre: 'sucursal',
            url: 'sucursal',
            icono: 'mdi mdi-home-outline',
            sub_menu: [],
            "position": false
          },
        ]
      },
      {
        id: 8,
        modulo: 'Finanzas',
        url: 'finanzas',
        logo: 'F',
        menu: [
          {
            nombre: 'Dashboard',
            url: 'dashboard',
            icono: 'mdi mdi-home-outline',
            sub_menu: [],
            "position": false
          },
          {
            nombre: 'ADM.Cotización',
            url: 'adm-cotizacion',
            icono: 'mdi mdi-home-outline',
            sub_menu: [],
            "position": false
          },
          {
            nombre: 'producto',
            url: 'producto',
            icono: 'mdi mdi-home-outline',
            sub_menu: [],
            "position": false
          },
          {
            nombre: 'sucursal',
            url: 'sucursal',
            icono: 'mdi mdi-home-outline',
            sub_menu: [],
            "position": false
          },
        ]
      },
      {
        id: 9,
        modulo: 'Contabilidad',
        url: 'contabilidad',
        logo: 'CON',
        menu: [
          {
            nombre: 'Dashboard',
            url: 'dashboard',
            icono: 'mdi mdi-home-outline',
            sub_menu: [],
            "position": false
          },
          {
            nombre: 'ADM.Cotización',
            url: 'adm-cotizacion',
            icono: 'mdi mdi-home-outline',
            sub_menu: [],
            "position": false
          },
          {
            nombre: 'producto',
            url: 'producto',
            icono: 'mdi mdi-home-outline',
            sub_menu: [],
            "position": false
          },
          {
            nombre: 'sucursal',
            url: 'sucursal',
            icono: 'mdi mdi-home-outline',
            sub_menu: [],
            "position": false
          },
        ]
      },
      {
        id: 10,
        modulo: 'Recursos Humanos',
        url: 'recursos-humanos',
        logo: 'RH',
        menu: [
          {
            nombre: 'Dashboard',
            url: 'dashboard',
            icono: 'mdi mdi-home-outline',
            sub_menu: [],
            "position": false
          },
          {
            nombre: 'ADM.Cotización',
            url: 'adm-cotizacion',
            icono: 'mdi mdi-home-outline',
            sub_menu: [],
            "position": false
          },
          {
            nombre: 'producto',
            url: 'producto',
            icono: 'mdi mdi-home-outline',
            sub_menu: [],
            "position": false
          },
          {
            nombre: 'sucursal',
            url: 'sucursal',
            icono: 'mdi mdi-home-outline',
            sub_menu: [],
            "position": false
          },
        ]
      },
      {
        id: 11,
        modulo: 'Tesorería',
        url: 'tesoreria',
        logo: 'T',
        menu: [
          {
            nombre: 'Dashboard',
            url: 'dashboard',
            icono: 'mdi mdi-home-outline',
            sub_menu: [],
            "position": false
          },
          {
            nombre: 'ADM.Cotización',
            url: 'adm-cotizacion',
            icono: 'mdi mdi-home-outline',
            sub_menu: [],
            "position": false
          },
          {
            nombre: 'producto',
            url: 'producto',
            icono: 'mdi mdi-home-outline',
            sub_menu: [],
            "position": false
          },
          {
            nombre: 'sucursal',
            url: 'sucursal',
            icono: 'mdi mdi-home-outline',
            sub_menu: [],
            "position": false
          },
        ]
      },
      {
        id: 12,
        modulo: 'Administración',
        url: 'administracion',
        logo: 'A',
        menu: [
          {
            nombre: 'Dashboard',
            url: 'dashboard',
            icono: 'mdi mdi-home-outline',
            sub_menu: [],
            "position": false
          },
          {
            nombre: 'ADM.Cotización',
            url: 'adm-cotizacion',
            icono: 'mdi mdi-home-outline',
            sub_menu: [],
            "position": false
          },
          {
            nombre: 'producto',
            url: 'producto',
            icono: 'mdi mdi-home-outline',
            sub_menu: [],
            "position": false
          },
          {
            nombre: 'sucursal',
            url: 'sucursal',
            icono: 'mdi mdi-home-outline',
            sub_menu: [],
            "position": false
          },
        ],
        position: false
      },
      {
        id: 13,
        modulo: 'Sistemas',
        url: 'sistemas',
        logo: 'S',
        menu: [
          {
            nombre: 'Dashboard',
            url: 'dashboard',
            icono: 'mdi mdi-home-outline',
            sub_menu: [],
            "position": false
          },
          {
            nombre: 'ADM.Cotización',
            url: 'adm-cotizacion',
            icono: 'mdi mdi-home-outline',
            sub_menu: [],
            "position": false
          },
          {
            nombre: 'producto',
            url: 'producto',
            icono: 'mdi mdi-home-outline',
            sub_menu: [],
            "position": false
          },
          {
            nombre: 'sucursal',
            url: 'sucursal',
            icono: 'mdi mdi-home-outline',
            sub_menu: [],
            "position": false
          },
        ]
      },
      {
        id: 14,
        modulo: 'Mantenimiento',
        url: 'mantenimiento',
        logo: 'M',
        menu: [
          {
            nombre: 'Dashboard',
            url: 'dashboard',
            icono: 'mdi mdi-home-outline',
            sub_menu: [],
            "position": false
          },
          {
            nombre: 'ADM.Cotización',
            url: 'adm-cotizacion',
            icono: 'mdi mdi-home-outline',
            sub_menu: [],
            "position": false
          },
          {
            nombre: 'producto',
            url: 'producto',
            icono: 'mdi mdi-home-outline',
            sub_menu: [],
            "position": false
          },
          {
            nombre: 'sucursal',
            url: 'sucursal',
            icono: 'mdi mdi-home-outline',
            sub_menu: [],
            "position": false
          },
        ]
      },
      {
        id: 15,
        modulo: 'Seguridad',
        url: 'seguridad',
        logo: 'SE',
        menu: [
          {
            nombre: 'Dashboard',
            url: 'dashboard',
            icono: 'mdi mdi-home-outline',
            sub_menu: [],
            "position": false
          },
          {
            nombre: 'ADM.Cotización',
            url: 'adm-cotizacion',
            icono: 'mdi mdi-home-outline',
            sub_menu: [],
            "position": false
          },
          {
            nombre: 'producto',
            url: 'producto',
            icono: 'mdi mdi-home-outline',
            sub_menu: [],
            "position": false
          },
          {
            nombre: 'sucursal',
            url: 'sucursal',
            icono: 'mdi mdi-home-outline',
            sub_menu: [],
            "position": false
          },
        ]
      }

    ];
    return data;
  }
  listMenu(modulo_id) {
    return this._http.get(SERVICIO_MENU.menu + modulo_id);
  }
  dataMenu(data) {
    localStorage.setItem('data_menu', JSON.stringify(data));
  }
  getDataMenu() {
    return JSON.parse(localStorage.getItem('data_menu'));
  }
}
