import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  pass:any = "";
  userName:any = "";
  constructor() {
    // console.log("constructor")
   }

  ngOnInit(): void {
    
    // console.log("ngOnInit")
  }
  
  submitLogin(pass: any,userName:any){
    this.pass = pass;
    this.userName = userName
    alert(this.pass + this.userName)
    console.log(this.pass)
  }


}
