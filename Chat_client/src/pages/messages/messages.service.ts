import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MessagesService {
  protocol = 'http://'
  host = localStorage.getItem('currentIP') || 'localhost';
  port = ':8080/'
  urlGetMessages = 'chat-cnam-api/messages/';
  urlPostMessage = 'chat-cnam-api/message/'
  public userId: number;
  public contact: any;

  constructor(private http: HttpClient) {}

  getMessagesOfConversation() {
    //console.log(this.urlMessages + this.userId + '/' + this.contact.id);
    return this.http.get( this.protocol + this.host + this.port + this.urlGetMessages + this.userId + '/' + this.contact.id );
  }

  sendMessage(content:'string'){
    return this.http.post( this.protocol + this.host + this.port  + this.urlPostMessage);
    var message = {
        senderId:this.userId,
        receiverId:this.contact.id,
        content:content
    };
    this.getMessagesOfConversation();
  }
}
