import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ToggleComponent } from '../toggle/toggle.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-right-container',
  standalone: true,
  imports: [NgFor, ToggleComponent, FormsModule],
  templateUrl: './right-container.component.html',
  styleUrl: './right-container.component.css'
})
export class RightContainerComponent {
  @Input() product: any;
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
  }

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
