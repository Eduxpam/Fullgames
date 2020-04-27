import { Component, OnInit } from '@angular/core';
import { BASE_CAMISA, BASE_BERMUDA, BASE_CALCA, BASE_SHORT, BASE_BONE, BASE_MENU } from '../local_banco/local.banco';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loading = true;
  menu = [];
  selectedIndex = 0;
  menuclass = [];
  produtos = [];


  constructor() {
    this.menu = BASE_MENU;
    for (let i of this.menu) {
      this.menuclass.push('list-group-item list-group-item-action');
    }
    this.menuclass[this.selectedIndex] += ' active';
    this.produtos = BASE_CAMISA;
    this.loading = false;
  }

  ngOnInit(): void {
  }

  async trocaCategoria(newindex: number) {
    this.loading = true;
    this.menuclass[this.selectedIndex] = this.menuclass[this.selectedIndex].replace(' active', '');
    this.menuclass[newindex] += ' active';
    this.selectedIndex = newindex;
    if (newindex === 0) {
      this.produtos = BASE_CAMISA;
    } else if (newindex === 1) {
      this.produtos = BASE_BERMUDA;
    } else if (newindex === 2) {
      this.produtos = BASE_CALCA;
    } else if (newindex === 3) {
      this.produtos = BASE_SHORT;
    } else if (newindex === 4) {
      this.produtos = BASE_BONE;
    }
    await this.delay(1000);
    this.loading = false;
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
