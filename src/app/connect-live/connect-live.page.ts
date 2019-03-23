import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connect-live',
  templateUrl: './connect-live.page.html',
  styleUrls: ['./connect-live.page.scss'],
})
export class ConnectLivePage implements OnInit {
  dataa = [
    {
      name: "AiA",
      code: "AI101",
      limit: 25000,
      account: "Life Insurance"
    },
    {
      name: "Cargills",
      code: "CF001",
      limit: 30000,
      account: "Food City"
    }
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
