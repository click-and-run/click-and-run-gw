import { Routes } from '@angular/router';
import { UserRouteAccessService } from '../shared';
import { SpreadsheetComponent } from './spreadsheet.component';

export const spreadsheetRoute: Routes = [
    {
        path: 'spreadsheet',
        component: SpreadsheetComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'validation.title'
        },
        canActivate: [UserRouteAccessService]
    }
];
