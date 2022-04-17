import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import './views/home/home.component';
import './views/card-crud/card-crud.component';
import { HomeComponent } from './views/home/home.component';
import { CardCrudComponent } from './views/card-crud/card-crud.component';
import { CardCreateComponent } from './components/card/card-create/card-create.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "cards",
    component: CardCrudComponent
  },
  {
    path:"cards/create",
    component: CardCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
