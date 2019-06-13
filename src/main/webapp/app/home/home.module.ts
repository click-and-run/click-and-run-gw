import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ClickandrungwSharedModule } from '../shared';

import { HOME_ROUTE, HomeComponent } from './';
import { SpreadsheetModule } from '../spreadsheet/spreadsheet.module';

@NgModule({
    imports: [
        ClickandrungwSharedModule,
        RouterModule.forRoot([HOME_ROUTE], {useHash: true}),
        SpreadsheetModule
    ],
    declarations: [
        HomeComponent,
    ],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ClickandrungwHomeModule {
}
