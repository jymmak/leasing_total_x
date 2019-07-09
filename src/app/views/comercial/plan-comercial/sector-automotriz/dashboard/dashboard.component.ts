import { Component, ViewChild, OnInit } from '@angular/core';
import { ToastPlugin } from "../../../../../plugins/toast.plugin";
import { Router } from '@angular/router';
import swal from 'sweetalert2';

declare var $: any;


@Component({
	selector: 'dashboard',
	templateUrl: 'dashboard.template.html',
	providers: [
		ToastPlugin
	]
})


export class DashboComponent  {
	public links: Array<any>;
    public spinner: boolean;

    constructor(private router: Router, private _toast: ToastPlugin) {
        this.spinner = false;
        this.links = [
            { titulo: 'Dashboard' },

        ];
    }
    back() {
        this.router.navigate(['/comercial/plan-comercial/automotriz']);
    }
}
