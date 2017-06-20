import { Component, OnInit } from '@angular/core';
import {TestService} from './test.service'

@Component({
    selector: 'test-component',
    templateUrl: 'test.tpl.html'
})


export class TestComponent implements OnInit {

constructor(private testService: TestService) { }

   apiValues: string[] = [];

    ngOnInit(): void {
           this.testService.getValues().subscribe(elems => {
            this.apiValues = elems;
        });;
    }

}