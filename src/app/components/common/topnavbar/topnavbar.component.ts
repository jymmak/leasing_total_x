import { Component } from '@angular/core';
import { smoothlyMenu } from '../../../app.helpers';
import { Router } from '@angular/router';
declare var jQuery:any;


@Component({
    selector: 'topnavbar',
    templateUrl: 'topnavbar.template.html'
})
export class TopnavbarComponent {
    constructor(private router: Router) { }
    toggleNavigation(): void {
        jQuery("body").toggleClass("mini-navbar");
        smoothlyMenu();
    }
    activeRoute(routename: string): boolean {
        console.log("menusares");
        return this.router.url.indexOf(routename) > -1;
    }


    logout(){
        localStorage.clear();
        this.router.navigate(['/login']);
    }

}
