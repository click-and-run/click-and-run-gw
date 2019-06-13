import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { Learner } from './learner.model';
import { LearnerPopupService } from './learner-popup.service';
import { LearnerService } from './learner.service';

@Component({
    selector: 'jhi-learner-delete-dialog',
    templateUrl: './learner-delete-dialog.component.html'
})
export class LearnerDeleteDialogComponent {

    learner: Learner;

    constructor(
        private learnerService: LearnerService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.learnerService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'learnerListModification',
                content: 'Deleted an learner'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-learner-delete-popup',
    template: ''
})
export class LearnerDeletePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private learnerPopupService: LearnerPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.learnerPopupService
                .open(LearnerDeleteDialogComponent as Component, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
