import { Component, OnInit } from '@angular/core';
import { MateriaPrima } from 'src/app/interface/materia-prima';
import { MateriaPrimaService } from 'src/app/services/materia-prima.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-materia-prima',
  templateUrl: './nova-materia-prima.page.html',
  styleUrls: ['./nova-materia-prima.page.scss'],
})
export class NovaMateriaPrimaPage implements OnInit {

  materiaPrima: MateriaPrima;
  constructor( private materiaService: MateriaPrimaService,
    private toastCtrl: ToastController,
    private router: Router) {
    this.materiaPrima = {} as MateriaPrima;
   }

  ngOnInit() {
  }

  salvar(){
    this.materiaService.addMateriaPrima(this.materiaPrima).then(
      res => { this.salvou(); }
    )
    .catch(
      err => { this.showToast("Erro ao salvar dados"); }
    );
  }

  salvou(){
    this.showToast("Salvo com sucesso.");
    this.router.navigate(['/menu/materia-prima']);
  }

  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }

}
