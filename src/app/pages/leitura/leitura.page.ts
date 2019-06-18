import { Component, OnInit } from '@angular/core';
import { BarcodeScannerOptions, BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Produto } from 'src/app/interface/produto';
import { ProdutoService } from 'src/app/services/produto.service';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Produto3Service } from 'src/app/services/produto3.service';

@Component({
  selector: 'app-leitura',
  templateUrl: './leitura.page.html',
  styleUrls: ['./leitura.page.scss'],
})
export class LeituraPage implements OnInit {

  scannedData: {};
  barcodeScannerOptions: BarcodeScannerOptions;
  produto: Produto;

  constructor(private barcodeScanner: BarcodeScanner,
    private produtoService: Produto3Service,
    private router: Router,
    private platform: Platform) { 

      this.barcodeScannerOptions = {
        showTorchButton: true,
        showFlipCameraButton: true
      };

      this.scanCode();

    }

  ngOnInit() {
  }

  scanCode() {
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        //alert("Barcode data " + JSON.stringify(barcodeData));
        this.scannedData = barcodeData;
        this.buscaProduto(barcodeData["text"]);
      })
      .catch(err => {
        console.log("Erro: ", err);
      });
  }

  buscaProduto(id: string){
    this.produtoService.getProdutoByID(id).subscribe(
      res => {
        this.produto = {} as Produto;
        this.produto.data = res.data, 
        this.produto.descricao = res.descricao, 
        this.produto.nome = res.nome, 
        this.produto.materiasprimas = res.materiasprimas
      }
    );
  }

}
