import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'
// import * as moment from 'moment-timezone';

@Injectable({
  providedIn: 'root'
})
export class GlobalApiService {
  apiUrl = `${environment.baseURL}`;
  token = environment.authorization;

  getHeader(){
    return new HttpHeaders({
      'Content-Type': 'application/json',
      // 'x-timezone': moment.tz.guess(),
      // Authorization: localStorage.getItem('token') || ''
        
    })
  }

  reGenerateParams(params:any) {
    Object.keys(params).map(x =>
        params[x] === null || params[x] === '' || params[x] === undefined
            ? delete params[x]
            : ''
    );
    return params;
  }

  constructor() { }
}
