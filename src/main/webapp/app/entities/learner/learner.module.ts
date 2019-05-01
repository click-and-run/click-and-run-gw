import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ClickandrungwSharedModule } from '../../shared';
import {
    LearnerService,
    LearnerPopupService,
    LearnerComponent,
    LearnerDetailComponent,
    LearnerDialogComponent,
    LearnerPopupComponent,
    LearnerDeletePopupComponent,
    LearnerDeleteDialogComponent,
    learnerRoute,
    learnerPopupRoute,
    LearnerResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...learnerRoute,
    ...learnerPopupRoute,
];

@NgModule({
    imports: [
        ClickandrungwSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        LearnerComponent,
        LearnerDetailComponent,
        LearnerDialogComponent,
        LearnerDeleteDialogComponent,
        LearnerPopupComponent,
        LearnerDeletePopupComponent,
    ],
    entryComponents: [
        LearnerComponent,
        LearnerDialogComponent,
        LearnerPopupComponent,
        LearnerDeleteDialogComponent,
        LearnerDeletePopupComponent,
    ],
    providers: [
        LearnerService,
        LearnerPopupService,
        LearnerResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ClickandrungwLearnerModule {}
