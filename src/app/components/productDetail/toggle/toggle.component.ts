import { Component, Input } from '@angular/core';
import { DescriptionComponent } from '../description/description.component';
import { ReferAFriendComponent } from '../refer-a-friend/refer-a-friend.component';
import { ReviewsComponent } from '../reviews/reviews.component';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [DescriptionComponent, ReferAFriendComponent, ReviewsComponent, NgIf, NgClass],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.css'
})
export class ToggleComponent {
  @Input() reviewData: any;
  selectedComponent: string = 'reviews';

  selectComponent(component: string): void {
    this.selectedComponent = component;
  }

  getButtonClass(component: string): string {
    return this.selectedComponent === component
      ? 'bg-[#F2F6F4] border border-[#05422C] text-[#05422C]'
      : 'border border-[#f4f4f4]';
  }
}
