import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import './views/home/home.component';
import './views/card-crud/card-crud.component';
import { HomeComponent } from './views/home/home.component';
import { CardCrudComponent } from './views/card-crud/card-crud.component';
import { CardCreateComponent } from './components/card/card-create/card-create.component';
import { CardUpdateComponent } from './components/card/card-update/card-update.component';
import { CardDeleteComponent } from './components/card/card-delete/card-delete.component';
import { UserCrudComponent } from './views/user-crud/user-crud.component';

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
  },
  {
    path:"cards/update/:id",
    component: CardUpdateComponent
  },
  {
    path:"cards/delete/:id",
    component: CardDeleteComponent
  },
  {
    path: "users",
    component: UserCrudComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
