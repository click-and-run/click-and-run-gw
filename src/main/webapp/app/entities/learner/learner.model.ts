import { BaseEntity } from './../../shared';

const enum Language {
    'FR_FR',
    'NL_BE',
    'DE_DE',
    'ES_ES',
    'IT_IT',
    'EN_GB'
}

export class Learner implements BaseEntity {
    constructor(
        public id?: number,
        public firstName?: string,
        public lastName?: string,
        public login?: string,
        public interfaceLanguage?: Language,
        public licenses?: BaseEntity[],
    ) {
    }
}
