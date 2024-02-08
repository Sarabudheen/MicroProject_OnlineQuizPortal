import { Component } from '@angular/core';
import { Users } from '../model/Users';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  title = 'Users';
  users: Users;
  result: string = " ";
  userList: Users[] = [];
  myForm: FormGroup;

  constructor(private service: UserService) {
    this.users = new Users;
    this.myForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+')]),
      lastName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+')]),
      emailId: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$')]),
      phoneNo: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
      userName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+')]),
      password: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
    })
  }


  register(data: any) {

  }


  registerUser(data: any) {
    this.users.firstName = data.firstName;
    this.users.lastName = data.lastName;
    this.users.emailId = data.emailId;
    this.users.phoneNo = data.phoneNo;
    this.users.userName = data.userName;
    this.users.password = data.password;

    this.result = this.service.registerUser(this.users);

  }
}
