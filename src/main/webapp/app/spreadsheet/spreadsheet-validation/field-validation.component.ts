import { Component, Input, OnInit } from '@angular/core';
import { FieldValidationModel } from '../models/validation.model';

@Component({
    selector: 'jhi-field-validation',
    templateUrl: './field-validation.component.html',
    styles: []
})
export class FieldValidationComponent implements OnInit {
    @Input() public fieldValidation: FieldValidationModel;

    constructor() {
    }

    ngOnInit() {
    }

}
