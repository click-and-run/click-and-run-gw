import { BaseEntity } from './../../shared';

const enum Service {
    'COURSE',
    'ASSESSMENT',
    'NEWS',
    'VISIO'
}

const enum Language {
    'FR_FR',
    'NL_NL',
    'DE_DE',
    'ES_ES',
    'IT_IT',
    'EN_GB'
}

export class License implements BaseEntity {
    constructor(
        public id?: number,
        public service?: Service,
        public studyLanguage?: Language,
        public validSince?: any,
        public validUntil?: any,
        public consumed?: boolean,
        public learner?: BaseEntity,
    ) {
        this.consumed = false;
    }
}
