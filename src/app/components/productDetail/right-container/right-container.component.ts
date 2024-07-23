import { Component, Input } from '@angular/core';
import { ToggleComponent } from '../toggle/toggle.component';
import { FormsModule } from '@angular/forms';
import { CartContainerComponent } from '../cart-container/cart-container.component';
import reviewJson from "../../../jsonData/Reviews.json";

@Component({
  selector: 'app-right-container',
  standalone: true,
  imports: [ToggleComponent, FormsModule, CartContainerComponent],
  templateUrl: './right-container.component.html',
  styleUrl: './right-container.component.css'
})
export class RightContainerComponent {
  @Input() product: any;
  reviewData = reviewJson;
  price: number = 0;
  integra4g: boolean = true;
  integra8g: boolean = true;
  quantity: number = 2;
  features = [
    {
      title: "effects",
      desc: "Calming, Creative, Happy, Relaxing, Sleepy, Uplifting",
      icon: "assets/effects.png"
    },
    {
      title: "May relieve",
      desc: "Anxiety, Arthritis, Chronic Pain, Depression, Fatigue, Inflammation, Insomnia, Irregular Bowel Movements, Migraines, Mood Swings",
      icon: "assets/relief.png"
    },
    {
      title: "aromas",
      desc: "Chemical, Citrus, Earthy, Pungent, Sour",
      icon: "assets/aromas.png"
    }
  ]

  ngOnInit() {
    this.price = this.product.price;
    this.quantity = this.product.stockUnit;
  }
}
