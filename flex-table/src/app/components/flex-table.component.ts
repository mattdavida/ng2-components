import {
    AfterContentInit, Component, OnInit,
    OnChanges, DoCheck, ElementRef,
    Renderer2, Input, ViewChild,
    HostListener
} from '@angular/core';

import { WindowRef } from '../services/window-ref.service';

@Component({
    selector: 'app-flex-table',
    templateUrl: './flex-table.component.html',
    styleUrls: ['./flex-table.component.css']
})
export class FlexTableComponent implements AfterContentInit, DoCheck {
    @Input() data: any[];
    @Input() headers: string[];
    @Input() height = 500;

    @ViewChild('content') content: ElementRef;
    @ViewChild('page') page: ElementRef;

    adjustedHeight: number;
    columns: number;
    windowHeight: number;

    constructor(
        private el: ElementRef,
        private renderer: Renderer2,
        private windowRef: WindowRef
    ) {
    }

    ngAfterContentInit() {
        this.columns = this.headers.length;
        this.windowHeight = this.windowRef.nativeWindow.document.body.clientHeight;
        this.adjustedHeight = this.windowHeight - 100;
        this.windowHeight <= this.height ?
            this.renderer.setStyle(this.page.nativeElement, 'height', `${(this.adjustedHeight as any)}px`) :
            this.renderer.setStyle(this.page.nativeElement, 'height', `${(this.height as any)}px`);
    }

    ngDoCheck() {
        this.checkForResize();
    }

    private checkForResize() {
        setTimeout(() => {
            this.windowHeight = this.windowRef.nativeWindow.document.body.clientHeight;
            this.windowHeight <= this.height + 75 ?
                this.page.nativeElement.style.height = `${(this.windowHeight - 100 as any)}px` :
                this.page.nativeElement.style.height = `${(this.height as any)}px`;
        });
    }

}
