import { Component, ElementRef, ViewChild, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { relativeTimeThreshold } from 'moment';
import { validateConfig } from '@angular/router/src/config';

@Component({
    selector: 'multi-select-component',
    templateUrl: 'multi-select.template.html',
    providers: [
    ]
})
export class MultiSelectComponent implements OnInit, OnChanges, AfterViewInit {
    @ViewChild('inputSelect') inputSelect: ElementRef;
    @ViewChild('inputSelectInput') inputSelectInput: ElementRef;
    @Input() selected: Array<any>;
    @Input() placeholder: any;
    @Input() search: boolean;
    @Input() searchPlaceholderText: any;
    @Input() data: Array<any>;
    public dataFinal: Array<any>;
    @Output() selectChange = new EventEmitter<any>();
    public readonly: boolean;
    @Input() value: any;
    public showOption: boolean;
    constructor(public el: ElementRef, private changeDetector: ChangeDetectorRef) {
        this.search = true;
        this.placeholder = "";
        this.searchPlaceholderText = "Buscar";
        this.data = [];
        this.selected = [];
        this.readonly = false;
        this.value = "";
        this.showOption = false;
    }
    ngOnInit() {
        this.searchData("");

    }
    ngOnChanges(simpleChange: SimpleChanges) {
    }
    showOptions() {
        if (this.search) {
            this.searchData(this.value);
        } else {
            this.searchData("");
        }

        let padre = this.inputSelect.nativeElement.parentElement;
        console.log(padre);

        padre.classList.add('activo');
        let tabCrearBien = document.querySelector('#mesesCrearBien')
        if (tabCrearBien !== null) {
         document.querySelector('#mesesCrearBien').classList.add('has-placeholder');
         let eleee = document.getElementsByClassName('mdi mdi-play');
         console.log(eleee);
         for (var i = 0; i < eleee.length; i++) {
            if (eleee[i].className.toLowerCase() == "mdi mdi-play") {
                eleee[i].parentNode.removeChild(eleee[i]);
            }
        }
         
           
        }
        this.showOption = true;
    }
    hideOptions() {
        let padre = this.inputSelect.nativeElement.parentElement;
        padre.classList.remove('activo');
        let tabCrearBien = document.querySelector('#mesesCrearBien')
        // console.log(tabCrearBien);
        if (tabCrearBien !== null) {
            document.querySelector('#mesesCrearBien').classList.remove('has-placeholder');
        }
        this.showOption = false;
    }
    ngAfterViewChecked() {
        this.changeDetector.detectChanges();
    }
    ngAfterViewInit() {
        document.addEventListener('click', (event) => {
            let obj = event['path'];
            let CerrarDrow: Boolean = true;
            for (let index = 0; index < obj.length - 3; index++) {
                if (event.srcElement.nodeName == 'LABEL' || event.srcElement.nodeName == 'INPUT') {
                    CerrarDrow = false;
                }
            }
            if (CerrarDrow === false) {

            } else {
                // let elem = document.getElementsByClassName('multi-select')
                this.hideOptions();
            }

        });


        this.inputSelect.nativeElement.onfocus = () => {
            this.showOptions();
        };
        this.inputSelectInput.nativeElement.onfocus = () => {
            this.showOptions();
            if (this.search) {
                this.inputSelect.nativeElement.focus();
            }
        };
        if (this.search) {
            this.inputSelect.nativeElement.onkeyup = () => {
                this.searchData(this.inputSelect.nativeElement.value);
            };
        }
    }
    selectOption(event, data) {
        this.dataFinal.forEach(value => {
            if (value.selected == true) {
                let existe = false;
                this.selected.forEach(value_s => {
                    if (value_s.id === value.id) {
                        existe = true;
                    }
                });
                if (existe == false) {
                    this.selected.push(value);
                }
            }
        });
        if (event == false) {
            let index = this.selected.findIndex(value => value.id == data.id);
            this.selected.splice(index, 1);
        }
        console.log(this.selected);
        this.selectChange.emit(this.selected);
    }
    searchData(text) {
        this.dataFinal = [];
        this.data.forEach(value => {
            value.text = String(value.text).toUpperCase();
            if (value.text.indexOf(text.toUpperCase()) > -1) {
                let selected = (value.selected === undefined) ? false : value.selected;
                this.selected.forEach(value_selected => {
                    if (value_selected.id == value.id) {
                        selected = true;
                    }
                });
                this.dataFinal.push({
                    id: value.id,
                    text: value.text,
                    selected: selected,
                    email: value.email,
                });
            }
        });
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
}
