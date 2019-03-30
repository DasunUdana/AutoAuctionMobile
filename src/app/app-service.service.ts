import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { Observable } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  private serviceUrl = 'https://www.autoauction.lk/m/auction/1?auctionline=001';

  constructor(private http: HTTP) { }

  public getAuctionList() {
    return this.http.get(this.serviceUrl, {}, {});
  }
}
