export const menuCmercial = (data) => {
    let rutas_comercial: Array<any> = [];
    data.menu.forEach((value, index) => {
        if (value.id === 1) {
            // Dashboard
            value.icono = 'mdi mdi-home-outline';
            value.hijo = [];
        } else if (value.id === 2) {
            // Plan Comercial
            value.icono = 'mdi mdi-content-copy';
        } else if (value.id === 3) {
            // Operaciones
            value.icono = 'mdi mdi-settings-outline';

        } else if (value.id === 4) {
            // Organizaciones
            value.icono = 'mdi mdi-account-outline';


        } else if (value.id === 5) {
            // Fuerza de Ventas
            value.icono = 'mdi mdi-briefcase-outline';

        } else if (value.id === 6) {
            // Cotizaciones
            value.icono = 'mdi mdi-cash-usd';

        } else if (value.id === 7) {
            // Agenda
            value.icono = 'mdi mdi-calendar-range';
            value.hijo = [];

        } else if (value.id === 8) {
            // Mapa
            value.icono = 'mdi mdi-web';
            value.hijo = [];
        } else if (value.id === 9) {
            // CRM
            value.icono = 'mdi mdi-tag-outline';
        } else if (value.id === 10) {
            // Reportes
            value.icono = 'mdi mdi-file-document-box-outline';
            value.hijo = [];

        } else if (value.id === 11) {
            // Administracion
            value.icono = 'mdi mdi-puzzle-outline';
        }

        rutas_comercial.push(
            value
        );
    });
    data.menu = rutas_comercial;
    return data;
};
