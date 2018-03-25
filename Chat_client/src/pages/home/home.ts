import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core'

@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('myNav') nav: NavController
  public rootPage: any = 'users';

  constructor(public navCtrl: NavController) {}

}
