import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MateriaPrima } from 'src/app/interface/materia-prima';
import { MateriaPrimaService } from 'src/app/services/materia-prima.service';

@Component({
  selector: 'app-materia-prima',
  templateUrl: './materia-prima.page.html',
  styleUrls: ['./materia-prima.page.scss'],
})
export class MateriaPrimaPage implements OnInit {

  materiaprimaList: Observable<MateriaPrima[]>;
  constructor( private materiaService: MateriaPrimaService) {
    this.materiaprimaList = this.materiaService.getMateriasPrima();
    
   }

  ngOnInit() {
  }

}
