import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { WorkbookValidationModel } from './models/validation.model';

@Injectable()
export class SpreadsheetService {
    private apiUrl = 'http://127.0.0.1:8081/api';

    constructor(private http: Http) {
    }

    public validate(resource, file): Observable<WorkbookValidationModel> {
        const fullUrl = `${this.apiUrl}/${resource}/validate`;

        const formData = new FormData();
        formData.append('file', file);

        return this.http.post(fullUrl, formData)
            .map((response) => (<WorkbookValidationModel>response.json()));
    }
}
