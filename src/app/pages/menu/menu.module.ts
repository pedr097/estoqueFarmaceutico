import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/menu/home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'home',
        loadChildren: '../home/home.module#HomePageModule'
      },
      {
        path: 'produto',
        loadChildren: '../produto/produto.module#ProdutoPageModule'
      },
      {
        path: 'materia-prima',
        loadChildren: '../materia-prima/materia-prima.module#MateriaPrimaPageModule'
      },
      {
        path: 'nova-materia-prima',
        loadChildren: '../nova-materia-prima/nova-materia-prima.module#NovaMateriaPrimaPageModule'
      },
      {
        path: 'novo-produto',
        loadChildren: '../novo-produto/novo-produto.module#NovoProdutoPageModule'
      },
      {
        path: 'leitura',
        loadChildren: '../leitura/leitura.module#LeituraPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
