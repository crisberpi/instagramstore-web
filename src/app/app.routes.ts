import { Routes } from '@angular/router';
import { SignupComponent } from './components/misc/signup/signup.component';
import { LoginComponent } from './components/misc/login/login.component';
import { BoardComponent } from './components/misc/board/board.component';
import { UserBaseComponent } from './components/misc/user-base/user-base.component';

import { ShopBaseComponent } from './components/shops/shop-base/shop-base.component';
import { ShopListComponent } from './components/shops/shop-list/shop-list.component';
import { ShopCreateComponent } from './components/shops/shop-create/shop-create.component';
import { ShopItemComponent } from './components/shops/shop-item/shop-item.component';
import { ShopEditComponent } from './components/shops/shop-edit/shop-edit.component';
import { FavouritesComponent } from './components/shops/favourites/favourites.component';

import { ProductBaseComponent } from './components/products/product-base/product-base.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProductCreateComponent } from './components/products/product-create/product-create.component';
import { ProductItemComponent } from './components/products/product-item/product-item.component';
import { ProductDetailsResolverGuard } from './shared/resolvers/product-details-resolver.guard';


import { ShoppingCartListComponent } from './components/shoppingCart/shopping-cart-list/shopping-cart-list.component';
import { ShoppingCartItemComponent } from './components/shoppingCart/shopping-cart-item/shopping-cart-item.component';
import { ShoppingCartPaypalComponent } from './components/shoppingCart/shopping-cart-paypal/shopping-cart-paypal.component';


export const routes: Routes = [

  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },

  { path: '', component: BoardComponent },

  { path: 'shops', component: ShopListComponent },

  {
      path: 'users',
      component: UserBaseComponent,
      children: [
          {
              path: ':id',
              component: FavouritesComponent
          },
        ]
  },

  {
      path: 'new',
      component: ShopCreateComponent,
      children: [
          {
              path: ':id',
              component: ShopEditComponent
          },
        ]
  },




  {
      path: 'shops',
      component: ShopBaseComponent,
      children: [
          {
              path: ':id',
              component: ShopItemComponent
          },
        ]
  },

    { path: 'products', component: ProductListComponent },
    {
        path: 'products',
        component: ProductBaseComponent,
        children: [

          {
            path: 'new',
            component: ProductCreateComponent
          },
          {
            path: ':id',
            resolve: {
                product: ProductDetailsResolverGuard
            },
            component: ProductItemComponent
          },
  ]
},

    {
      path: 'shoppingCart',
      component: ShoppingCartListComponent
    },
    {
      path: ':id',
      component: ShoppingCartItemComponent
    },
    {
      path: 'paypal',
      component: ShoppingCartPaypalComponent
    },
];
