import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpreadsheetComponent } from './spreadsheet.component';
import { SpreadsheetHandlerComponent } from './spreadsheet-handler/spreadsheet-handler.component';
import { DragndropModule } from '../dragndrop/dragndrop.module';
import { SpreadsheetService } from './spreadsheet.service';

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
    ], providers: [
        SpreadsheetService
    ]
})
export class SpreadsheetModule {
}
