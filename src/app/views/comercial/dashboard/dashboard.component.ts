import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastPlugin } from "../../../plugins/toast.plugin";


@Component({
    selector: 'page-dashboard',
    templateUrl: 'dashboard.template.html',
    providers: [
        ToastPlugin
    ]
})
export class DashboardComponent implements AfterViewInit, OnInit{

    // Cabecera de cada Vista
    public links: Array<any>;
    public lstColocacionesEjecutivos: Array<any>;
	public mes: any;
	public semana: any;
    public dia: any;
    public selectItem: any;
    constructor(private router: Router, private _toast: ToastPlugin) {
        this.links = [
            { titulo: 'Dashboard Gerencial', link: "/comercial/dashboard" },

        ];
 

    }

    ngAfterViewInit() {
        // document.getElementById('datepicker-inline').style.display = 'none';}
       // $(".datepicker-inline").css("display", "none");
        $(".datepicker--content").css("display", "none");
        $("#timeline").css("display", "none");
    }

ngOnInit(){
    this.mes = [
        { id: 2, value: 'enero', text: "Enero" },
        { id: 3, value: 'febrero', text: " Febrero" },
        { id: 3, value: 'marzo', text: " Marzo" },
        { id: 3, value: 'abril', text: " Abril" },
        { id: 3, value: 'mayo', text: " Mayo" },
        { id: 3, value: 'junio', text: " Junio" },
        { id: 3, value: 'julio', text: " Julio" },
    ];
    this.semana = [
        { id: 2, value: '1', text: "1" },
        { id: 3, value: '2', text: " 2" },
        { id: 3, value: '3', text: " 3" },
        { id: 3, value: '4', text: " 4" },
      
    ];
    this.dia = [
        { id: 2, value: '1', text: "1" },
        { id: 3, value: '2', text: " 2" },
        { id: 3, value: '3', text: " 3" },
        { id: 3, value: '4', text: " 4" },
        { id: 3, value: '5', text: " 5" },
        { id: 3, value: '6', text: " 6" },
        { id: 3, value: '7', text: " 7" },
        { id: 3, value: '8', text: " 8" },
        { id: 3, value: '9', text: " 9" },
        { id: 3, value: '10', text: " 10" },
      
    ];

    this.lstColocacionesEjecutivos = [
        {
            item: 1,
            nombre: 'Jorge Rosado',
            opCerradas: " $1.9 mil",
       
        },
        {
            item: 2,
            nombre: 'Maria Maclachian',
            opCerradas: " $1.2 mil",
        },
        {
            item: 3,
            nombre: 'Valerie Liberty-Head Chef',
            opCerradas: " $1 mil",
        },
        {
            item: 4,
            nombre: 'Maria Maclachian',
            opCerradas: " $1.2 mil",
        },
        {
            item: 5,
            nombre: 'Jorge Rosado',
            opCerradas: " $1.9 mil",
       
        },
        {
            item: 6,
            nombre: 'Maria Maclachian',
            opCerradas: " $1.2 mil",
        },
        {
            item: 7,
            nombre: 'Jorge Rosado',
            opCerradas: " $1.9 mil",
       
        },
        {
            item: 8,
            nombre: 'Maria Maclachian',
            opCerradas: " $1.2 mil",
        },
        {
            item: 9,
            nombre: 'Jorge Rosado',
            opCerradas: " $1.9 mil",
       
        },   {
            item: 10,
            nombre: 'Maria Maclachian',
            opCerradas: " $1.2 mil",
        },
        {
            item: 11,
            nombre: 'Jorge Rosado',
            opCerradas: " $1.9 mil",
       
        },

    ];


    // lst

}

seleccionarProvincia(event){
    console.log(event);
    

}

select(item){
    this.selectItem = item;
    
}
}
