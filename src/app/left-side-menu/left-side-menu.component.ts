import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-side-menu',
  templateUrl: './left-side-menu.component.html',
  styleUrls: ['./left-side-menu.component.css']
})
export class LeftSideMenuComponent implements OnInit {

  public hideShow = false;
  public return = false;
  constructor() { }

  ngOnInit(): void {
  }
  public itemClick(): void {
    this.hideShow = !this.hideShow
  }

  public returnClick() {
    this.return = !this.return;
  }

}
