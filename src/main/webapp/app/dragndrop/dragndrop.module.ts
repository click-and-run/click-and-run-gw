import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragndropComponent } from './dragndrop.component';
import { DragndropDirective } from './dragndrop.directive';
import { ClickandrungwSharedCommonModule } from '../shared';

@NgModule({
    imports: [
        CommonModule,
        ClickandrungwSharedCommonModule
    ],
    declarations: [
        DragndropComponent,
        DragndropDirective
    ],
    exports: [
        DragndropComponent,
        DragndropDirective
    ]
})
export class DragndropModule {
}
