import { Component } from '@angular/core';
import { smoothlyMenu } from '../../../app.helpers';
import { Router } from '@angular/router';
declare var jQuery:any;


@Component({
    selector: 'topnavbar-modulos',
    templateUrl: 'topnavbar-modulos.template.html'
})
export class TopnavbarModulosComponent {
    constructor(private router: Router) { }
    toggleNavigation(): void {
        jQuery("body").toggleClass("mini-navbar");
        smoothlyMenu();
    }
    activeRoute(routename: string): boolean {
        return this.router.url.indexOf(routename) > -1;
    }


    logout(){
        localStorage.clear();
        this.router.navigate(['/login'])
    }

}
