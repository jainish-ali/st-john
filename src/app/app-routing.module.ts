import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { DescriptionComponent } from './description/description.component';
import { FooterComponent } from './footer/footer.component';

import { WrapperComponent } from './wrapper/wrapper.component';

const routes: Routes = [
  {
    path:'',
    component:WrapperComponent
  },
 
  {
    path:'',
    component:FooterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
