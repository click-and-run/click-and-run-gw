import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'jhi-dragndrop',
    templateUrl: './dragndrop.component.html',
    styleUrls: ['./dragndrop.component.css']
})
export class DragndropComponent implements OnInit {

    @Input() public fileLimit: number;

    files: Array<File> = new Array<File>();
    @Output() private filesChange: EventEmitter<Array<File>> = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    public clearFiles() {
        this.files = new Array<File>();
    }
}
