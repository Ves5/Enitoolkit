import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { CiphersComponent } from './components/ciphers/ciphers.component';
import { HomeComponent } from './components/home/home.component';
import { ConversComponent } from './components/convers/convers.component';
import { CodesComponent } from './components/codes/codes.component';
import { LinksComponent } from './components/links/links.component';
import { AnagramComponent } from './components/anagram/anagram.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'ciphers', component: CiphersComponent},
  {path: 'conversions', component: ConversComponent},
  {path: 'codes', component: CodesComponent},
  {path: 'links', component: LinksComponent},
  {path: 'anagram', component: AnagramComponent}
];

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled'
}

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
