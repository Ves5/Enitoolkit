import { HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { throwError } from 'rxjs';
import { ApiHttpService } from 'src/app/services/api-http.service';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-anagram',
  templateUrl: './anagram.component.html',
  styleUrls: ['./anagram.component.css'],
})
export class AnagramComponent {
  anagrams: any = {};
  Object = Object;
  state: string = "idling"; // "loading"; "showing"; "error"

  scrambled: string = "";
  exactMode: boolean = true;
  submitDisabled: boolean = false;

  constructor(private apiService: ApiHttpService, private breakpointObserver: BreakpointObserver) {}

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  public modeChange(){
    this.exactMode = !this.exactMode;
    this.validateLetters();
  }

  public validateLetters() {
    if ((this.scrambled.match(/\*/g)||[]).length == this.scrambled.length) {
      this.submitDisabled = false;
      return;
    }
    if (((this.scrambled.match(/\*/g)||[]).length > 3 && this.exactMode) || ((this.scrambled.match(/\*/g)||[]).length > 1 && !this.exactMode)){
      this.submitDisabled = false;
      return;
    }
    if (!(/^[a-zA-z\*]+$/.test(this.scrambled))) {
      this.submitDisabled = false;
      return;
    }
    this.submitDisabled = true;
  } 

  public solveAnagrams(){
    this.state = "loading";
    this.apiService.getData( !this.exactMode ? "anagram/" : "anagram/exact/", new HttpParams().set("key", this.scrambled))
    .subscribe({
      next: data => {
      this.anagrams = data;
      this.state = "showing";
    },
    error: error => this.handleError(error)});
  }

  private handleError(err: HttpErrorResponse){
    if (err.status == 500 || err.status == 400){
      this.state = "error";
      console.error(`Backend returned HTTP code ${err.status}, details: `, err.error);
    }

    return throwError(() => new Error('The request resulted in an error.'));
  }
}
