import {
    Directive,
    ElementRef,
    EventEmitter,
    HostBinding,
    HostListener,
    Input,
    OnInit,
    Output,
    Renderer2
} from '@angular/core';
import { JhiAlertService } from 'ng-jhipster';

@Directive({
    selector: '[jhiDragndrop]'
})
export class DragndropDirective implements OnInit {

    @Input() private fileLimit: number;

    @Input() private files: Array<File> = new Array<File>();
    @Output() private filesChange: EventEmitter<Array<File>> = new EventEmitter();

    @HostBinding('class.file-dropped')
    get filePresence(): boolean {
        return this.files.length > 0
    }

    @HostBinding('class.file-clear')
    get fileAbsence(): boolean {
        return this.files.length === 0
    }

    @HostBinding('class.file-dragged') fileDragged = false;

    private fileInput: any;

    constructor(private alertService: JhiAlertService, private el: ElementRef, private renderer: Renderer2) {
    }

    ngOnInit(): void {
        this.fileInput = this.renderer.createElement('input');
        this.renderer.setStyle(this.fileInput, 'visibility', 'collapse');
        this.renderer.setStyle(this.fileInput, 'position', 'absolute');
        this.renderer.setAttribute(this.fileInput, 'type', 'file');
        this.renderer.appendChild(this.el.nativeElement, this.fileInput);
    }

    @HostListener('dragover', ['$event']) onDragOver(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.fileDragged = true;
    }

    @HostListener('dragleave', ['$event'])
    public onDragLeave(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.fileDragged = false;
    }

    @HostListener('drop', ['$event'])
    public onDrop(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.fileDragged = false;

        if (evt.dataTransfer.files.length <= this.fileLimit) {
            this.files = new Array<File>();
            for (let idx = 0; idx < evt.dataTransfer.files.length; idx++) {
                this.files.push(evt.dataTransfer.files.item(idx));
            }

            this.filesChange.emit(this.files);
        } else {
            this.alertService.error('Only ' + this.fileLimit + ' file(s) at a time')
        }
    }

    @HostListener('click', ['$event'])
    public onClick(evt) {
        if (this.fileAbsence) {
            this.fileInput.click();
        }
    }
}
