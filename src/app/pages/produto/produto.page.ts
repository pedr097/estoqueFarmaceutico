import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/interface/produto';
import { Observable } from 'rxjs';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})
export class ProdutoPage implements OnInit {

  produtoList: Observable<Produto[]>;

  constructor(private produtoService : ProdutoService) { 
    this.produtoList = produtoService.getProdutos();
  }

  ngOnInit() {
  }

  deleteProduto(id: string){
    this.produtoService.deleteProduto(id);
  }

}
