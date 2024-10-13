import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor() { }

  // stores registered routes to be passed to navbar
  private navigationTable: NavInfo[] = []

  // return whole table, to be use in navbar
  getNavInfoTable(){
    return this.navigationTable;
  }

  // assumes unique links and/or names
  registerNavInfo(navInfo: NavInfo){
    console.log("Registered new navigation information: " + navInfo.name)
    this.navigationTable.push(navInfo)
    // sort in ascending order
    this.navigationTable.sort((a, b) => a.name.localeCompare(b.name))
  }

}

export class NavInfo {
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