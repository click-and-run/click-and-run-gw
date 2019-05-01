import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { License } from './license.model';
import { LicensePopupService } from './license-popup.service';
import { LicenseService } from './license.service';
import { Learner, LearnerService } from '../learner';
import { ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-license-dialog',
    templateUrl: './license-dialog.component.html'
})
export class LicenseDialogComponent implements OnInit {

    license: License;
    isSaving: boolean;

    learners: Learner[];

    constructor(
        public activeModal: NgbActiveModal,
        private alertService: JhiAlertService,
        private licenseService: LicenseService,
        private learnerService: LearnerService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.learnerService.query()
            .subscribe((res: ResponseWrapper) => { this.learners = res.json; }, (res: ResponseWrapper) => this.onError(res.json));
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.license.id !== undefined) {
            this.subscribeToSaveResponse(
                this.licenseService.update(this.license));
        } else {
            this.subscribeToSaveResponse(
                this.licenseService.create(this.license));
        }
    }

    private subscribeToSaveResponse(result: Observable<License>) {
        result.subscribe((res: License) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError(res));
    }

    private onSaveSuccess(result: License) {
        this.eventManager.broadcast({ name: 'licenseListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError(error) {
        try {
            error.json();
        } catch (exception) {
            error.message = error.text();
        }
        this.isSaving = false;
        this.onError(error);
    }

    private onError(error) {
        this.alertService.error(error.message, null, null);
    }

    trackLearnerById(index: number, item: Learner) {
        return item.id;
    }
}

@Component({
    selector: 'jhi-license-popup',
    template: ''
})
export class LicensePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private licensePopupService: LicensePopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.licensePopupService
                    .open(LicenseDialogComponent as Component, params['id']);
            } else {
                this.licensePopupService
                    .open(LicenseDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
