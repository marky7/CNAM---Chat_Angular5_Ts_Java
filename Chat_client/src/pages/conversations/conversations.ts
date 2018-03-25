import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConversationsService } from './conversations.service';

@Component({
  selector: 'conversations-page',
  templateUrl: 'conversations.html',
  providers: [ ConversationsService ],
})

export class ConversationsPage {

  public contacts: Object[] = [];
  public user:any;
  public userId: number;

  constructor(public navCtrl: NavController, private conversationsService: ConversationsService) {
      //on suppose on connait l'user courant
      //son id = 4;
      this.userId = 4;
      conversationsService.getUsers().subscribe((data) => {
        console.log(data);
          for(var i=0; i<data.length; i++){
            if(data[i].id !== this.userId){
              this.contacts.push(data[i]);
            }else{
              this.user = data[i];
            }
          }
        });

      //this.user = 'Florian';
      // Get contacts
      //this.contacts = ['Invité','Aristide','MrVielle'];

      /*this.messages = [{
          creationDate : 1521320151015,
          sender : 'Aristide',
          receiver : 'Florian',
          content: 'Salut Florian je suis Aristide'
        }];*/

  }

}
