import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PowerballComponent } from './powerball/powerball.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: 'powerball',
      component: PowerballComponent
    },
    {
      path:'',
      redirectTo:'powerball',
      pathMatch:'full'
    },
    {
      path: '**',
      component: PageNotFoundComponent
    }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
