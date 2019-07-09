import { OnInit, AfterViewInit, Inject, HostListener, Output, EventEmitter, Directive, ElementRef } from '@angular/core';
@Directive({
    selector: '[infiniteScroll]',
})
export class InfiniteScrollDirective implements OnInit, AfterViewInit {
    @Output() scrolled = new EventEmitter();
    constructor(
        private el: ElementRef
    ) {
    }
    @HostListener('scroll', ['$event'])
    onScroll(event) {
        let scrollTop = event.target.clientHeight + event.target.scrollTop;
        if (event.target.scrollHeight === scrollTop) {
            this.scrolled.emit();
        }
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
}  
