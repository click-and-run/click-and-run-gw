import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DragndropComponent } from '../dragndrop/dragndrop.component';
import { WorkbookValidationModel } from './models/validation.model';
import { Subscription } from 'rxjs';
import { SpreadsheetService } from './spreadsheet.service';
import { JhiAlertService } from 'ng-jhipster';

@Component({
  selector: 'jhi-spreadsheet',
  templateUrl: './spreadsheet.component.html',
  styles: []
})
export class SpreadsheetComponent implements OnInit, OnDestroy {

    @ViewChild(DragndropComponent)
    private  dragndropComponent: DragndropComponent;

    public resource = 'registration';
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
