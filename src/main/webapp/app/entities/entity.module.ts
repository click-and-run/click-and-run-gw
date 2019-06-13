import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { ClickandrungwLicenseModule } from './license/license.module';
import { ClickandrungwLearnerModule } from './learner/learner.module';

/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        ClickandrungwLicenseModule,
        ClickandrungwLearnerModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ClickandrungwEntityModule {}
