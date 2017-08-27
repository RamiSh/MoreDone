import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { environment } from '../../environments/environment';


@Injectable()
export class ApiService {
    private apiEndpoint: String = environment.apiRoot + '/api/';
    private headers: Headers;
    private authorization: string;
    constructor(private http: Http) {
        this.buildSecuredHeader();
    }

    private getJson(response: Response) {
        return response.json();
    }

    private buildSecuredHeader() {
        this.headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
        });
    }

    checkForError(response: Response): any {

        if (response.status >= 200 && response.status < 300) {
            return response;
        } else {
            const error = new Error(response.statusText);
            error['response'] = response;
            return error;
        }
    }


    get(path): Observable<any> {
        this.buildSecuredHeader();
        return this.http.get(`${this.apiEndpoint}${path}`, { headers: this.headers })
            .map(this.checkForError)
            .catch(
            err => {

                return Observable.throw(err);
            }
            )
            .map(this.getJson);
    }

    post(path: string, formData: any): Observable<any> {
        this.buildSecuredHeader();
        const url = `${this.apiEndpoint}${path}`;
        return this.http.post(url, formData, { headers: this.headers })
            .map(this.checkForError)
            .catch(
            err => {

                return Observable.throw(err);
            }
            )
            .map(this.getJson);
    }

    delete(path: string): Observable<any> {
        this.buildSecuredHeader();
        const url = `${this.apiEndpoint}${path}`;
        return this.http.delete(url, { headers: this.headers })
            .map(this.checkForError)
            .catch(
            err => {

                return Observable.throw(err);
            }
            )
            .map(this.getJson);
    }

    formUrlEncodedPost(path, formData): Observable<any> {
        const formPostHeaders = new Headers({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return this.http.post(`${this.apiEndpoint}${path}`, formData, { headers: formPostHeaders })
            .map(this.checkForError)
            .catch(
            err => {

                return Observable.throw(err);
            }
            )
            .map(this.getJson);
    }
}
