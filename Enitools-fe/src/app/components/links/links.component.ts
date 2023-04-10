import { Component, OnInit } from '@angular/core';
import { ApiHttpService } from '../../services/api-http.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  constructor(private apiService: ApiHttpService) {}

  ngOnInit(): void {
    this.apiService.getData("links").subscribe(data => {
      this.links = data;
    });
  }

  links: LinkInfo[] = [];

}

export class LinkInfo{
  title: string;
  url: string;

  constructor(t: string = "", u: string){
    this.title = t;
    this.url = u;
  }
}
