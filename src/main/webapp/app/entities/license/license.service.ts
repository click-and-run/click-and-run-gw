import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { JhiDateUtils } from 'ng-jhipster';

import { License } from './license.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class LicenseService {

    private resourceUrl = 'clickandrun/api/licenses';

    constructor(private http: Http, private dateUtils: JhiDateUtils) { }

    create(license: License): Observable<License> {
        const copy = this.convert(license);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            this.convertItemFromServer(jsonResponse);
            return jsonResponse;
        });
    }

    update(license: License): Observable<License> {
        const copy = this.convert(license);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            this.convertItemFromServer(jsonResponse);
            return jsonResponse;
        });
    }

    find(id: number): Observable<License> {
        return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
            const jsonResponse = res.json();
            this.convertItemFromServer(jsonResponse);
            return jsonResponse;
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
        for (let i = 0; i < jsonResponse.length; i++) {
            this.convertItemFromServer(jsonResponse[i]);
        }
        return new ResponseWrapper(res.headers, jsonResponse, res.status);
    }

    private convertItemFromServer(entity: any) {
        entity.validSince = this.dateUtils
            .convertDateTimeFromServer(entity.validSince);
        entity.validUntil = this.dateUtils
            .convertDateTimeFromServer(entity.validUntil);
    }

    private convert(license: License): License {
        const copy: License = Object.assign({}, license);

        copy.validSince = this.dateUtils.toDate(license.validSince);

        copy.validUntil = this.dateUtils.toDate(license.validUntil);
        return copy;
    }
}
