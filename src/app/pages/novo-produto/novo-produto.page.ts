import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/interface/produto';
import { ProdutoService } from 'src/app/services/produto.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { MateriaPrima } from 'src/app/interface/materia-prima';
import { Observable } from 'rxjs';
import { MateriaPrimaService } from 'src/app/services/materia-prima.service';

@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.page.html',
  styleUrls: ['./novo-produto.page.scss'],
})
export class NovoProdutoPage implements OnInit {

  produto: Produto;
  materiaprimaList: Observable<MateriaPrima[]>;

  constructor(private produtoService: ProdutoService,
              private materiaService: MateriaPrimaService,
              private toastCtrl: ToastController,
              private router: Router) {

    this.produto = {} as Produto;
    this.produto.data
    this.produto.materiasprimas = {} as MateriaPrima[];

    this.materiaprimaList = this.materiaService.getMateriasPrima();

  }

  ngOnInit() {
  }

  salvar(){
    this.produtoService.addProduto(this.produto).then(
      res => { this.salvou(res.id); }
    )
    .catch(
      err => { this.showToast("Erro ao salvar dados"); }
    );
  }

  salvou(id: string){
    this.showToast("Salvo com sucesso.");
    this.router.navigate(['/show-qrcode', id]);
    //this.router.navigate(['/menu/produto']);
  }

  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }

}
