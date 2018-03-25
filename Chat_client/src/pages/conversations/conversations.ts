import { Component } from '@angular/core';
import { ConversationsService } from './conversations.service';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'conversations-page',
  templateUrl: 'conversations.html',
  providers: [ ConversationsService ],
})

export class ConversationsPage {

  public contacts: Object[] = [];
  public messages:any[];
  public user:any;
  public userId: number;
  public nav:NavController;

  constructor(public navCtrl: NavController, private conversationsService: ConversationsService) {
    this.user = navParams.get('userId') || 'Florian';
    this.nav = navCtrl;
    //on suppose quel'on connait l'user courant
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
    }


      // Get contacts
      //this.contacts = ['Invité','Aristide','MrVielle'];

      /*this.messages = [{
          creationDate : 1521320151015,
          sender : 'Aristide',
          receiver : 'Florian',
          content: 'Salut Florian je suis Aristide'
        }];*/


  goToMessages(contact:any) {
    console.log(contact);
    this.nav.push('messages');
  }


}
