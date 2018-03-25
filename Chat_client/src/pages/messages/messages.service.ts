import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MessagesService {
  urlMesaages = 'http://localhost:8080/chat-cnam-api/messages/';
  public userId: number;
  public contact: object;

  constructor(private http: HttpClient) {}

  getMessagesOfConversation() {
    console.log(this.urlMesaages + this.userId + '/' + this.contact.id);
    return this.http.get( this.urlMesaages + this.userId + '/' + this.contact.id );
  }
}
