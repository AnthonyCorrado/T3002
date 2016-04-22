import {Page, NavController} from 'ionic-angular';
import {LobbiesPage} from '../lobbies/lobbies';
import {AngularFire} from 'angularfire2';
import {Observable} from 'rxjs/Observable';

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  gameModes: Observable<any[]>
  constructor(private nav: NavController, af: AngularFire) {
    this.gameModes = af.list('/gameModes');
  }
  
  goToLobby(mode) {
    this.nav.push(LobbiesPage, {mode: mode});
  }
}