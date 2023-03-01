import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ServiceComponent} from './service/service.component';

const routes: Routes = [
  {
    component:HomeComponent,
    path:''
  },
  {
    component:AboutComponent,
    path:'about'
  },
  {
    component:ServiceComponent,
    path:'service'
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
