import { Directive, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';

@Directive({
    selector: '[jhiDragndrop]'
})
export class DragndropDirective {

    private lightBackground = '#eee';
    private darkBackground = '#999';
    @HostBinding('style.background') private background = this.lightBackground;

    @Output() private fileListEventEmitter: EventEmitter<FileList> = new EventEmitter();

    constructor() {
    }

    @HostListener('dragover', ['$event']) onDragOver(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = this.darkBackground;
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
            this.background = this.darkBackground;
        }
        this.fileListEventEmitter.emit(files);
    }
}
