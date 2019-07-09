import { Component, AfterViewInit, Input, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ToastPlugin } from "../../../plugins/toast.plugin";
import * as $ from 'jquery';
import * as moment from 'moment';
import 'fullcalendar';
import swal from 'sweetalert2';
import { RUTAS_COMERCIAL_AGENDA } from 'src/config/rutas-modulos/rutas-comercial';


@Component({
    selector: 'page-agenda',
    templateUrl: 'agenda.template.html',
    providers: [
        ToastPlugin
    ]
})
export class AgendaComponent implements AfterViewInit, OnInit {

    // Cabecera de cada Vista
    public links: Array<any>;
    public eventos: Array<any>;
    public event_id: any;

    constructor(private router: Router, private _toast: ToastPlugin) {
        this.links = [
            { titulo: 'Hoy' },

        ];
        this.eventos = [

            {
                event_id: 1,
                title: 'Cumpleaños de Andrés López',
                allDay: true,
                start: '2019-01-22',
                icono: 'mdi mdi-cake-variant',
                color: '#FFF7F7',
                borderColor: '#08aaff',
                cliente: '',
                direccion: '',
                importante: ''
            },
            {
                event_id: 2,
                title: 'Llamar a Grupo Pana',
                start: '2019-01-22T08:30:00',
                end: '2019-01-22T09:15:00',
                icono: 'mdi mdi-phone',
                color: '#FFFFFF',
                borderColor: '#f6a704',
                cliente: 'José Mendoza',
                direccion: 'Av Javier Pardo Este 5214',
                importante: '',
                allDay: false,
            },
            {
                event_id: 3,
                title: 'Evento de vehículos',
                start: '2019-01-22T09:45:00',
                end: '2019-01-22T10:45:00',
                icono: 'mdi mdi-calendar',
                color: '#FFF7F7',
                borderColor: 'rgb(78, 252, 25)',
                cliente: 'Antonio Aguilar',
                direccion: 'Av Javier Pardo Este 5214',
                importante: 'Recordar pedir catálogo de vehículos en existencia.',
                allDay: false,
            },
            {
                event_id: 4,
                title: 'Visita a Camiones Vicente',
                start: '2019-01-22T11:00:00',
                end: '2019-01-22T12:00:00',
                icono: 'mdi  mdi-account-multiple',
                color: '#FFFFFF',
                borderColor: '#d22919',
                cliente: 'Christian Cardozo',
                direccion: 'Av Javier Pardo Este 5214',
                importante: 'Recordar pedir catálogo de vehículos en existencia.',
                allDay: false,

            },
            {
                event_id: 5,
                title: 'Enviar correos a clientes',
                start: '2019-01-22T12:30:00',
                end: '2019-01-22T13:30:00',
                icono: 'mdi mdi-email-outline',
                color: '#FFF7F7',
                borderColor: '#ffed00',
                cliente: 'Joaquin Villanueva',
                direccion: 'Av Javier Pardo Este 5214',
                importante: '',
                allDay: false,
            },
            {
                event_id: 6,
                title: 'Visita a BMW',
                start: '2019-01-22T14:30:00',
                end: '2019-01-22T15:00:00',
                icono: 'mdi  mdi-account-multiple',
                color: '#FFFFFF',
                borderColor: '#d22919',
                cliente: 'Andrés Perez',
                direccion: 'Av Javier Pardo Este 5214',
                importante: 'Recordar pedir catálogo de vehículos en existencia.',
                allDay: false,
            },
            {
                event_id: 7,
                title: 'Reunión con Transportes Transa',
                start: '2019-01-22T15:15:00',
                end: '2019-01-22T15:45:00',
                icono: 'mdi mdi-clock-outline',
                color: '#FFF7F7',
                borderColor: '#fc6719',
                cliente: 'Christian Cardozo',
                direccion: 'Av Javier Pardo Este 5214',
                importante: 'Recordar pedir catálogo de vehículos en existencia.',
                allDay: false,
            },
            {
                event_id: 8,
                title: 'Visita a Grupo Pana',
                start: '2019-01-22T16:00:00',
                end: '2019-01-22T17:00:00',
                icono: 'mdi  mdi-account-multiple',
                color: '#FFFFFF',
                borderColor: '#d22919',
                cliente: 'Christian Cardozo',
                direccion: 'Av Javier Pardo Este 5214',
                importante: 'Recordar pedir catálogo de vehículos en existencia.',
                allDay: false,
            },
            {
                event_id: 9,
                title: 'Reunión de mantenimiento',
                start: '2019-01-22T17:30:00',
                end: '2019-01-22T18:00:00',
                icono: 'mdi mdi-clock-outline',
                color: '#FFF7F7',
                borderColor: '#fc6719',
                cliente: 'Christian Cardozo',
                direccion: 'Av Javier Pardo Este 5214',
                importante: 'Recordar pedir catálogo de vehículos en existencia.',
                allDay: false,
            },

        ]

    }

