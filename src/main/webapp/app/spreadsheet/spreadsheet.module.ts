import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpreadsheetComponent } from './spreadsheet.component';
import { SpreadsheetHandlerComponent } from './spreadsheet-handler/spreadsheet-handler.component';
import { DragndropModule } from '../dragndrop/dragndrop.module';
import { SpreadsheetService } from './spreadsheet.service';
import { SpreadsheetValidationComponent } from './spreadsheet-validation/spreadsheet-validation.component';
import { SheetValidationComponent } from './spreadsheet-validation/sheet-validation.component';
import { FieldValidationComponent } from './spreadsheet-validation/field-validation.component';

@NgModule({
    imports: [
        CommonModule,
        DragndropModule
    ],
    declarations: [
        SpreadsheetComponent,
        SpreadsheetHandlerComponent,
        SpreadsheetValidationComponent,
        SheetValidationComponent,
        FieldValidationComponent
    ], exports: [
        SpreadsheetComponent
    ], providers: [
        SpreadsheetService
    ]
})
export class SpreadsheetModule {
}
