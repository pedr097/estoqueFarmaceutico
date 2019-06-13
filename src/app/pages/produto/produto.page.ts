import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/interface/produto';
import { Observable } from 'rxjs';
import { ProdutoService } from 'src/app/services/produto.service';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})
export class ProdutoPage implements OnInit {

  produtoList: Observable<Produto[]>;

  constructor(private produtoService : ProdutoService,
    public actionSheetController: ActionSheetController,
    private router: Router) { 
    this.produtoList = produtoService.getProdutos();
  }

  ngOnInit() {
  }

  deleteProduto(id: string){
    this.produtoService.deleteProduto(id);
  }

  exibeOpcoes(id: string){
    this.presentActionSheet(id);
  }

  async presentActionSheet(id: string) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opções',
      buttons: [{
        text: 'Gerar QRCode',
        icon: 'qr-scanner',
        handler: () => {
          this.qrcode(id);
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          //console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  qrcode(id: string){
    this.router.navigate(['/show-qrcode', id]);
  }

}
