import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { RestResponse} from './common.models'
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ResponseService {
    constructor(
        private http: Http,
        private router: Router) { }

    public get<T>(path: string): Observable<T> {
        const headers = new Headers();
        this.createHeaders(headers);
        return this.http.get(path, {
            headers: headers
        }).map((res: Response) => {
            return this.processResponse<T>(res);
            }).catch((error) => {
                if (error.status === 401) {
                this.navigateToLoginPage();
            }
                return Observable.throw(error);
            });
    }

    public post<T>(path: string, data: any): Observable<T> {
        const headers = new Headers();
        this.createHeaders(headers);
        return this.http.post(path,
            JSON.stringify(data), {
            headers: headers
        }).map((res: Response) => {
            return this.processResponse<T>(res);
        }).catch((error) => {
            if (error.status === 401) {
                this.navigateToLoginPage();
            }
            return Observable.throw(error);
        });
    }

    private processResponse<T>(response: Response): T {
        if (response.status === 401) {
            this.navigateToLoginPage();
        }
        if (response.status < 200) {
            throw Error('Bad response status: ' + response.status);
        }
        const restResponse: RestResponse<T> = response.json();
        if (restResponse.isSuccess) {
            return restResponse.data;
        } else {
            throw Error(restResponse.errorMessage);
        }
    }

    private createHeaders(headers: Headers) {
        headers.append('Content-Type', 'application/json');
        const token = localStorage.getItem('token');
        if (!token) {
            this.navigateToLoginPage();
        }
        headers.append('Authorization', 'Bearer ' + token);
    }

    private navigateToLoginPage() {
        this.router.navigate(['/login']);
    }
}
