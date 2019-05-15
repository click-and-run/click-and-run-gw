import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { SpreadsheetService } from '../spreadsheet.service';
import { Subscription } from 'rxjs';
import { WorkbookValidationModel } from '../models/validation.model';

@Component({
    selector: 'jhi-spreadsheet-handler',
    templateUrl: './spreadsheet-handler.component.html',
    styles: []
})
export class SpreadsheetHandlerComponent implements OnInit, OnDestroy {

    @Input() public resource: string;
    private sub: Subscription;
    private wb: WorkbookValidationModel;

    constructor(private spreadsheetService: SpreadsheetService) {
    }

    ngOnInit() {
    }

    public validateFile(file) {
        this.sub = this.spreadsheetService.validate(this.resource, file).subscribe((value) => {
            console.log(value);
            this.wb = value;
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe()
    }
}
