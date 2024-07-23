import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart-container',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cart-container.component.html',
  styleUrl: './cart-container.component.css'
})
export class CartContainerComponent {
  @Input() product: any;
  @Input() price: number = 0;
  @Input() integra4g: boolean | any;
  @Input() integra8g: boolean | any;
  @Input() quantity: number | any;
  selectedWeight: string = "28g";

  handleQuantityChange(type: string) {
    if (type === '-') {
      if (this.quantity > 1) {
        this.quantity--;
      }
    } else {
      if (this.quantity < this.product.stockQuantity) {
        this.quantity++;
      }
    }
  }

  getPrice() {
    let qPrice = this.price * this.quantity;
    let otherPrice = (this.integra4g ? 2 : 0) + (this.integra8g ? 3 : 0);
    return qPrice + otherPrice;
  }

  handleWeightChange(weight: string) {
    this.selectedWeight = weight;
  }

  getSelectedWeightClass(weight: string) {
    return this.selectedWeight === weight ? 'bg-[#F3FBF4] border border-primary' : 'bg-[#F4F4F4] border border-[#F4F4F4]'
  }
}
