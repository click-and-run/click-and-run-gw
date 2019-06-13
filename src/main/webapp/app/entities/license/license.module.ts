import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ClickandrungwSharedModule } from '../../shared';
import {
    LicenseService,
    LicensePopupService,
    LicenseComponent,
    LicenseDetailComponent,
    LicenseDialogComponent,
    LicensePopupComponent,
    LicenseDeletePopupComponent,
    LicenseDeleteDialogComponent,
    licenseRoute,
    licensePopupRoute,
    LicenseResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...licenseRoute,
    ...licensePopupRoute,
];

@NgModule({
    imports: [
        ClickandrungwSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        LicenseComponent,
        LicenseDetailComponent,
        LicenseDialogComponent,
        LicenseDeleteDialogComponent,
        LicensePopupComponent,
        LicenseDeletePopupComponent,
    ],
    entryComponents: [
        LicenseComponent,
        LicenseDialogComponent,
        LicensePopupComponent,
        LicenseDeleteDialogComponent,
        LicenseDeletePopupComponent,
    ],
    providers: [
        LicenseService,
        LicensePopupService,
        LicenseResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ClickandrungwLicenseModule {}
