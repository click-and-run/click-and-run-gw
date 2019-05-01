import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { Learner } from './learner.model';
import { LearnerPopupService } from './learner-popup.service';
import { LearnerService } from './learner.service';

@Component({
    selector: 'jhi-learner-dialog',
    templateUrl: './learner-dialog.component.html'
})
export class LearnerDialogComponent implements OnInit {

    learner: Learner;
    isSaving: boolean;

    constructor(
        public activeModal: NgbActiveModal,
        private alertService: JhiAlertService,
        private learnerService: LearnerService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.learner.id !== undefined) {
            this.subscribeToSaveResponse(
                this.learnerService.update(this.learner));
        } else {
            this.subscribeToSaveResponse(
                this.learnerService.create(this.learner));
        }
    }

    private subscribeToSaveResponse(result: Observable<Learner>) {
        result.subscribe((res: Learner) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError(res));
    }

    private onSaveSuccess(result: Learner) {
        this.eventManager.broadcast({ name: 'learnerListModification', content: 'OK'});
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
}

@Component({
    selector: 'jhi-learner-popup',
    template: ''
})
export class LearnerPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private learnerPopupService: LearnerPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.learnerPopupService
                    .open(LearnerDialogComponent as Component, params['id']);
            } else {
                this.learnerPopupService
                    .open(LearnerDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
