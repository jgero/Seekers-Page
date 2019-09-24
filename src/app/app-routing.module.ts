import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { MoreComponent } from './more/more.component';
import { ShowsComponent } from './shows/shows.component';


const routes: Routes = [
  { path: '', component: MoreComponent },
  { path: 'shows', component: ShowsComponent }
];

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
