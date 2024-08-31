import { Component } from '@angular/core';
import { UserService } from '../_Services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private userService: UserService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  data = {
    userName: "",
    userPassword: "",
    userFirstName: "",
    userLastName: ""
  }

  submit() {
    console.log(this.data)
    this.userService.register(this.data).subscribe(
      (res) => {
        console.log(res)
        this.snackBar.open('Registered Successfully!', 'OK', {
          duration: 2000
        });
        this.router.navigate(["/login"])
      },
      (error) => {
        console.log(error)
        this.snackBar.open('Server Side Error!', 'OK', {
          duration: 2000
        });
      }
    )

  }

}
