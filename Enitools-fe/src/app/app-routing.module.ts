import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CiphersComponent } from './ciphers/ciphers.component';
import { HomeComponent } from './home/home.component';
import { ConversComponent } from './convers/convers.component';
import { CodesComponent } from './codes/codes.component';
import { LinksComponent } from './links/links.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'ciphers', component: CiphersComponent},
  {path: 'conversions', component: ConversComponent},
  {path: 'codes', component: CodesComponent},
  {path: 'links', component: LinksComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
