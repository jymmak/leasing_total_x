import { Component, Input } from '@angular/core';


@Component({
    selector: 'spinner-basico',
    templateUrl: 'basico.template.html'
})
export class SpinnerBasicoComponent {
    @Input() show: any;
    constructor() {
        this.show = false;
    }
}
