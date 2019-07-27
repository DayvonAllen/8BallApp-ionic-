import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  selector = 1;
  img;
  imgPath;

  constructor() {
    this.selector = Math.floor(Math.random() * 5 + 1);
    this.imgPath = 'ball1';
    this.img = `../../assets/${this.imgPath}@2x.png`;
  }

  choose() {
    this.selector = Math.floor(Math.random() * 5 + 1);
    this.imgPath = 'ball' + this.selector;
    this.img = `../../assets/${this.imgPath}@2x.png`;
  }

}
