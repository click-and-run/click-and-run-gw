import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { LearnerComponent } from './learner.component';
import { LearnerDetailComponent } from './learner-detail.component';
import { LearnerPopupComponent } from './learner-dialog.component';
import { LearnerDeletePopupComponent } from './learner-delete-dialog.component';

@Injectable()
export class LearnerResolvePagingParams implements Resolve<any> {

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

export const learnerRoute: Routes = [
    {
        path: 'learner',
        component: LearnerComponent,
        resolve: {
            'pagingParams': LearnerResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Learners'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'learner/:id',
        component: LearnerDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Learners'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const learnerPopupRoute: Routes = [
    {
        path: 'learner-new',
        component: LearnerPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Learners'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'learner/:id/edit',
        component: LearnerPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Learners'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'learner/:id/delete',
        component: LearnerDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Learners'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
