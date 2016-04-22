import {Page, NavController, NavParams} from 'ionic-angular';

/*
  Generated class for the LobbyPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/lobbies/lobbies.html',
})
export class LobbiesPage {
  public mode: string;
  firebaseUrl: string;

  constructor(
    private nav: NavController,
    private navParams: NavParams
  ) {
      this.mode = navParams.get('mode');
      this.firebaseUrl = 
  }

  joinGame(id) {
    console.log('user id', id);
  }
}
