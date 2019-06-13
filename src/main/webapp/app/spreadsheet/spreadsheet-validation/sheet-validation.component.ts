import { Component, Input, OnInit } from '@angular/core';
import { SheetValidationModel } from '../models/validation.model';

@Component({
    selector: 'jhi-sheet-validation',
    templateUrl: './sheet-validation.component.html',
    styles: []
})
export class SheetValidationComponent implements OnInit {
    @Input() public name: string;
    @Input() public validation: SheetValidationModel;

    constructor() {
    }

    ngOnInit() {
    }

}
