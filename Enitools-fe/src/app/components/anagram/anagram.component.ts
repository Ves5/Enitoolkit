import { Component} from '@angular/core';
import { ApiHttpService } from 'src/app/services/api-http.service';

@Component({
  selector: 'app-anagram',
  templateUrl: './anagram.component.html',
  styleUrls: ['./anagram.component.css']
})
export class AnagramComponent {
  anagrams: any = {};
  Object = Object;
  state: string = "idling"; // "loading"; "showing"

  scrambled: string = "";

  constructor(private apiService: ApiHttpService) {}

  solveAnagrams(){
    this.state = "loading";
    this.apiService.getData("anagram/" + this.scrambled).subscribe(data => {
      this.anagrams = data;
      this.state = "showing";
    });
  }
}
