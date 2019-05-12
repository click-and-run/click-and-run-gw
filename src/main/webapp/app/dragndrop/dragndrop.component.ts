import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'jhi-dragndrop',
    templateUrl: './dragndrop.component.html',
    styleUrls: ['./dragndrop.component.css']
})
export class DragndropComponent implements OnInit {

    @Output() private fileListEventEmitter: EventEmitter<FileList> = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    onFilesChange(files: FileList) {
        this.fileListEventEmitter.emit(files);
    }
}
