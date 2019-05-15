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
    private sub: Subscription;

    constructor(private spreadsheetService: SpreadsheetService) {
    }

    ngOnInit() {
        this.sub = this.spreadsheetService.sharedValidation.subscribe((wbv) => {
            this.workbookValidation = wbv;
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getSheetValidations() {
        return Array.from(this.workbookValidation.validations.entries());
    }
}
