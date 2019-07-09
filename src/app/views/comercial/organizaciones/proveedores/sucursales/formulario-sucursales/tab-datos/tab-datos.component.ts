import { Component } from '@angular/core';
declare var $: any;

@Component({
    selector: 'tab-datos',
    templateUrl: 'tab-datos.template.html',

})


export class TabDatosComponent {
    lat: number = -9.1899672;
    lng: number = -75.015152;
    zoom: number = 6;
}
