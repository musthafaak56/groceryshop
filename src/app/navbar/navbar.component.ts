import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  


  accessAdmin(){
    const confirmed = window.confirm('Are you sure you want Admin Access?');
  }

 

}
