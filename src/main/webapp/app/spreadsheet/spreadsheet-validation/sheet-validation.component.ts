import { Component, Input, OnInit } from '@angular/core';
import { SheetValidationModel } from '../models/validation.model';

@Component({
    selector: 'jhi-sheet-validation',
    templateUrl: './sheet-validation.component.html',
    styles: ['h3 {margin: 1rem 0}']
})
export class SheetValidationComponent implements OnInit {
    @Input() public validation: SheetValidationModel;

    constructor() {
    }

    ngOnInit() {
    }

}
