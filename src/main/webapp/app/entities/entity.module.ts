import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ClickandrungwLearnerModule } from './learner/learner.module';
import { ClickandrungwLicenseModule } from './license/license.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        ClickandrungwLearnerModule,
        ClickandrungwLicenseModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ClickandrungwEntityModule {}
