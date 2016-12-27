import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import {Welcome} from '../models/home/welcome'

/*
  Generated class for the HomeService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class HomeService {

  url = 'http://localhost:8080/api/home/welcome';
  constructor(public http: Http) {
    console.log('Hello HomeService Provider');
  }

  load(): Observable<Welcome> {
    return this.http.get(`${this.url}`)
      .map(res => <Welcome>res.json());
  }

}
