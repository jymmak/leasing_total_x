import { AfterViewInit, OnInit, Output, EventEmitter, ElementRef, Directive, Input } from "@angular/core";
import * as moment from 'moment';

declare var $: any;

@Directive({
    selector: '[rangedatepicker]'
})

export class Rangedatepicker implements OnInit, AfterViewInit {
    @Output() onSelect = new EventEmitter();
    @Input() opens: any;
    @Input() autoUpdateInput: boolean;
    @Input() singleDatePicker: boolean;
    @Input() showDropdowns: boolean;
    @Input() autoApply: boolean;
    constructor(private el: ElementRef) {
        this.autoUpdateInput = false;
        this.singleDatePicker = false;
        this.showDropdowns = false;
        this.opens = 'righ';
        this.autoApply = true;

    }
    ngAfterViewInit(): void {
        $(this.el.nativeElement).daterangepicker({
            autoUpdateInput: this.autoUpdateInput,
            singleDatePicker: this.singleDatePicker,
            showDropdowns: this.showDropdowns,
            opens: this.opens,
            autoApply: this.autoApply,
            // maxDate: moment(),
            locale: {
                format: "YYYY-MM-DD",
                separator: " a ",
                applyLabel: "Aplicar",
                cancelLabel: "Cancelar",
                fromLabel: "De",
                toLabel: "A",
                customRangeLabel: "Personalizado",
                weekLabel: "S",
                daysOfWeek: [
                    "Do",
                    "Lu",
                    "Ma",
                    "Mi",
                    "Ju",
                    "Vi",
                    "Sa"
                ],
                monthNames: [
                    "Enero",
                    "Febrero",
                    "Marzo",
                    "Abril",
                    "Mayo",
                    "Junio",
                    "Julio",
                    "Agosto",
                    "Septiembre",
                    "Octubre",
                    "Noviembre",
                    "Diciembre"
                ],
                firstDay: 1
            },
            startDate: moment(),
            // drops: "down",
        }, (start, end, label) => {
            let data: any = { 
                start: moment(start).format('DD/MM/YYYY')
                
            };
            if (this.singleDatePicker === false) {
                data.end =  moment(end).format('DD/MM/YYYY');
            }
            this.onSelect.emit(data);
        });
    }
    ngOnInit(): void {
    }

}