import { Component, Input, OnInit } from '@angular/core';
import { RowValidationModel } from '../models/validation.model';

@Component({
    selector: 'jhi-row-validation',
    templateUrl: './row-validation.component.html',
    styleUrls: []
})
export class RowValidationComponent implements OnInit {
    @Input() public rowValidation: RowValidationModel;
    @Input() public severity: 'error' | 'warning';

    constructor() {
    }

    ngOnInit() {
    }

}
