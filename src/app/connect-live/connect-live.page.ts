import {Component, OnInit} from '@angular/core';
import {Socket} from 'ng-socket-io';
import {Observable} from 'rxjs';
import {Vehical} from '../vehicle';

@Component({
    selector: 'app-connect-live',
    templateUrl: './connect-live.page.html',
    styleUrls: ['./connect-live.page.scss'],
})
export class ConnectLivePage implements OnInit {
    username = 'dasun';
    vehicleList: Vehical[] = [];
    onlineOffline = {displayName: 'Offline', color: 'danger'};
    highestBidderDecision = 'No Decision';
    msgSection = 'End';
    currentBid = '000';
    currentAuction: Vehical;
    isButtonDisable =  false;

    constructor(private socket: Socket) {
    }

    ngOnInit() {
        this.socket.connect();
        this.socket.emit('sync_me', {msgid: this.username});
        this.onResponseFromSocket();
    }

    onResponseFromSocket () {
        this.socketRsponseHandler().subscribe((res: {channel: string, DAT: any}) => {
            switch (res.channel) {
                case 'vehidetails':
                    this.onVehidetail(res.DAT);
                    break;

                case 'start_b':
                    this.msgSection = res.DAT.msg;
                    break;

                case 'ending_soon_b':
                    this.msgSection = res.DAT.msg;
                    break;

                case 'stop_b':
                    this.msgSection = res.DAT.msg;
                    this.isButtonDisable = true;
                    break;

                case 'rls_reserve_b':
                    this.msgSection = res.DAT.msg;
                    this.isButtonDisable = false;
                    break;

                case 'status_line_b':
                    this.setOnlineOffline(res.DAT.msg);
                    break;

                case 'end_auction_b':
                    this.onEndAuction(res.DAT.msg);
                    break;

                case 'bid_upd_notification':
                    this.onUpdNotification(res.DAT);
                    break;

                case 'broadcast_result_b':
                    this.onBroadcast_result_b(res.DAT);
                    break;

                case 'vehi_details_b':
                    this.onVehidetail(res.DAT);
                    break;

                case 'expire':
                    this.onExpire(res.DAT);
                    break;
            }
        });
    }

    onExpire (data) {
        // logout user
    }

    socketRsponseHandler () {
        return new Observable(observer => {
            this.socket.on(this.username + '-vehidetails', data => {
                observer.next({channel: 'vehidetails', DAT: data});
            });

            this.socket.on(this.username + '-start_b', data => {
                observer.next({channel: 'start_b', DAT: data});
            });

            this.socket.on(this.username + '-ending_soon_b', data => {
                observer.next({channel: 'ending_soon_b', DAT: data});
            });

            this.socket.on(this.username + '-stop_b', data => {
                observer.next({channel: 'stop_b', DAT: data});
            });

            this.socket.on(this.username + '-rls_reserve_b', data => {
                observer.next({channel: 'rls_reserve_b', DAT: data});
            });

            this.socket.on(this.username + '-status_line_b', data => {
                observer.next({channel: 'status_line_b', DAT: data});
            });

            this.socket.on(this.username + '-end_auction_b', data => {
                observer.next({channel: 'end_auction_b', DAT: data});
            });

            this.socket.on(this.username + '-bid_upd_notification', data => {
                observer.next({channel: 'bid_upd_notification', DAT: data});
            });

            this.socket.on(this.username + '-broadcast_result_b', data => {
                observer.next({channel: 'broadcast_result_b', DAT: data});
            });

            // without user
            this.socket.on('start_b', data => {
                observer.next({channel: 'start_b', DAT: data});
            });

            this.socket.on('ending_soon_b', data => {
                observer.next({channel: 'ending_soon_b', DAT: data});
            });

            this.socket.on('stop_b', data => {
                observer.next({channel: 'stop_b', DAT: data});
            });

            this.socket.on('rls_reserve_b', data => {
                observer.next({channel: 'rls_reserve_b', DAT: data});
            });

            this.socket.on('status_line_b', data => {
                observer.next({channel: 'status_line_b', DAT: data});
            });

            this.socket.on('end_auction_b', data => {
                observer.next({channel: 'end_auction_b', DAT: data});
            });

            this.socket.on('bid_upd_notification', data => {
                observer.next({channel: 'bid_upd_notification', DAT: data});
            });

            this.socket.on('broadcast_result_b', data => {
                observer.next({channel: 'broadcast_result_b', DAT: data});
            });

            this.socket.on('vehi_details_b', data => {
                observer.next({channel: 'vehi_details_b', DAT: data});
            });

            this.socket.on(this.username + '_expire', data => {
                observer.next({channel: 'expire', DAT: data});
            });
        });
    }

    onBroadcast_result_b (data) {
        if (data.trackaucid === this.currentAuction.auctionId) {
            if (data.selling_status === 'SOLD') {
                this.currentBid = data.updated_price;
                this.msgSection = data.selling_status;

                if (data.new_bidder === this.username) {
                    this.highestBidderDecision = 'Sold To You';
                } else {
                    this.highestBidderDecision = 'Your Bid Was Low';
                }
            } else if (data.selling_status === 'NOT SOLD') {
                this.currentBid = data.updated_price;
                this.msgSection = data.selling_status;
                this.highestBidderDecision = 'Reserve Not Met';
            }
        }
    }

    onUpdNotification (data) {
        if (data.trackaucid === this.currentAuction.auctionId) {
            this.currentBid = data.updated_price;

            if (data.new_bidder === this.username) {
                this.highestBidderDecision = 'You';
            } else {
                this.highestBidderDecision = 'Outbid – Bid Again!';
            }
        }
    }

    onEndAuction (data: any) {
        this.setOnlineOffline('offline');
        this.msgSection = 'End';
        this.highestBidderDecision = 'No Decision';

        const vehicleObj = new Vehical();
        vehicleObj.setData(undefined);
        this.currentAuction = vehicleObj;

        this.vehicleList = [];
        this.vehicleList.push(vehicleObj);
        this.vehicleList.push(vehicleObj);
        this.vehicleList.push(vehicleObj);
        this.vehicleList.push(vehicleObj);
    }

    onVehidetail (vehicalArray: []) {
        vehicalArray.forEach((element) => {
            const vehicleObj = new Vehical();
            vehicleObj.setData(element);
            this.vehicleList.push(vehicleObj);
        });

        this.currentAuction = this.vehicleList[0];
        this.setOnlineOffline('online');
        this.highestBidderDecision = 'No Decision';
        this.msgSection = 'Starting Soon';
        this.currentBid = this.currentAuction.startingPrice;
    }

    setOnlineOffline (status) {
        if (status === 'online') {
            this.onlineOffline = {displayName: 'Online', color: 'success'};
        } else if (status === 'offline') {
            this.onlineOffline = {displayName: 'Offline', color: 'danger'};
        }
    }

    sendBid () {
        const params = {
            auctionid: this.currentAuction.auctionId,
            bidder_username: this.username,
            bid_amount: this.currentAuction.incrementAmount
        };

        this.socket.emit('update_bid', params);
    }

}
