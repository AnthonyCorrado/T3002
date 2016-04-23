import 'rxjs/add/operator/map';

import {Injectable, Inject} from 'angular2/core';
import {AngularFire, FirebaseListObservable, FirebaseRef} from 'angularfire2';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class FirebaseService {
  firebaseUrl: string;
  gamesRef: Firebase;
  data: any = null;
  games$: any = null;

  constructor(
    af: AngularFire,
    @Inject(FirebaseRef) private ref: Firebase
   ) {
      this.games$ = af.list('/games');

      this.ref = ref.child('/games');
  }

  getLastGame() {
    // have data preloaded
    if (this.data) {
      console.log('data already existed');
      return Promise.resolve(this.data)
    }
    
    return new Promise(resolve => {
      this.ref.orderByValue().limitToLast(1).once('value', function(snapshot) {
        resolve(snapshot.val());
      })
    })

  }
}

