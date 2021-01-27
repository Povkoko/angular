import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {
  public baseURL = 'https://reqres.in/api/employees';
  
  employeeDetail:any = {};

  obj:any ={
    data:{
    last_name:'',
    first_name:'',
    email:'',
    avatar: ''
    }
  }
  constructor(
    private route:ActivatedRoute,
    private http:HttpClient,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(res => {
      this.http.get(`${this.baseURL}/${res.id}`).subscribe(res => {
        // console.log(res)
        // this.employeeDetail = res;
        this.obj = res;
        // console.log(this.obj)
      })
    })
  }

  doUpdate(id:any){
    alert(this.obj, id)
    // return console.log(this.obj, id)
    this.http.put(`${this.baseURL}`+id,this.obj).subscribe(res => {
      console.log(res)
      if(res){
        this.router.navigate(['/employee'])
      }
    })
  }

}
