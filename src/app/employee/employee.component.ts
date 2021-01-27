import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  datas:any = [];
  private baseURL = 'https://reqres.in/api/users';
  page:any = 1;

  isShow = false;

  constructor(
    private http: HttpClient,
    private _Router:Router
    ) { }
  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.http.get(`${this.baseURL}?page=${this.page}`).subscribe(res => {
        this.datas = res;
    })

    // this.http.get('https://reqres.in/api/users?page=1').subscribe(res => {
    //     this.datas = res;
    // })
  }

  getId(index:any){
    const params = this.datas.data[index].id
    this._Router.navigateByUrl('/employeeDetails/'+ params);
  }

  seeMore() {
    if (this.page < this.datas.total_pages) {
        this.page++;
        return this.getData();
    }else{
      this.page--;
      return this.getData();
    };
  }

  btnCreate(){
    if(this.isShow){
      this.isShow = false
    }else{
      this.isShow = true
    }

  }

}
