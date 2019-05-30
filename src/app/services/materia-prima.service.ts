import { Injectable } from '@angular/core';
import { MateriaPrima } from '../interface/materia-prima';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators'
import { AngularFirestoreCollection, AngularFirestore, DocumentReference } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MateriaPrimaService {

  materiasprima: Observable<MateriaPrima[]>
  materiaprimaCollection: AngularFirestoreCollection<MateriaPrima>;

  constructor(private afs: AngularFirestore) {
    this.materiaprimaCollection = this.afs.collection<MateriaPrima>('materiaprima');

    this.materiasprima = this.materiaprimaCollection.snapshotChanges()
      .pipe( 
        map( actions => {
          return actions.map( a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data};
          } )
        } )
      );
   }

   getMateriasPrima(): Observable<MateriaPrima[]> {
    return this.materiasprima;
  }

  getMateriaPrima(id: string): Observable<MateriaPrima> {
    return this.materiaprimaCollection.doc<MateriaPrima>(id).valueChanges()
      .pipe(
        take(1),
        map (materiaprima => {
          materiaprima.id = id;
          return materiaprima;
        })
      );
  }

  addMateriaPrima(materiaprima: MateriaPrima): Promise<DocumentReference> {
    return this.materiaprimaCollection.add(materiaprima);
  }
  
  updateMateriaPrima(materiaprima: MateriaPrima): Promise<void> {
    return this.materiaprimaCollection.doc(materiaprima.id)
      .update({
        name: materiaprima.nome, 
        descricao: materiaprima.descricao
      });
  }

  deleteMateriaPrima(id: string): Promise<void> {
    return this.materiaprimaCollection.doc(id).delete();
  }
}