import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastPlugin } from "../../../plugins/toast.plugin";


@Component({
    selector: 'page-dashboard',
    templateUrl: 'dashboard.template.html',
    providers: [
        ToastPlugin
    ]
})
export class DashboardComponent implements AfterViewInit {
  
    // Cabecera de cada Vista
    public links: Array<any>;
    ngAfterViewInit() {


    }
    constructor(private router: Router, private _toast: ToastPlugin) {
        this.links = [
            { titulo: 'Dashboard' },

        ];
      


    }




}
