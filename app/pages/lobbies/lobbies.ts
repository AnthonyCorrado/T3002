import {Page, NavController, NavParams} from 'ionic-angular';
import {GamesPage} from '../games/games';
// TODO remove: temp sub for user id
import {Device} from 'ionic-native';

@Page({
  templateUrl: 'build/pages/lobbies/lobbies.html',
})
export class LobbiesPage {
  public mode: string;

  constructor(
    private nav: NavController,
    private navParams: NavParams
  ) {
      this.mode = navParams.get('mode');
  }

  startGame(id: string) {
    var mode = this.navParams.get('mode');
    // TODO remove: sub for user id
    var tempId = Device.device.uuid;
    this.nav.push(GamesPage, { mode: mode, userid: tempId });
  }

  challengeFriend() {
    alert('this feature is comming soon');
  }
}
