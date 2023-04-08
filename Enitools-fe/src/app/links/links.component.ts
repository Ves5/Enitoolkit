import { Component } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent {

  links: LinkInfo[] = [
    new LinkInfo("Anagram solver", "https://www.thewordfinder.com/anagram-solver/"),
    new LinkInfo("Many Ciphers", "https://www.dcode.fr/en"),
  ]

}

export class LinkInfo{
  title: string;
  url: string;

  constructor(t: string = "", u: string){
    this.title = t;
    this.url = u;
  }
}
