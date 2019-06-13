import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager  } from 'ng-jhipster';

import { License } from './license.model';
import { LicenseService } from './license.service';

@Component({
    selector: 'jhi-license-detail',
    templateUrl: './license-detail.component.html'
})
export class LicenseDetailComponent implements OnInit, OnDestroy {

    license: License;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private licenseService: LicenseService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInLicenses();
    }

    load(id) {
        this.licenseService.find(id).subscribe((license) => {
            this.license = license;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInLicenses() {
        this.eventSubscriber = this.eventManager.subscribe(
            'licenseListModification',
            (response) => this.load(this.license.id)
        );
    }
}
