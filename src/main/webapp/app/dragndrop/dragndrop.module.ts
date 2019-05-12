import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragndropComponent } from './dragndrop.component';
import { DragndropDirective } from './dragndrop.directive';

@NgModule({
    imports: [
        CommonModule
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
