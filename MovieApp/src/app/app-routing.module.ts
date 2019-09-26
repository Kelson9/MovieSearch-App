import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FindComponent} from './find/find.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  {path:'',redirectTo:'find',pathMatch:'full'},
  {path:'find',component:FindComponent},
  {path:'home',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
