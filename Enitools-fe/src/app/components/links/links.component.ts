import { Component, OnInit } from '@angular/core';
import { ApiHttpService } from '../../services/api-http.service';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  constructor(private apiService: ApiHttpService, private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.apiService.getData("links").subscribe(data => {
      this.links = data;
    });
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  links: LinkInfo[] = [];

  linkTitle: string = "";
  linkUrl: string = "";
  linkKey: string = "";

  sendLink(){
    const params = new HttpParams().set('title', this.linkTitle.trim()).set('url', this.linkUrl.trim());
    this.apiService.postRequest('link/' + this.linkKey.trim(), params).subscribe(
      response => console.log(response),
      error => console.log(error)
    );

    this.apiService.getData("links").subscribe(data => {
      this.links = data;
    });
  }

}

export class LinkInfo{
  title: string;
  url: string;

  constructor(t: string = "", u: string){
    this.title = t;
    this.url = u;
  }
}
