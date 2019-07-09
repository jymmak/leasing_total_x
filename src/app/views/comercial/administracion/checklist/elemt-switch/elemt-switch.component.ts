import { Component, ElementRef, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ToastPlugin } from "../../../../../plugins/toast.plugin";
declare var $: any;



@Component({
    selector: 'elemt-switch-component',
    templateUrl: 'elemt-switch.template.html',
    providers: [
        ToastPlugin
    ]
})
export class ElemtSwitchComponent implements OnInit {


    ngOnInit(): void {
  
    }


}
