import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConversationsService {
  
  urlUsers = 'http://localhost:8080/chat-cnam-api/users/';

  constructor(private http: HttpClient) {}

  getUsers(){
    return this.http.get(this.urlUsers);
  }
}
