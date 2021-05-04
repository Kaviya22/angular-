import{ TemplateformComponent } from './templateform/templateform.component';
import{ ReactiveformComponent } from './reactiveform/reactiveform.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'templateform', component:TemplateformComponent},
  {path:'reactiveform', component:ReactiveformComponent},
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
