import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { LicenseComponent } from './license.component';
import { LicenseDetailComponent } from './license-detail.component';
import { LicensePopupComponent } from './license-dialog.component';
import { LicenseDeletePopupComponent } from './license-delete-dialog.component';

@Injectable()
export class LicenseResolvePagingParams implements Resolve<any> {

    constructor(private paginationUtil: JhiPaginationUtil) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        const sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
      };
    }
}

export const licenseRoute: Routes = [
    {
        path: 'license',
        component: LicenseComponent,
        resolve: {
            'pagingParams': LicenseResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'clickandrungwApp.license.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'license/:id',
        component: LicenseDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'clickandrungwApp.license.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const licensePopupRoute: Routes = [
    {
        path: 'license-new',
        component: LicensePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'clickandrungwApp.license.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'license/:id/edit',
        component: LicensePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'clickandrungwApp.license.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'license/:id/delete',
        component: LicenseDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'clickandrungwApp.license.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
