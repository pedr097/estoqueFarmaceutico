import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from 'src/app/interface/produto';
import { ProdutoService } from 'src/app/services/produto.service';
import { setHostBindings } from '@angular/core/src/render3/instructions';
import { map } from 'rxjs/operators';
import { Produto2Service } from 'src/app/services/produto2.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  //produtoList: Produto[];
  produtoList: Observable<Produto[]>;

  constructor(private produtoService: Produto2Service) {

    this.produtoList = produtoService.getProdutos();
      /* .subscribe(result => {
        this.produtoList = result as Produto[];
        this.produtoList.sort((a, b) => {
          if (a.data < b.data) {
            return -1;
          }
          if (a.data > b.data) {
            return 1;
          }
          return 0;
        });
      });*/

  }

  ngOnInit() {
  }



}
