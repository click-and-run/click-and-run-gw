import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { SpreadsheetService } from '../spreadsheet.service';
import { Subscription } from 'rxjs';
import { WorkbookValidationModel } from '../models/validation.model';
import { JhiAlertService } from 'ng-jhipster';
import { DragndropComponent } from '../../dragndrop/dragndrop.component';

@Component({
    selector: 'jhi-spreadsheet-handler',
    templateUrl: './spreadsheet-handler.component.html',
    styles: []
})
export class SpreadsheetHandlerComponent implements OnInit, OnDestroy {

    @ViewChild(DragndropComponent)
    private  dragndropComponent: DragndropComponent;

    @Input() public resource: string;
    public workbookValidation: WorkbookValidationModel;

    private subs: Array<Subscription> = new Array<Subscription>();
    public file: File;

    constructor(private spreadsheetService: SpreadsheetService, private alertService: JhiAlertService) {
    }

    ngOnInit() {
    }

    public validateWorkbook(files) {
        if (files.length > 0) {
            const file = files[0];
            this.subs.push(this.spreadsheetService.validate(this.resource, file).subscribe((wbv) => {
                this.workbookValidation = wbv;
                this.spreadsheetService.shareValidation(this.workbookValidation);
                if (this.workbookValidation.valid) {
                    this.file = file;
                } else {
                    this.file = undefined;
                }
            }));

            console.log(`validating ${file.name}`);
        } else {
            this.resetValidation();
        }
    }

    processWB() {
        this.subs.push(this.spreadsheetService.process(this.resource, this.file).subscribe((response) => {
            this.alertService.success(`File ${this.file.name} was processed with success.`);
            this.resetValidation();
            this.dragndropComponent.clearFiles();
        }));
    }

    ngOnDestroy() {
        this.subs.forEach((sub) => sub.unsubscribe())
    }

    private resetValidation() {
        this.file = undefined;
        this.workbookValidation = undefined;
        this.spreadsheetService.shareValidation(undefined);
    }
}
