import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/config/constants';
import { ApiHttpService } from 'src/app/services/api-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private apiService: ApiHttpService) {}

  ngOnInit(): void {
    this.apiService.getData("version").subscribe(data => {
      this.be_version = data.version;
    });
  }


  fe_version: string = Constants.version;
  be_version: string = "Unknown";


}
