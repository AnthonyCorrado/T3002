import {Page, NavController, NavParams} from 'ionic-angular';
import {FirebaseService} from '../../providers/firebase-service/firebase-service';

@Page({
  templateUrl: 'build/pages/games/games.html',
  providers: [FirebaseService]
})
export class GamesPage {
  public mode: string;
  public userid: string;
  isWaiting: boolean;
  lastGame;
  player1;

  constructor(
    private nav: NavController,
    private navParams: NavParams,
    private _firebaseService: FirebaseService
   ) {
      this.mode = navParams.get('mode');
      this.userid = navParams.get('userid') || 'mockId348248';
      this.player1 = this.userid;
  }

  getLastGame() {
    this._firebaseService.getLastGame()
      .then(game => {
        var gameId: any = Object.keys(game);
        this.lastGame = game[gameId];
      });
  }

}
