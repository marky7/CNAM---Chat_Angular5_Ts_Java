import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MessagesService } from './messages.service';

@Component({
  selector: 'messages-page',
  templateUrl: 'messages.html',
  providers: [ MessagesService ],
})

export class MessagesPage {

  public userId: number;
  public contact: any;
  public messages: any[] = [];
  messagesService:MessagesService;

  constructor(public navCtrl: NavController, private messagesService: MessagesService) {

    // TODO
      this.messagesService = messagesService;
      this.contact = {id:"2", prenom:"Aristide", nom:"Koffi"}; // doit etre recupéré
      messagesService.userId = 1;
      messagesService.contact = this.contact;

      setInterval(function(){
        console.log('heyyyyy');
        messagesService.getMessagesOfConversation().subscribe((data) => {
          console.log(data);
            //this.messages = data;
          if(Array.isArray(data)){
            for(var i = 0; i<data.length; i++){
              var sender: string;

              if(data[i].senderId == this.contact.id){
                sender = this.contact.prenom;
              }else{
                sender = 'Moi';
              }
              this.messages.push({sender: sender, content: data[i].content, createdAt: data[i].createdAt });
            }
          }
        });
      }.bind(this), 3000);
  }

  sendMessage(){
    // TODO
    this.messagesService.sendMessage({senderId:userId , receiverId:contact.id, content: this.content});
  }


}
