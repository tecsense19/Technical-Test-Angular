import { Component, NgModule } from '@angular/core';
import reviewJson from "../../../jsonData/Reviews.json";
import { DatePipe } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [DatePipe, ModalComponent, FormsModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {
  reviews = reviewJson

  displayedReviews = 2;

  showMoreReviews() {
    this.displayedReviews += 2;
  }

  isModalOpen = false;
  stars = Array(5).fill(false);
  reviewText = '';
  rating = 0;

  rate(starIndex: number) {
    this.rating = starIndex;
    this.stars = this.stars.map((_, index) => index < starIndex);
  }

  submitReview() {
    if (this.reviewText && this.rating) {
      this.isModalOpen = true;
    } else {
      alert('Please provide a rating and review text.');
    }
  }

  handleModalClose() {
    this.isModalOpen = false;
    this.resetForm();
  }

  resetForm() {
    this.reviewText = '';
    this.rating = 0;
    this.stars = Array(5).fill(false);
  }

  isSubmitDisabled(): boolean {
    return !(this.reviewText.trim() && this.rating > 0);
  }
}
