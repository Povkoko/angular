import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ActivatedRoute } from '@angular/router';
import { delay } from "rxjs/operators";
import { Router } from '@angular/router'

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  public baseURL = 'https://reqres.in/api/users';

  employeeDetail:any = {};
  receiveId:any;
  public response:any;
  public message: string = "Uninitialized";
  
  constructor(
    private http: HttpClient,
    private _ActivatedRoute: ActivatedRoute,
    private route:Router
    
    ) { }
  ngOnInit(): void {

    this._ActivatedRoute.paramMap.subscribe(param => {
      if (param.has("id")) {
        this.receiveId = param.has("id") ? param.get("id") : "";
        this.getData();
      } else {}
    });

    // this._ActivatedRoute.params.subscribe(res => {
    //   console.log(res)
    // })

  }

  async getData(){
    const params = this.receiveId
    // this.http.get(`${this.baseURL}/${params.toString()}`).subscribe(res => {
    //     this.employeeDetail = res;
    //     console.log(this.employeeDetail.data.avatar)
    // })
    this.message = "Loading..";
    this.employeeDetail = "";

    this.employeeDetail = await this.http
      .get<any>(`${this.baseURL}/${params.toString()}`)
      .pipe(delay(1000))
      .toPromise();
    this.message = "";
  
  }

  linkPage(id:any){
    this.route.navigate(['/employeeUpdate', id]);
  }

}
