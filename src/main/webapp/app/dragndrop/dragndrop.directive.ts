import { Directive, EventEmitter, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';
import { JhiAlertService } from 'ng-jhipster';

@Directive({
    selector: '[jhiDragndrop]'
})
export class DragndropDirective implements OnInit {

    static readonly FILE_CLEAR = 'file-clear';
    static readonly FILE_DRAGOVER = 'file-dragover';
    static readonly FILE_DROPPED = 'file-dropped';

    protected _elementClass: Array<string> = [];

    @Input() private fileLimit: number;
    private files: Array<File> = new Array<File>();
    @Output() private filesChange: EventEmitter<Array<File>> = new EventEmitter();

    @Input('class')
    @HostBinding('class')
    get elementClass(): string {
        return this._elementClass.join(' ');
    }

    set elementClass(val: string) {
        this._elementClass = val.split(' ');
    }

    constructor(private alertService: JhiAlertService) {
    }

    ngOnInit(): void {
        this.pushClass(DragndropDirective.FILE_CLEAR);
    }

    @HostListener('dragover', ['$event']) onDragOver(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.pushClass(DragndropDirective.FILE_DRAGOVER);
    }

    @HostListener('dragleave', ['$event'])
    public onDragLeave(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.removeClass(DragndropDirective.FILE_DRAGOVER)
    }

    @HostListener('drop', ['$event'])
    public onDrop(evt) {
        evt.preventDefault();
        evt.stopPropagation();

        this.removeClass(DragndropDirective.FILE_DRAGOVER);

        if (evt.dataTransfer.files.length <= this.fileLimit) {
            this.files = new Array<File>();
            for (let idx = 0; idx < evt.dataTransfer.files.length; idx++) {
                this.files.push(evt.dataTransfer.files.item(idx));
            }

            if (this.files.length > 0) {
                this.removeClass(DragndropDirective.FILE_CLEAR);
                this.pushClass(DragndropDirective.FILE_DROPPED);
            }

            this.filesChange.emit(this.files);
        } else {
            this.alertService.error('Only ' + this.fileLimit + ' file(s) at a time')
        }
    }

    private pushClass(newClass) {
        if (this._elementClass.indexOf(newClass) === -1) {
            this._elementClass.push(newClass)
        }
    }

    private removeClass(oldClass) {
        this._elementClass = this._elementClass.filter((currentClass) => currentClass !== oldClass);
    }
}
