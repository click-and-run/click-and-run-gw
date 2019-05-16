import { Component, OnDestroy, OnInit } from '@angular/core';
import { SpreadsheetService } from '../spreadsheet.service';
import { WorkbookValidationModel } from '../models/validation.model';
import { Subscription } from 'rxjs';

@Component({
    selector: 'jhi-spreadsheet-validation',
    templateUrl: './spreadsheet-validation.component.html',
    styles: []
})
export class SpreadsheetValidationComponent implements OnInit, OnDestroy {
    public workbookValidation: WorkbookValidationModel;
    private subs: Array<Subscription> = new Array<Subscription>();

    constructor(private spreadsheetService: SpreadsheetService) {
    }

    ngOnInit() {
        this.subs.push(
            this.spreadsheetService.sharedValidation.subscribe((wbv) => {
                this.workbookValidation = wbv;
            }));
    }

    ngOnDestroy() {
        this.subs.forEach((sub) => sub.unsubscribe());
    }

    getSheetValidations() {
        return Array.from(this.workbookValidation.validations.entries());
    }
}
