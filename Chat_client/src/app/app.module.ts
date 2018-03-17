import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {UIRouterModule} from "@uirouter/angular";
import {uiRouterConfigFn} from "../configs/router.config";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UsersPage } from '../pages/users/users';
import { ConversationsPage } from '../pages/conversations/conversations';
import { MessagesPage } from '../pages/messages/messages';



const appUIRoutes = [
  {
    name: 'users',
    path: '/users',
    component: UsersPage
  },{
    name: 'home',
    path: '/home',
    component: UsersPage
  },{
    name: 'conversations',
    path: '/conversations',
    component: ConversationsPage
  },{
    name: 'messages',
    path: '/messages',
    component: MessagesPage
  }
  /*{
    name: 'conversations',
    path: 'users/:userId/conversations/:receptorId',
    component: ConversationsPage
  },*/
];

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UsersPage,
    ConversationsPage,
    MessagesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    UIRouterModule.forRoot({
        states: appUIRoutes,
        useHash: true,
        config: uiRouterConfigFn
      })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UsersPage,
    ConversationsPage,
    MessagesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
