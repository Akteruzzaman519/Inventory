import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public devices=true;
  constructor() { }

  ngOnInit(): void {
    if(window.innerWidth<=576){
      this.devices=false;
    }
  }

}
