import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[jhiDragndrop]'
})
export class DragndropDirective {

    @HostBinding('style.background') private background = '#eee';

    private darkBackground = '#999';
    private lightBackground = '#eee';

    constructor() {
    }

    @HostListener('dragover', ['$event']) onDragOver(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = this.darkBackground;
        console.log('Dragged over');
    }

    @HostListener('dragleave', ['$event'])
    public onDragLeave(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = this.lightBackground;
    }

    @HostListener('drop', ['$event'])
    public onDrop(evt) {
        evt.preventDefault();
        evt.stopPropagation();

        const files = evt.dataTransfer.files;
        if (files.length > 0) {
            this.background = this.lightBackground
        }
    }
}
