import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'produto', loadChildren: './pages/produto/produto.module#ProdutoPageModule' },
  { path: 'materia-prima', loadChildren: './pages/materia-prima/materia-prima.module#MateriaPrimaPageModule' },
  { path: 'nova-materia-prima', loadChildren: './pages/nova-materia-prima/nova-materia-prima.module#NovaMateriaPrimaPageModule' },
  { path: 'novo-produto', loadChildren: './pages/novo-produto/novo-produto.module#NovoProdutoPageModule' },
  { path: 'show-qrcode', loadChildren: './pages/show-qrcode/show-qrcode.module#ShowQrcodePageModule' },
  { path: 'show-qrcode/:id', loadChildren: './pages/show-qrcode/show-qrcode.module#ShowQrcodePageModule' },  { path: 'leitura', loadChildren: './pages/leitura/leitura.module#LeituraPageModule' }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
