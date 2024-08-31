import { Component } from '@angular/core';
import { UserAuthService } from '../_Services/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  role = ""; 

  constructor(private userAuth:UserAuthService, private router:Router){}

  logout(){
    this.userAuth.clear();
    this.router.navigate(["/"])
  }

  loggedIn(){
    this.role = this.userAuth.getRoles();
    return this.userAuth.isLoggedIn();
  }

}
