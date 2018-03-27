import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersService {

  protocol = 'http://'
  host = localStorage.getItem('currentIP');
  port = ':8080/'
  urlGetUsers = 'chat-cnam-api/users/';
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(this.protocol + this.host + this.port + this.urlGetUsers);
  }

  getUser(userId:number) {
    return this.http.get(this.protocol + this.host + this.port + this.urlGetUsers + userId);
  }

}
