import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/Components/home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('../Components/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('../Components/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  // MultiLevel navigation using Lazy Loading
  {
    path: 'home', children: [
      {
        path: 'products',
        loadChildren: () => import('../Components/products/products.module').then(m => m.ProductsModule)
      },
      {
        path: 'productDetails',
        loadChildren: () => import('../Components/product-details/product-details.module').then(m => m.ProductDetailsModule)
      },
    ]
  },
  {
    path: 'autocomplete',
    loadChildren: () => import('../Components/autocomplete/autocomplete.module').then(m => m.AutocompleteModule)
  },
  {
    path: '**',
    loadChildren: () => import('../Components/not-found/not-found.module').then(m => m.NotFoundModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
