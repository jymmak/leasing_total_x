import { Location } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ModulosService } from 'src/app/views/modulos/modulos.service';
import { menuCmercial } from '../../../../config/menu-modulos/menu-comercial';
declare var $: any;

@Component({
    selector: 'navigation',
    templateUrl: 'navigation.template.html',
    providers: [
        ModulosService,
    ]
})

export class NavigationComponent implements OnInit, AfterViewInit {
    public lista: any;
    public direction: any;
    public href: any;
    public ulActivo: any;
    public intervalHolder: any;
    public cotizador = "/comercial/cotizacion/cotizador";
    public cotizaciones = "/comercial/cotizacion/cotizaciones";
    public hrefActivo: any;
    public url: any;

    @ViewChild('ElMenu') ElMenu: ElementRef;
    constructor(private _location: Location, private router: Router, private _modulosService: ModulosService) {
        this.lista = {};
    }

    activarMenu() {
      
    }






    ngAfterViewInit() {
        console.log("ngAfterViewInit");
        this.listMenu();
        this.activarMenu();

    }

    ngOnInit() {
        console.log("ngOnInit");
        // this.router.routeReuseStrategy.shouldReuseRoute = () => {
        //     return false;
        // };

        // this.router.events.subscribe((evt) => {
        //     if (evt instanceof NavigationEnd) {
        //         this.router.navigated = false;
        //         window.scrollTo(0, 0);
        //     }
        // });
        // this.href = this.router.url;
        // if (this.href === this.href) {
        //     //  let str = this.router.url;
        //     // let parts = str.indexOf("/");
        //     // this.url = parts[0] + "/" + parts[1] + "/" + parts[2] + "/" + parts[3];
        //     // this.router.url = this.url;
        // } else
        // if (this.href === "/") {
        //     this.router.navigate(['/login']);
        // }
        // this.lista = this._modulosService.getDataMenu();
        // this.lista = JSON.parse(localStorage.getItem('lista'));
        // console.log(this.lista);

    }
    activeRoute(routename: string): boolean {
        return this.router.url.indexOf(routename) > -1;
    }
    backmodules() {

        this.router.navigate(['/modulos']);
        console.log(this._location);

        // this.router.navigate(['/comercial/dashboard'])
    }
    listMenu() {
        this._modulosService.listMenu(3).subscribe(
            response => {
                this.lista = menuCmercial(response);
                this._modulosService.dataMenu(this.lista);
            },
            error => {
                console.log(error);
            },
            () => {
                setTimeout(() => {
                    $(this.ElMenu.nativeElement).metisMenu();
                }, 0);

            }
        );
    }


}
