import { Injectable, Query } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../interface/produto';
import { AngularFirestoreCollection, AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Produto3Service {

  produtos: Observable<Produto[]>;
  produtoCollection: AngularFirestoreCollection<Produto>;

  constructor(private afs: AngularFirestore) { 
    this.produtoCollection = this.afs.collection<Produto>('produto');

    this.produtos = this.produtoCollection.snapshotChanges()
      .pipe(
        map( action => {
          return action.map( a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data};
          })
        })
        
      )
  }

  getProdutos() : Observable<Produto[]>{
    return this.produtos;
  }

  getProdutoByID(id: string): Observable<Produto> {
    return this.produtoCollection.doc<Produto>(id).valueChanges()
    .pipe(
      take(1),
      map( produto =>{
        produto.id = id;
        return produto;
      })
    );
  }

  addProduto(produto: Produto): Promise<DocumentReference> {
    return this.produtoCollection.add(produto);
  }

  deleteProduto(id: string): Promise<void> {
    return this.produtoCollection.doc(id).delete();
  }
}
