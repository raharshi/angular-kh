import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersUrl: string = "https://jsonplaceholder.typicode.com/users";

  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.httpClient.get(this.usersUrl);
  }

  getUser(userId: any): Observable<any> {
    return this.httpClient.get(this.usersUrl + "/" + userId);
  }

}
