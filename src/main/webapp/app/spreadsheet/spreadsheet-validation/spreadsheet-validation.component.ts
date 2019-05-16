import { Component, OnDestroy, OnInit } from '@angular/core';
import { SpreadsheetService } from '../spreadsheet.service';
import { WorkbookValidationModel } from '../models/validation.model';
import { Subscription } from 'rxjs';
import { JhiAlertService, JhiEventManager } from 'ng-jhipster';

@Component({
    selector: 'jhi-spreadsheet-validation',
    templateUrl: './spreadsheet-validation.component.html',
    styles: []
})
export class SpreadsheetValidationComponent implements OnInit, OnDestroy {
    public workbookValidation: WorkbookValidationModel;
    private subs: Array<Subscription> = new Array<Subscription>();

    constructor(private spreadsheetService: SpreadsheetService, private eventManager: JhiEventManager, private alertService: JhiAlertService) {
    }

    ngOnInit() {
        this.subs.push(
            this.spreadsheetService.sharedValidation.subscribe((wbv) => {
                this.workbookValidation = wbv;
            }),
            this.eventManager.subscribe('clickandrungwApp.httpError', (error) => {
                if (error.status === 400) {
                    this.alertService.error('Request failed, please retry with different arguments.');
                } else {
                    this.alertService.error('Mmh, It seems you found an undesired feature. We sent this "surprise" to the IT team.')
                }
            }));
    }

    ngOnDestroy() {
        this.subs.forEach((sub) => sub.unsubscribe());
    }

    getSheetValidations() {
        return Array.from(this.workbookValidation.validations.entries());
    }
}
