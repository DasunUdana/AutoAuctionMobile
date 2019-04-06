import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { Observable } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  private serviceUrl = 'https://www.autoauction.lk';

  constructor(private http: HTTP) { }

  public getAuctionList() {
    const url = this.serviceUrl + '/m/auction/1?auctionline=001';
    return this.http.get(url, {}, {});
  }

  public getAuctionShedules() {
    const url = this.serviceUrl + '/m/schedules';
    return this.http.get(url, {}, {});
  }
}
