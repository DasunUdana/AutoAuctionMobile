import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.page.html',
  styleUrls: ['./qr-scanner.page.scss'],
})
export class QrScannerPage implements OnInit {
  scannedCode=null;
  constructor(private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {
    this.scanCode();
  }

  scanCode(){
    this.barcodeScanner.scan().then(barcodeData =>{
      this.scannedCode=barcodeData.text;
    })
  }

}
