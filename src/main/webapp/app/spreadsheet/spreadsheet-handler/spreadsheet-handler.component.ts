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
    public wb: WorkbookValidationModel;

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

    processWB() {
        console.log(this.wb !== undefined && this.wb.valid);
        console.log(`You want to process ${this.wb}`)
    }

    seeValidation() {
        console.log('You want to see the validation');
    }
}
