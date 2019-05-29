import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title: 'Home',
      url: '/menu/home',
      icon: 'home'
    },
    {
      title: 'Cadastros',
      children: [
        {
          title: 'Produto',
          url: '/menu/produto',
          icon: 'logo-ionic'
        },
        {
          title: 'Materia Prima',
          url: '/menu/materia-prima',
          icon: 'logo-google'
        }
      ]
    }
  ];

  constructor(private statusBar: StatusBar) { 
    this.statusBar.backgroundColorByHexString('#3980FE');
  }

  ngOnInit() {
  }

}
