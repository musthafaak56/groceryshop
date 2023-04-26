import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';
import { EditQuantityComponent } from './edit-quantity/edit-quantity.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path:'',redirectTo:'groceryapp/home',pathMatch:'full'
  },
  {
    path:'groceryapp/home',component:HomeComponent
  },
  {
    path:'groceryapp/shop',component:ShopComponent
  },
  {
    path:'groceryapp/cart',component:CartComponent
  },
  {
    path:'groceryapp/admin',component:AdminComponent
  },
  {
    path:'groceryapp/update/:itemId',component:UpdateComponent
  },
  {
    path:'groceryapp/edit/:itemId',component:EditQuantityComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
