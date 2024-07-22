import { Component } from '@angular/core';
import reviewJson from "../../../jsonData/Reviews.json";

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {
  constructor() {
    console.log(reviewJson);

  }
}
