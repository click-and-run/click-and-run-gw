/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { JhiDateUtils, JhiDataUtils, JhiEventManager } from 'ng-jhipster';
import { ClickandrungwTestModule } from '../../../test.module';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { LicenseDetailComponent } from '../../../../../../main/webapp/app/entities/license/license-detail.component';
import { LicenseService } from '../../../../../../main/webapp/app/entities/license/license.service';
import { License } from '../../../../../../main/webapp/app/entities/license/license.model';

describe('Component Tests', () => {

    describe('License Management Detail Component', () => {
        let comp: LicenseDetailComponent;
        let fixture: ComponentFixture<LicenseDetailComponent>;
        let service: LicenseService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [ClickandrungwTestModule],
                declarations: [LicenseDetailComponent],
                providers: [
                    JhiDateUtils,
                    JhiDataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    LicenseService,
                    JhiEventManager
                ]
            }).overrideTemplate(LicenseDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(LicenseDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(LicenseService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new License(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.license).toEqual(jasmine.objectContaining({id: 10}));
            });
        });
    });

});
