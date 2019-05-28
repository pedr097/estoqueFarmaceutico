import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NovaMateriaPrimaPage } from './nova-materia-prima.page';

const routes: Routes = [
  {
    path: '',
    component: NovaMateriaPrimaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NovaMateriaPrimaPage]
})
export class NovaMateriaPrimaPageModule {}
