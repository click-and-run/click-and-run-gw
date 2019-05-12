import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpreadsheetComponent } from './spreadsheet.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        SpreadsheetComponent
    ], exports: [
        SpreadsheetComponent
    ]
})
export class SpreadsheetModule {
}
