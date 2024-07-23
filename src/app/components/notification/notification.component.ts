import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})

export class NotificationComponent {
  subscription: Subscription = new Subscription();
  time: string = '23:15:00';
  totalSeconds: number = 23 * 3600 + 15 * 60;

  ngOnInit() {
    this.subscription = interval(1000).subscribe(() => this.updateTimer());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  updateTimer() {
    if (this.totalSeconds > 0) {
      this.totalSeconds--;
      this.time = this.secondsToTime(this.totalSeconds);
    }
  }

  secondsToTime(totalSeconds: number): string {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(seconds)}`;
  }

  pad(value: number): string {
    return value.toString().padStart(2, '0');
  }

}
