import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class MessagesService {
  protocol = 'http://'
  host = localStorage.getItem('currentIP');
  port = ':8080/'
  urlGetMessages = 'chat-cnam-api/messages/';
  urlPostMessage = 'chat-cnam-api/message/'

  public userId: number;
  public contact: any;
  public httpOptions: object;

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
  }

  getMessagesOfConversation() {
    //console.log(this.urlMessages + this.userId + '/' + this.contact.id);
    return this.http.get( this.protocol + this.host + this.port + this.urlGetMessages + this.userId + '/' + this.contact.id );
  }

  sendMessage(content:object){
    return this.http.post( this.protocol + this.host + this.port  + this.urlPostMessage, content);
    //this.getMessagesOfConversation();
  }
}
