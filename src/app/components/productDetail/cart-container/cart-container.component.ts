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
  @Input() integra4g: boolean = true;
  @Input() integra8g: boolean = true;
  @Input() quantity: number = 2;

  handleQuantityChange(type: string) {
    if (type === '-') {
      if (this.quantity > 1) {
        this.quantity--;
      }
    } else {
      if (this.quantity < 10) {
        this.quantity++;
      }
    }
  }

  getPrice() {
    let qPrice = this.price * this.quantity;
    let otherPrice = (this.integra4g ? 2 : 0) + (this.integra8g ? 3 : 0);
    return qPrice + otherPrice;
  }
}
