import { NgModule, Optional, SkipSelf } from '@angular/core';
import { ResponseService } from './response.service';

@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [ ResponseService ],
})


export class CommonModule {
    constructor(@Optional() @SkipSelf() parentCore: CommonModule) {
        if (parentCore) {
            throw new Error('CoreModule allready imported! Please use it only in main appModule');
        }
    }
 }