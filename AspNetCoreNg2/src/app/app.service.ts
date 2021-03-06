﻿﻿import { Injectable } from '@angular/core';
import { ResponseService } from '../commons/response.service'
import { Observable } from "rxjs/Observable";
import { Http } from '@angular/http'
import 'rxjs/Rx';

@Injectable()
export class AppService {

constructor(private http: Http) { }

  getValues(): any {
    return this.http.get('/api/values').map(value => { return value.json();});
  }
}