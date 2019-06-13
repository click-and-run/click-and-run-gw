import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager  } from 'ng-jhipster';

import { Learner } from './learner.model';
import { LearnerService } from './learner.service';

@Component({
    selector: 'jhi-learner-detail',
    templateUrl: './learner-detail.component.html'
})
export class LearnerDetailComponent implements OnInit, OnDestroy {

    learner: Learner;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private learnerService: LearnerService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInLearners();
    }

    load(id) {
        this.learnerService.find(id).subscribe((learner) => {
            this.learner = learner;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInLearners() {
        this.eventSubscriber = this.eventManager.subscribe(
            'learnerListModification',
            (response) => this.load(this.learner.id)
        );
    }
}
