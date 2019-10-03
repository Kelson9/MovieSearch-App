import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FindComponent} from './find/find.component';
import {HomeComponent} from './home/home.component';
import {ViewComponent} from './view/view.component';

const routes: Routes = [
  {path:'',redirectTo:'find',pathMatch:'full'},
  {path:'find',component:FindComponent},
  {path:'home',component:HomeComponent},
  {path:'view',component:ViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
