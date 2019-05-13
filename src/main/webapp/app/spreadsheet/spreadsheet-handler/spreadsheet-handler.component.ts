import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { SpreadsheetService } from '../spreadsheet.service';
import { observable } from 'rxjs/symbol/observable';
import { Subscription } from 'rxjs';

@Component({
    selector: 'jhi-spreadsheet-handler',
    templateUrl: './spreadsheet-handler.component.html',
    styles: []
})
export class SpreadsheetHandlerComponent implements OnInit, OnDestroy {

    @Input() public resource: string;
    private sub: Subscription;

    constructor(private spreadsheetService: SpreadsheetService) {
    }

    ngOnInit() {
    }

    public validateFile(file) {
        this.sub = this.spreadsheetService.validate(this.resource, file).subscribe((value) => console.log(value));
    }

    ngOnDestroy() {
        this.sub.unsubscribe()
    }
}
