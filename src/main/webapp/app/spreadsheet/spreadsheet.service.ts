import { Injectable, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { WorkbookValidationModel } from './models/validation.model';

@Injectable()
export class SpreadsheetService implements OnDestroy {

    private apiUrl = 'http://127.0.0.1:8081/api';
    public sharedValidation = new BehaviorSubject(undefined);
    private sub: Subscription;

    constructor(private http: Http) {
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    public validate(resource, file): Observable<WorkbookValidationModel> {
        const fullUrl = `${this.apiUrl}/${resource}/validate`;

        const formData = new FormData();
        formData.append('file', file);

        return this.http.post(fullUrl, formData)
            .map((response) => {
                const validations = new Map();

                const wbv = <WorkbookValidationModel>response.json();
                Object.keys(wbv.validations).forEach((key) => validations.set(key, wbv.validations[key]));
                wbv.validations = validations;

                return wbv;
            });
    }

    public process(resource, file) {
        const fullUrl = `${this.apiUrl}/${resource}/process`;

        const formData = new FormData();
        formData.append('file', file);

        return this.http.post(fullUrl, formData);
    }

    shareValidation(wbv: WorkbookValidationModel) {
        this.sharedValidation.next(wbv);
    }
}
