import { Component, Input, OnInit } from '@angular/core';
import { HeaderValidationModel, RowValidationModel } from '../models/validation.model';

@Component({
    selector: 'jhi-table',
    templateUrl: './table-validation.component.html',
    styles: []
})
export class TableValidationComponent implements OnInit {
    @Input() public rows: Array<RowValidationModel> | Array<HeaderValidationModel>;
    @Input() public rowType: 'header' | 'content' = 'content';

    constructor() {
    }

    ngOnInit() {
    }

}
