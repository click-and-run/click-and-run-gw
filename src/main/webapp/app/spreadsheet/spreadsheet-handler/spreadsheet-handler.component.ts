import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'jhi-spreadsheet-handler',
    templateUrl: './spreadsheet-handler.component.html',
    styles: []
})
export class SpreadsheetHandlerComponent implements OnInit {

    @Input() public title = 'spreadsheet title';

    constructor() {
    }

    ngOnInit() {
    }

}
