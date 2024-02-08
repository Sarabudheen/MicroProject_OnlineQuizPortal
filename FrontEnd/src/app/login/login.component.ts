import { Component } from '@angular/core';
import { Users } from '../model/Users';
import { UserService } from '../Service/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  users: Users;
  result: string = " ";
  myForm: FormGroup;

  constructor(private service: UserService, private router: Router) {
    this.users = new Users;
    this.myForm = new FormGroup(
      {
        userName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+')]),
        password: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
      }
    )
  }



  loginUser(data: any) {
    this.users.userName = data.userName;
    this.users.password = data.password;

    this.service.loginUser(this.users).subscribe(
      (resultdata: any) => {
        console.log(resultdata)
        if (resultdata.message == "Admin Login Successfully") {
          this.router.navigate(['/AdminDashboard']);
        } else if (resultdata.message == "User Login Successfully") {
          this.router.navigate(['/UserDashboard']);
        }
        else {
          alert("Invalid User");
        }
      }
    );


  }


}
