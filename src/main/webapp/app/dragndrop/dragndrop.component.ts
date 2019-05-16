import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'jhi-dragndrop',
    templateUrl: './dragndrop.component.html',
    styleUrls: ['./dragndrop.component.css']
})
export class DragndropComponent implements OnInit {

    @Input() public fileLimit: number;

    public fileList: Array<File> = new Array<File>();

    @Output() private fileListEventEmitter: EventEmitter<Array<File>> = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    onFilesChange(files: Array<File>) {
        this.fileList = files;
        this.fileListEventEmitter.emit(files);
    }
}
