import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() title: string = "";
  @Input() links: NavbarInfo[] = [];
}

export class NavbarInfo {
  name: string;
  link: string;
  fragment: boolean;

  constructor(n: string = "", l: string = "", f: boolean = false){
    this.name = n;
    this.link = l;
    this.fragment = f;
  }
}