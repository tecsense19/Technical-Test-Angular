import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { LeftContainerComponent } from '../../components/productDetail/left-container/left-container.component';
import { RightContainerComponent } from '../../components/productDetail/right-container/right-container.component';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [HeaderComponent, LeftContainerComponent, RightContainerComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  product = {
    "id": 1,
    "name": "Sleepytime Delta-9 THC Gummies",
    "namePath": "sleepytime-delta-9-thc-gummies",
    "description": "1g",
    "price": 29,
    "stockQuantity": 13,
    "stockUnit": 1,
    "isSplit": false,
    "numREF": 186909,
    "imgURL": "https://images.ctfassets.net/9k15kskmpr22/7m4TlRQuuLzFMMUPcE0RQ6/792e9f1124a3c94d2caaf1de42dfd8e2/15mg_D9_sleepy_3.jpg",
    "categories": ["Sleepy"],
    "username": "admin",
    "city": "New York"
  }
}
