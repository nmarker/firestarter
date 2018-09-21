import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { FirebaseObjectObservable } from 'angularfire2/database-deprecated';

import { AdListing } from './AdListing';

@Injectable({
  providedIn: 'root'
})
export class AdService {

  constructor(private db: AngularFireDatabase) { }

    /// Creates an Ad, then returns as an object
    createAd(): FirebaseObjectObservable<AdListing> {
      const adDefault = new AdListing()
      const adKey = this.db.list('/ads').push(adDefault).key
      return this.db.object('/ads/' + adKey)
    }
  
  
    /// Updates an existing Ad
    updateAd(ad: FirebaseObjectObservable<AdListing>, data: any) {
      return ad.update(data)
    }
    
}