    ngOnInit() {

    }
    ngAfterViewInit() {
        $('#calendar').fullCalendar({
            locale: 'es',

            header: {
                left: 'title,prev,next',
                center: '',
                right: 'agendaDay,agendaFourDay,month' //basicWeek,basicDay,
            },

            minTime: "08:00:00",
            maxTime: "19:00:00",
            scrollTime: "18:00:00",
            allDaySlot: true,

            buttonText: {
                today: 'today',
                month: 'Mes',
                week: 'Semana',
                day: 'Hoy',
                list: 'list'
            },
            defaultDate: '2019-01-22',
            displayEventTime: false,
            defaultView: "agendaDay",
            views: {
                day: {
                    // displayEventTime: true,
                    // displayEventEnd: true,
                    // timeFormat: "hh:mm a"
                },
                agendaFourDay: {
                    type: 'agenda',
                    duration: { days: 6 },
                    buttonText: 'Semana',
                    displayEventTime: true,
                    displayEventEnd: true,
                    timeFormat: "hh:mm a"
                }


            },

            events: this.eventos,
            eventClick: (calEvent, jsEvent, view) => {
                console.log(calEvent, jsEvent, view)
                let agenda = RUTAS_COMERCIAL_AGENDA.agenda;
                this.router.navigate([RUTAS_COMERCIAL_AGENDA.agenda.init + '/' + calEvent.event_id + '/' + RUTAS_COMERCIAL_AGENDA.agenda.editar]);

                $(this).css('border-color', 'yellow');
            },




            eventRender: function (event, el) {
                let dataStar = moment(event.start).format('h:mm a');
                let dataEnd = moment(event.end).format('h:mm a');
                let html = `
                <div class='fc-time ml-4 mr-3 d-inline-block   align-middle' data-start=' `+ dataStar + `' data-full='` + dataStar + `- ` + dataEnd + `'>
                    <span>`+ dataStar + `</span> 
                    <span>` + dataEnd + `</span>
                </div>  
              
                <div class='fc-icono d-inline-block align-middle'> 
                     <i class='` + event.icono + ` fs-17 d-inline-block'></i>
                </div>
                <div class='fc-title d-inline-block align-middle'>
                    <p class="m-0"> ` + event.title + `</p>
                    <div class='fc-timeSecond' data-start=' `+ dataStar + `' data-full='` + dataStar + `- ` + dataEnd + `'>
                    <span>`+ dataStar + `- ` + dataEnd + `</span>
                    </div>
                </div>


                <div class='ml-3 fc-cliente d-inline-block align-middle' ><span'>` + event.cliente + `</span></div>
                <div class='ml-3 fc-direccion d-inline-block align-middle' ><span'>` + event.direccion + `</span></div>
                <div class='ml-3 fc-importante d-inline-block align-middle' ><span'>` + event.importante + `</span></div>
               
              ` ;
                // html +="<div class='fc-time' data-start='08:30 am' data-full='8:30 - 9:15'>";
                // html +="<span>08:30 am - 09:15 am</span>";
                // html +="</div>";
                // html +="<div class='fc-icono'><i class='" + event.icono + " fs-17 d-inline-block'></i></div>";
                // html +="<div class='fc-title'>"+event.title+"</div>";
                // html +="<div class='fc-time' data-start='08:30 am' data-full='8:30 - 9:15'>";
                // el.find('.fc-content').append("<i class='" + event.icono + " fs-17 d-inline-block'></i>");
                // el.find('.fc-content').prepend("<i class='" + event.icono + " fs-17 mr-4 d-inline-block'></i>");
                // el.find(".fc-header-toolbar").append("<span class='mdi mdi-format-list-bulleted'></span>");
                // el.find('.fc-content').append("<span >"+event.cliente+"</span>");
                el.find('.fc-content').html(html);


            }


        });
        // $("#calendar").fullCalendar('gotoDate', moment('DD/MM/YYYY'));
        $("#calendar").fullCalendar({
            defaultView: 'timeline', // the name of a generic view
            duration: { days: 3 }
        });
    }


    listaTareas() {
        this.router.navigate([RUTAS_COMERCIAL_AGENDA.agenda.lista]);
    }

    agregarActividad() {
        this.router.navigate([RUTAS_COMERCIAL_AGENDA.agenda.agregarActividad]);
    }

 



}
