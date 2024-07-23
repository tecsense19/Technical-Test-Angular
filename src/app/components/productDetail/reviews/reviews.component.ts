import { Component } from '@angular/core';
import reviewJson from "../../../jsonData/Reviews.json";
import { DatePipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [NgFor, NgIf, DatePipe],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {
  reviews = reviewJson

  displayedReviews = 2;

  showMoreReviews() {
    this.displayedReviews += 2;
  }

}
