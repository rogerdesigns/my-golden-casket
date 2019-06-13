import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PowerballComponent } from './powerball/powerball.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [{
  path: 'powerball',
  component: PowerballComponent
},
{
  path: '',
  redirectTo: 'powerball',
  pathMatch: 'full'
},
{
  path: '**',
  component: PageNotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
