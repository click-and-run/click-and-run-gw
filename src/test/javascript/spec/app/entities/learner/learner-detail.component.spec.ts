/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { JhiDateUtils, JhiDataUtils, JhiEventManager } from 'ng-jhipster';
import { ClickandrungwTestModule } from '../../../test.module';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { LearnerDetailComponent } from '../../../../../../main/webapp/app/entities/learner/learner-detail.component';
import { LearnerService } from '../../../../../../main/webapp/app/entities/learner/learner.service';
import { Learner } from '../../../../../../main/webapp/app/entities/learner/learner.model';

describe('Component Tests', () => {

    describe('Learner Management Detail Component', () => {
        let comp: LearnerDetailComponent;
        let fixture: ComponentFixture<LearnerDetailComponent>;
        let service: LearnerService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [ClickandrungwTestModule],
                declarations: [LearnerDetailComponent],
                providers: [
                    JhiDateUtils,
                    JhiDataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    LearnerService,
                    JhiEventManager
                ]
            }).overrideTemplate(LearnerDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(LearnerDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(LearnerService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new Learner(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.learner).toEqual(jasmine.objectContaining({id: 10}));
            });
        });
    });

});
