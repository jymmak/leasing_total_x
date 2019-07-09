import { AfterViewInit, Directive, ElementRef, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

declare var $: any;

@Directive({
    selector: '[datepicker]'
})
export class DatepickerDirective implements OnInit, AfterViewInit, OnChanges {
    select: any;
    @Input() format: any;
    @Input() inline: any;
    @Input() autoClose: any;
    @Input() minDate: any;
    @Output() onSelect = new EventEmitter();
    constructor(private el: ElementRef) {
        this.format = "dd/mm/yyyy",
            this.inline = false,
            this.autoClose = true,
            this.minDate = new Date();
    }

    ngOnInit() { }
    ngAfterViewInit() {
        this.init();
    }
    ngOnChanges(simple: SimpleChanges) {

    }

    private init() {
        $(this.el.nativeElement).datepicker({
            language: 'es',
            format: this.format,
            inline: this.inline,
            autoClose: this.autoClose,
            minDate: this.minDate,
            onSelect: (fd, date) => {
                this.onSelect.emit(date);
            }
        }
        );
    }

}
