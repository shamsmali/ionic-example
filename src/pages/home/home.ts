import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeService } from '../../providers/home-service';
import { Welcome } from '../../models/home/welcome'; 
import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  welcomeMessage : Welcome;

  constructor(public navCtrl: NavController, private homeService : HomeService) {

	  let timer = TimerObservable.create(2000, 1000);
	  timer.subscribe(t => {
		  homeService.load().subscribe( msg => {
	      	  console.log(msg);
	      	  this.welcomeMessage = msg;
	      });
      });
  }

}
