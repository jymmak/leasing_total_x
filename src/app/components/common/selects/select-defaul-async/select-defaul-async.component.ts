import { Component, ElementRef, ViewChild, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges, AfterViewInit, ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'select-defaul-async',
    templateUrl: 'select-defaul-async.template.html',
    providers: [
    ]
})
export class SelectDefaulAsyncComponent implements OnInit, OnChanges, AfterViewInit {
    @ViewChild('inputSelect') inputSelect: ElementRef;
    @ViewChild('inputSelectDiv') inputSelectDiv: ElementRef;
    @Input() placeholder: any;
    @Input() loading: any;
    @Input() selected: any;
    @Input() search: boolean;
    @Input() searchPlaceholderText: any;
    @Input() data: Array<any>;
    // public dataFinal: Array<any>;
    @Output() selectChange = new EventEmitter<any>();
    public readonly: boolean;
    @Input() value: any;
    @Output() searchText = new EventEmitter<any>();
    @Output() scrolling = new EventEmitter<any>();
    public showOption: boolean;
    constructor(public el: ElementRef, private changeDetector: ChangeDetectorRef) {
        this.search = true;
        this.placeholder = "";
        this.searchPlaceholderText = "Buscar";
        this.data = [];
        this.readonly = false;
        this.value = "";
        this.showOption = false;
        this.selected = {};
        this.loading = false;
    }
    ngOnInit() {
        // this.searchData("");

    }
    ngOnChanges(simpleChange: SimpleChanges) {
    }
    showOptions() {
        let padre = this.inputSelect.nativeElement.parentElement;
        padre.classList.add('activo');
        this.showOption = true;
    }
    hideOptions() {
        let padre = this.inputSelect.nativeElement.parentElement;
        padre.classList.remove('activo');
        this.showOption = false;

        // let totalSelects = document.getElementsByTagName("SELECT-DEFAUL-ASYNC").length;
        // console.log(totalSelects);
        // for (let i = 0; i < totalSelects; i++) {
        //     let select = document.getElementsByTagName("SELECT-DEFAUL-ASYNC")[i].querySelector('.select-defaul-async');
        //     select.classList.remove('activo');
        // }
        // this.value = "";
    }
    ngAfterViewChecked() {
        this.changeDetector.detectChanges();
    }
    ngAfterViewInit() {
        document.addEventListener('click', (event) => {
            let obj = event['path'];
            let CerrarDrow: Boolean = true;
            for (let index = 0; index < obj.length - 3; index++) {
                if (obj[index].nodeName == 'SELECT-DEFAUL-ASYNC') {
                    CerrarDrow = false;
                }
            }
            if (CerrarDrow === false) {
            } else {
                this.hideOptions();
            }
        });
        this.inputSelectDiv.nativeElement.onclick = (event) => {
            this.showOptions();
            setTimeout(() => {
                this.inputSelect.nativeElement.focus();
            }, 1);
        };
        if (this.search) {
            this.inputSelect.nativeElement.onkeyup = () => {
                this.searchText.emit(this.inputSelect.nativeElement.value);
            };
        }
    }
    selectOption(selected_index, data) {
        this.data.forEach((value, index) => {
            this.data[index].selected = false;
        });
        this.data[selected_index].selected = true;
        this.selected = data;
        this.selectChange.emit(data);
        this.hideOptions();
    }
    closeSelect() {
        if (this.search) {
            this.value = "";
        }
        if (this.showOption) {
            this.hideOptions();

        } else {
            this.showOptions();
        }
    }
    scrolled() {
        if (!this.loading) {
            this.scrolling.emit(this.inputSelect.nativeElement.value);
        }
    }
}
