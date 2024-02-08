import { Injectable } from '@angular/core';
import { Users } from '../model/Users';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = "http://localhost:9889/user";

  registerUser(users: Users) {

    this.http.post(this.url + "/register", users).subscribe();
    return "Register successfully";
  }

  loginUser(user: any) {
    return this.http.post(this.url + "/login", user);
  }

  constructor(private http: HttpClient) { }


  getAllUsers(): Observable<any> {
    return this.http.get(this.url + "/getAllUserDetails");
  }


  deleteUsers(id: number): Observable<any> {
    return this.http.delete(this.url + "/deleteUser/" + id);
  }
  updateUsers(id: number, data: any): Observable<any> {
    return this.http.put(this.url + "/updateUser", data);
  }

}
