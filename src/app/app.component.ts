import { Component } from '@angular/core';
// import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-food';

  public href: string = "";

  constructor(private router : Router) {}

  ngOnInit() {
    console.log(window.location.pathname)
      this.href = window.location.pathname;
      console.log(this.href)
      console.log(this.router.url);
  }
}
