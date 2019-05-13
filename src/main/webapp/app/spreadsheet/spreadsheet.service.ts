import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SpreadsheetService {
    private apiUrl = 'http://127.0.0.1:8081/api';

    constructor(private http: Http) {
    }

    public validate(resource, file) {
        const fullUrl = `${this.apiUrl}/${resource}/validate`;
        console.log(`POST ${fullUrl}`);
        return this.http.post(fullUrl, {file});
    }
}
