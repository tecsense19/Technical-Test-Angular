import { Routes } from '@angular/router';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/sleepytime-delta-9-thc-gummies' },
  { path: 'sleepytime-delta-9-thc-gummies', component: ProductDetailComponent },
];
