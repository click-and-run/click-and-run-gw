import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Learner } from './learner.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class LearnerService {

    private resourceUrl = 'clickandrun/api/learners';

    constructor(private http: Http) { }

    create(learner: Learner): Observable<Learner> {
        const copy = this.convert(learner);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    update(learner: Learner): Observable<Learner> {
        const copy = this.convert(learner);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    find(id: number): Observable<Learner> {
        return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
            return res.json();
        });
    }

    query(req?: any): Observable<ResponseWrapper> {
        const options = createRequestOption(req);
        return this.http.get(this.resourceUrl, options)
            .map((res: Response) => this.convertResponse(res));
    }

    delete(id: number): Observable<Response> {
        return this.http.delete(`${this.resourceUrl}/${id}`);
    }

    private convertResponse(res: Response): ResponseWrapper {
        const jsonResponse = res.json();
        return new ResponseWrapper(res.headers, jsonResponse, res.status);
    }

    private convert(learner: Learner): Learner {
        const copy: Learner = Object.assign({}, learner);
        return copy;
    }
}
