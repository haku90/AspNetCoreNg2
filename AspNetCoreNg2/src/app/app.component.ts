import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service'
import { Subscription }   from 'rxjs/Subscription';
@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})

export class AppComponent implements OnInit{

constructor(private appService: AppService) { }

  //  apiValues: string[] = [];

   ngOnInit() {

    //  this.appService.getValues().subscribe(elems => {
    //         this.apiValues = elems;
    //     });;

   }
}
