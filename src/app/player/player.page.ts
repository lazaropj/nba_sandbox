import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import nba from 'nba';

@Component({
  selector: 'app-player',
  templateUrl: './player.page.html',
  styleUrls: ['./player.page.scss'],
})
export class PlayerPage implements OnInit {

  public teamId;
  public teamName;
  public players:Array<Object> = []

  constructor(
      private activatedRoute: ActivatedRoute,
      private loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.teamId = this.activatedRoute.snapshot.paramMap.get('teamId');
    this.teamName = this.activatedRoute.snapshot.paramMap.get('teamName');
    this.loadingController.create({
      spinner: "bubbles"
    }).then((res) => {
      res.present();

      nba.stats.teamPlayerDashboard({TeamID : this.teamId, SeasonType: 'Regular Season'}).then(
          (data) => this.players = data.playersSeasonTotals,
          (erro) => console.log('ERRRO', erro),
      )
      res.dismiss();
    });
  }

}
