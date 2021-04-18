import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  isLoggedIn: boolean = (localStorage.getItem("isLoggedIn") == "true");
  constructor(private router:Router) { }

  ngOnInit(): void {
    if(this.isLoggedIn == false)
    {
      this.router.navigate(['/login']);
    }
  }

}
