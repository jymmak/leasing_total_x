import { Directive, ElementRef, HostListener, Input, EventEmitter, Output } from '@angular/core';


@Directive({
    selector: '[RangoNumero]'
})
export class RangoNumeroDirective {
    @Output() valueEntero: EventEmitter<any> = new EventEmitter<any>();
    public teclas_numero = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105];
    public teclas_util = [35, 36, 37, 38, 39, 40, 8];
    public validar = [];
    public value_down: number;
    @Input() minNumber: number;
    @Input() maxNumber: number;
    @Input() RangoNumero: boolean;

    constructor(private el: ElementRef) {
        this.maxNumber = 999999999;
        this.minNumber = 0;
        this.validar = this.teclas_numero.concat(this.teclas_util);
    }
    @HostListener('keydown', ['$event']) onKeyDown(event) {
        let e = <KeyboardEvent>event;
        this.value_down = this.el.nativeElement.value;
        let length = parseInt(this.el.nativeElement.value.length, 0);
        if (e.shiftKey) {
            e.preventDefault();
        }
        if (this.teclas_numero.indexOf(e.keyCode) !== -1 && length >= this.maxNumber.toString().length) {
            e.preventDefault();
        }
        if (this.validar.indexOf(e.keyCode) !== -1 ||
            (e.keyCode === 65 && e.ctrlKey === true) || // seleccionar
            (e.keyCode === 67 && e.ctrlKey === true) || // copiar
            (e.keyCode === 86 && e.ctrlKey === true) || // pegar
            (e.keyCode === 88 && e.ctrlKey === true)  // cortar
        ) {
            return;
        }
        e.preventDefault();
    }

    @HostListener('keyup', ['$event']) onkeyUp(event) {
        let value = this.el.nativeElement.value;
        console.log(value);
        let numero: any = this.validarNumeros(value.trim());
        numero = parseFloat(parseFloat(numero).toFixed(2));
        if (numero > this.maxNumber && numero > this.value_down) {
            this.valueEntero.emit(this.minNumber);
        }
        if (this.value_down >= this.minNumber && this.value_down <= this.maxNumber) {

        }

    }
    @HostListener('change', ['$event']) onchange(event) {
        let value = this.el.nativeElement.value;
        let numero: any = this.validarNumeros(value.trim());
        numero = parseFloat(parseFloat(numero).toFixed(2))
        if (numero < this.minNumber) {
            this.valueEntero.emit(this.minNumber);
        }
        if (numero > this.maxNumber) {
            this.valueEntero.emit(this.minNumber);
        }

    }
    validarNumeros(palabra) {
        let cadena = "0123456789";
        let numero = "";
        for (let i = 0; i < palabra.length; i++) {
            let ch = palabra.charAt(i);
            for (let j = 0; j < cadena.length; j++) {
                if (ch === cadena.charAt(j)) {
                    numero = numero + ch;
                }
            }
        }
        return numero;
    }
}
