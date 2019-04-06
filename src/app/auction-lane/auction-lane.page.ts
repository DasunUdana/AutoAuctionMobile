import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-auction-lane',
  templateUrl: './auction-lane.page.html',
  styleUrls: ['./auction-lane.page.scss'],
})
export class AuctionLanePage implements OnInit {
  auctionList: any[] = [];
  constructor(private service: AppServiceService) { }

  ngOnInit() {
    this.service.getAuctionShedules().then((data: any) => {
      const actnArry: any[] = JSON.parse(data.data).livedata;

      actnArry.forEach((action: any) => {
        const auction = {
          id: action._id,
          sellerId: action.sellerid,
          auctionName: action.auctionname,
          contactNumber: action.contactnumber,
          inspectionDates: action.inspectiondates,
          auctionDate: action.auctiondate,
          location: action.location
        };

        this.auctionList.push(auction);
      });
    });
  }

}
