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

    public validateWorkbook(file) {
        console.log(`validating ${file.name}`);
        this.subs.push(this.spreadsheetService.validate(this.resource, file).subscribe((wbv) => {
            this.workbookValidation = wbv;
            this.spreadsheetService.shareValidation(this.workbookValidation);
            if (this.workbookValidation.valid) {
                this.file = file;
            } else {
                this.file = undefined;
            }
        }));
    }

    processWB() {
        this.subs.push(this.spreadsheetService.process(this.resource, this.file).subscribe((response) => {
            this.alertService.success(`File ${this.file.name} was processed with success.`);
            this.workbookValidation = undefined;
            this.spreadsheetService.shareValidation(undefined);
            this.file = undefined;
            this.dragndropComponent.clearFiles();
        }));
    }

    clear() {
        this.dragndropComponent.clearFiles();
    }

    ngOnDestroy() {
        this.subs.forEach((sub) => sub.unsubscribe())
    }
}
