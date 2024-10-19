import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { CiphersComponent } from './modules/ciphers/components/ciphers/ciphers.component';
import { HomeComponent } from './modules/home/components/home/home.component';
import { ConversComponent } from './modules/conversions/components/convers/convers.component';
import { CodesComponent } from './modules/codes/components/codes/codes.component';
import { LinksComponent } from './modules/links/components/links/links.component';
import { AnagramComponent } from './modules/anagram/components/anagram/anagram.component';

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
