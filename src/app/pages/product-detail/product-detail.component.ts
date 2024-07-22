import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { LeftContainerComponent } from '../../components/productDetail/left-container/left-container.component';
import { RightContainerComponent } from '../../components/productDetail/right-container/right-container.component';
import productJson from '../../jsonData/Product.json';
@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [HeaderComponent, LeftContainerComponent, RightContainerComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  product = productJson;
}
