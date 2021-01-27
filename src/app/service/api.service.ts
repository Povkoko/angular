import { Injectable } from '@angular/core';
import { GlobalApiService } from './global-api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = this.globalService.apiUrl;
  authorization = this.globalService.token;
  // authorization = ''

  constructor(
    private globalService: GlobalApiService,
    private http:HttpClient

  ) { }

  getAuthorizeHeader() {
    return new HttpHeaders({
        'Content-Type': 'application/json',
        authorization: this.authorization
    });
  }

  login(body:any){
    return this.http.post(`${this.url}/auth/signin`, body).subscribe(res =>{
      console.log(res)
      // this.authorization = res
    })
  }

}
