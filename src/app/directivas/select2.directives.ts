import { AfterViewInit, Directive, ElementRef, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

declare var $: any;

@Directive({
    selector: '[select2]'
})
export class Select2Directive implements OnInit, AfterViewInit, OnChanges {
    select: any;
    @Input() data: Array<any>;
    @Input() showBuscador: any;  // -1 = falso ; 1= true;
    @Input() selected: any;
    @Input() theme: any;
    @Input() multiple: any;
    @Output() onSelect = new EventEmitter();
    constructor(private el: ElementRef) {
        this.showBuscador = -1;
        this.data = [];
        this.theme = "selectDefaul";
        this.multiple = this.multiple

    }

    ngOnInit() { }
    ngAfterViewInit() {
        this.init();
    }
    ngOnChanges(simple: SimpleChanges) {
        console.log(simple);
        if (simple.data !== undefined && simple.data.previousValue !== undefined) {
            if (simple.data.currentValue.length !== simple.data.previousValue.length) {
                this.init();
            }
        }
    }

    private init() {
        let option = {};
        option['width'] = '100%';
        option['minimumResultsForSearch'] = this.showBuscador;
        option['theme'] = this.theme;
        option['multiple'] = this.multiple;

        option['escapeMarkup'] = function (m) { return m; };
        if (this.data.length > 0) {
            option['data'] = this.data;
        }
        this.select = $(this.el.nativeElement)
            .select2(option).on('select2:select', (event: any) => {
                this.onSelect.emit(event.params.data);
            });
    }

}
