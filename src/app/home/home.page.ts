import { Component } from '@angular/core';
import nba from 'nba';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public teams:Array<Object> = []

  constructor(){
    this.teams = nba.teams;
  }

}
