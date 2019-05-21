import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpreadsheetComponent } from './spreadsheet.component';
import { DragndropModule } from '../dragndrop/dragndrop.module';
import { SpreadsheetService } from './spreadsheet.service';
import { SpreadsheetValidationComponent } from './spreadsheet-validation/spreadsheet-validation.component';
import { SheetValidationComponent } from './spreadsheet-validation/sheet-validation.component';
import { TableValidationComponent } from './spreadsheet-validation/table-validation.component';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { NgJhipsterModule } from 'ng-jhipster';
import { ClickandrungwSharedCommonModule } from '../shared';
import { RouterModule } from '@angular/router';
import { spreadsheetRoute } from './spreadsheet.route';

@NgModule({
    imports: [
        CommonModule,
        DragndropModule,
        NgbTabsetModule,
        NgJhipsterModule,
        ClickandrungwSharedCommonModule,
        RouterModule.forRoot(spreadsheetRoute, {useHash: true})
    ],
    declarations: [
        SpreadsheetComponent,
        SpreadsheetValidationComponent,
        SheetValidationComponent,
        TableValidationComponent
    ], exports: [
        SpreadsheetComponent
    ], providers: [
        SpreadsheetService
    ]
})
export class SpreadsheetModule {
}
