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
    public workbookValidation: WorkbookValidationModel;

    constructor(private spreadsheetService: SpreadsheetService) {
    }

    ngOnInit() {
    }

    public validateWorkbook(file) {
        this.sub = this.spreadsheetService.validate(this.resource, file).subscribe((wbv) => {
            console.log(wbv);
            this.workbookValidation = wbv;
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe()
    }

    processWB() {
        console.log(this.workbookValidation !== undefined && this.workbookValidation.valid);
        console.log(`You want to process ${this.workbookValidation}`)
    }

    seeValidation() {
        console.log('You want to see the validation');
        this.spreadsheetService.shareValidation(this.workbookValidation);
    }
}
