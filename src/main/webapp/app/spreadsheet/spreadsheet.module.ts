import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpreadsheetComponent } from './spreadsheet.component';
import { SpreadsheetHandlerComponent } from './spreadsheet-handler/spreadsheet-handler.component';
import { DragndropModule } from '../dragndrop/dragndrop.module';

@NgModule({
    imports: [
        CommonModule,
        DragndropModule
    ],
    declarations: [
        SpreadsheetComponent,
        SpreadsheetHandlerComponent
    ], exports: [
        SpreadsheetComponent
    ]
})
export class SpreadsheetModule {
}
