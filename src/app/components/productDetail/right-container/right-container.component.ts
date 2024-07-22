import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ToggleComponent } from '../toggle/toggle.component';

@Component({
  selector: 'app-right-container',
  standalone: true,
  imports: [NgFor, ToggleComponent],
  templateUrl: './right-container.component.html',
  styleUrl: './right-container.component.css'
})
export class RightContainerComponent {
  @Input() product: any;

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
}
