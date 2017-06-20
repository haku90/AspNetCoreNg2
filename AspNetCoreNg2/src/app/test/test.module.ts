import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { TestComponent } from './test.component';
import { TestService } from './test.service'
import { testRouting } from './test.routing'

@NgModule({
    imports: [ CommonModule, testRouting],
    exports: [],
    declarations: [ TestComponent ],
    providers: [ TestService ]
})

export class TestModule { }