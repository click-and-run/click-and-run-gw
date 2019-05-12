import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'jhi-dragndrop',
    templateUrl: './dragndrop.component.html',
    styleUrls: ['./dragndrop.component.css']
})
export class DragndropComponent implements OnInit {

    @Input() public fileLimit: number;

    public fileList: any = [];

    @Output() private fileListEventEmitter: EventEmitter<FileList> = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    onFilesChange(files: FileList) {
        this.fileList = files;
        this.fileListEventEmitter.emit(files);
    }
}
