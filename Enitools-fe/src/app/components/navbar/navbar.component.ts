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
  fragments: FragmentInfo[];

  constructor(n: string = "", l: string = "", f: FragmentInfo[] = []){
    this.name = n;
    this.link = l;
    this.fragments = f;
  }
}

export class FragmentInfo {
  name: string;
  id: string;

  constructor(n: string, i: string){
    this.name = n;
    this.id = i;
  }
}