import { Component, OnInit } from '@angular/core';
import { ToastPlugin } from 'src/app/plugins/toast.plugin';

@Component({
  selector: 'antecedentes',
  templateUrl: './antecedentes.component.html',
  providers: [
		ToastPlugin
	]
})
export class AntecedentesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
