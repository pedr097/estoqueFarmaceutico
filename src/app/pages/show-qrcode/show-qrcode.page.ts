import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-show-qrcode',
  templateUrl: './show-qrcode.page.html',
  styleUrls: ['./show-qrcode.page.scss'],
})
export class ShowQrcodePage implements OnInit {

  encodeData: any;

  constructor(private barcodeScanner: BarcodeScanner,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private platform: Platform) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.encodeData = this.activatedRoute.snapshot
    .paramMap.get('id');
    }

}
