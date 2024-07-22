import { Routes } from '@angular/router';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/product-detail' },
  { path: 'product-detail', component: ProductDetailComponent },
];
